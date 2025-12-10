import { getPostBySlug, getPostSlugs } from "@/lib/api"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Metadata } from "next"
import { MarkdownContent } from "@/components/markdown-content"

export async function generateStaticParams() {
  const posts = getPostSlugs()
  return posts.map((post) => ({
    slug: post.replace(/\.md$/, ""),
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug)
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: post.coverImage ? [post.coverImage] : [],
      },
    }
  } catch {
    return {
      title: "Artikel Tidak Ditemukan",
    }
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let post
  try {
    post = await getPostBySlug(slug)
  } catch (e) {
    notFound()
  }

  // Format date
  const date = new Date(post.date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <article className="min-h-screen bg-background pb-12">
      {/* Hero Section */}
      <div className="relative h-[320px] md:h-[360px] w-full bg-muted/30">
        {post.coverImage && (
          <Image
            src={post.coverImage}
            alt={post.title}
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
                <span className="font-medium text-white bg-primary/80 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                  {post.category}
                </span>
                <span>•</span>
                <span className="flex items-center">
                  <Calendar className="mr-1.5 h-4 w-4" />
                  {date}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-sm">
                {post.title}
              </h1>

              <div className="flex items-center gap-3 pt-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{post.author?.name}</p>
                  <p className="text-xs text-gray-300">Penulis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 pt-12">
        <MarkdownContent content={post.content} />
      </div>
    </article>
  )
}
