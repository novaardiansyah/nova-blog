import Link from "next/link"
import Image from "next/image"

interface BlogPostProps {
  title: string
  excerpt: string
  slug: string
  coverImage?: string
  category: string
  date: string
  featured?: boolean
}

export function BlogPost({
  title,
  excerpt,
  slug,
  coverImage,
  category,
  date,
  featured = false,
}: BlogPostProps) {
  const isClickable = slug === "panduan-instalasi-composer-ubuntu-2025-12-10"
  const Wrapper = isClickable ? Link : "div"
  const wrapperProps = isClickable ? { href: `/blog/${slug}` } : {}

  if (featured) {
    // Featured post - large hero style
    return (
      <article className={`group ${!isClickable ? "cursor-default" : ""}`}>
        {/* @ts-ignore - Dynamic component props */}
        <Wrapper {...wrapperProps} className="block">
          {coverImage && (
            <div className="relative aspect-[2/1] mb-6 rounded-lg overflow-hidden">
              <Image
                src={coverImage}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-primary font-medium">{category}</span>
              <span className="text-muted-foreground">•</span>
              <time className="text-muted-foreground">{date}</time>
            </div>
            <h2 className={`text-2xl md:text-3xl font-bold leading-tight transition-colors ${isClickable ? "group-hover:text-primary" : ""}`}>
              {title}
            </h2>
            <p className="text-muted-foreground leading-relaxed line-clamp-3">
              {excerpt}
            </p>
          </div>
        </Wrapper>
      </article>
    )
  }

  // Regular post - horizontal layout
  return (
    <article className={`group py-6 border-b border-border last:border-b-0 ${!isClickable ? "cursor-default" : ""}`}>
      {/* @ts-ignore - Dynamic component props */}
      <Wrapper {...wrapperProps} className="flex gap-6">
        {coverImage && (
          <div className="relative w-32 h-24 md:w-40 md:h-28 flex-shrink-0 rounded-lg overflow-hidden">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="flex-1 min-w-0 space-y-2">
          <div className="flex items-center gap-3 text-sm">
            <span className="text-primary font-medium">{category}</span>
            <span className="text-muted-foreground">•</span>
            <time className="text-muted-foreground">{date}</time>
          </div>
          <h3 className={`text-lg md:text-xl font-semibold leading-snug transition-colors line-clamp-2 ${isClickable ? "group-hover:text-primary" : ""}`}>
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 hidden md:block">
            {excerpt}
          </p>
        </div>
      </Wrapper>
    </article>
  )
}
