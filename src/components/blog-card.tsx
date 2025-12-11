import Link from "next/link";
import Image from "next/image";
import { BlogPostListItem } from "@/types";

interface BlogPostProps {
  post: BlogPostListItem;
  featured?: boolean;
}

export function BlogPost({ post, featured = false }: BlogPostProps) {
  if (featured) {
    // Featured post - large hero style
    return (
      <article className="group">
        <Link href={`/blog/${post.slug}`} className="block">
          {post.cover_image_url && (
            <div className="relative aspect-[2/1] mb-6 rounded-lg overflow-hidden">
              <Image
                src={post.cover_image_url}
                alt={post.cover_image_alt || post.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
          )}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              {post.category && (
                <>
                  <span
                    className="font-medium px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: post.category.color_hex }}
                  >
                    {post.category.name}
                  </span>
                  <span className="text-muted-foreground">•</span>
                </>
              )}
              <time className="text-muted-foreground">
                {post.formatted_published_at}
              </time>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight transition-colors group-hover:text-primary">
              {post.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          </div>
        </Link>
      </article>
    );
  }

  // Regular post - horizontal layout
  return (
    <article className="group py-6 border-b border-border last:border-b-0">
      <Link href={`/blog/${post.slug}`} className="flex gap-6">
        {post.cover_image_url && (
          <div className="relative w-32 h-24 md:w-40 md:h-28 flex-shrink-0 rounded-lg overflow-hidden">
            <Image
              src={post.cover_image_url}
              alt={post.cover_image_alt || post.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
        )}
        <div className="flex-1 min-w-0 space-y-2">
          <div className="flex items-center gap-3 text-sm">
            {post.category && (
              <>
                <span
                  className="font-medium px-2 py-0.5 rounded-full text-white text-xs"
                  style={{ backgroundColor: post.category.color_hex }}
                >
                  {post.category.name}
                </span>
                <span className="text-muted-foreground">•</span>
              </>
            )}
            <time className="text-muted-foreground">
              {post.formatted_published_at}
            </time>
          </div>
          <h3 className="text-lg md:text-xl font-semibold leading-snug transition-colors line-clamp-2 group-hover:text-primary">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 hidden md:block">
            {post.excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
}
