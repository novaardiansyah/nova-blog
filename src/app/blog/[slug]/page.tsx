import { getPublishedPosts, getPostBySlug, getAllPostSlugs } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Eye } from "lucide-react";
import { Metadata } from "next";

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const response = await getPostBySlug(slug);
    const post = response.data;
    return {
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt,
      openGraph: {
        title: post.meta_title || post.title,
        description: post.meta_description || post.excerpt,
        images: post.cover_image_url ? [post.cover_image_url] : [],
      },
    };
  } catch {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    const response = await getPostBySlug(slug);
    post = response.data;
  } catch {
    notFound();
  }

  return (
    <article className="min-h-screen bg-background pb-12">
      {/* Hero Section */}
      <div className="relative h-[320px] md:h-[360px] w-full bg-muted/30">
        {post.cover_image_url && (
          <Image
            src={post.cover_image_url}
            alt={post.cover_image_alt || post.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto max-w-4xl px-4 pb-6 md:pb-8">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white mb-4 transition-colors group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Kembali ke Beranda
            </Link>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                {post.category && (
                  <>
                    <span
                      className="font-medium text-white px-2.5 py-0.5 rounded-full backdrop-blur-sm"
                      style={{ backgroundColor: post.category.color_hex }}
                    >
                      {post.category.name}
                    </span>
                    <span>•</span>
                  </>
                )}
                {post.formatted_published_at && (
                  <span className="flex items-center">
                    <Calendar className="mr-1.5 h-4 w-4" />
                    {post.formatted_published_at}
                  </span>
                )}
                {post.view_count > 0 && (
                  <>
                    <span>•</span>
                    <span className="flex items-center">
                      <Eye className="mr-1.5 h-4 w-4" />
                      {post.view_count} views
                    </span>
                  </>
                )}
              </div>

              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-sm">
                {post.title}
              </h1>

              <div className="flex items-center gap-3 pt-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    {post.author?.name}
                  </p>
                  <p className="text-xs text-gray-300">Penulis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 pt-12">
        <div
          className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-img:rounded-xl max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
