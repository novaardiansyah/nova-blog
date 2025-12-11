import { BlogPost } from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getPublishedPosts } from "@/lib/api";
import { BlogPostListItem } from "@/types";

export async function FeaturedPosts() {
  let posts: BlogPostListItem[] = [];
  let error = null;

  try {
    const response = await getPublishedPosts({ limit: 5 });
    posts = response.data;
  } catch (e) {
    console.error("Failed to fetch posts:", e);
    error = e instanceof Error ? e.message : "Failed to fetch posts";
  }

  if (error) {
    return (
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Gagal memuat artikel. Silakan coba lagi nanti.
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return (
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center py-12">
            <p className="text-muted-foreground">Belum ada artikel.</p>
          </div>
        </div>
      </section>
    );
  }

  const [featuredPost, ...otherPosts] = posts;

  return (
    <section className="pt-16 pb-4 md:pt-24 md:pb-6">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Artikel Terbaru
          </h2>
          <Button
            variant="ghost"
            className="group text-muted-foreground hover:text-foreground"
            asChild
          >
            <Link href="/blog">
              Lihat Semua
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Featured Post */}
        <div className="mb-12 pb-12 border-b border-border">
          <BlogPost post={featuredPost} featured />
        </div>

        {/* Other Posts - List Style */}
        {otherPosts.length > 0 && (
          <div>
            {otherPosts.map((post) => (
              <BlogPost key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
