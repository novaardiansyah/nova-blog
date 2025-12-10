import { BlogCard } from "@/components/blog-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

// Demo data - replace with actual data fetching
const featuredPosts = [
  {
    title: "Building Modern Web Applications with Next.js 15",
    excerpt: "Discover the latest features in Next.js 15 and learn how to build performant, scalable web applications with the new App Router and Server Components.",
    slug: "building-modern-web-applications-nextjs-15",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    category: "Web Development",
    date: "Dec 10, 2025",
    readTime: "8 min read",
    featured: true,
  },
  {
    title: "The Complete Guide to TypeScript in 2025",
    excerpt: "Master TypeScript from basics to advanced patterns. Learn type safety, generics, and best practices.",
    slug: "complete-guide-typescript-2025",
    coverImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
    category: "TypeScript",
    date: "Dec 8, 2025",
    readTime: "12 min read",
  },
  {
    title: "Mastering CSS Grid and Flexbox Layouts",
    excerpt: "Create beautiful, responsive layouts with modern CSS techniques. From basics to advanced patterns.",
    slug: "mastering-css-grid-flexbox",
    coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    category: "CSS",
    date: "Dec 5, 2025",
    readTime: "6 min read",
  },
  {
    title: "Introduction to Tailwind CSS v4",
    excerpt: "Explore the new features in Tailwind CSS v4 and how it changes the way we style web applications.",
    slug: "introduction-tailwind-css-v4",
    coverImage: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=800&q=80",
    category: "CSS",
    date: "Dec 3, 2025",
    readTime: "5 min read",
  },
  {
    title: "React Server Components Explained",
    excerpt: "Understanding how React Server Components work and when to use them in your applications.",
    slug: "react-server-components-explained",
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    category: "React",
    date: "Nov 28, 2025",
    readTime: "10 min read",
  },
]

export function FeaturedPosts() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Featured Posts
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Explore the latest articles on web development, programming, and technology.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 group" asChild>
            <Link href="/blog">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post, index) => (
            <BlogCard key={post.slug} {...post} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
