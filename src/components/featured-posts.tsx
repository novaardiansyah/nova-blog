import { BlogPost } from "@/components/blog-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

// Demo data - replace with actual data fetching
const featuredPosts = [
  {
    title: "Membangun Aplikasi Web Modern dengan Next.js 15",
    excerpt: "Temukan fitur terbaru di Next.js 15 dan pelajari cara membangun aplikasi web yang performan dan skalabel dengan App Router dan Server Components.",
    slug: "building-modern-web-applications-nextjs-15",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    category: "Web Development",
    date: "10 Des 2025, 14:30",
  },
  {
    title: "Panduan Lengkap TypeScript di 2025",
    excerpt: "Kuasai TypeScript dari dasar hingga pola lanjutan. Pelajari type safety, generics, dan best practices.",
    slug: "complete-guide-typescript-2025",
    coverImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
    category: "TypeScript",
    date: "8 Des 2025, 10:15",
  },
  {
    title: "Menguasai Layout CSS Grid dan Flexbox",
    excerpt: "Buat layout yang indah dan responsif dengan teknik CSS modern. Dari dasar hingga pola lanjutan.",
    slug: "mastering-css-grid-flexbox",
    coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    category: "CSS",
    date: "5 Des 2025, 09:00",
  },
  {
    title: "Pengenalan Tailwind CSS v4",
    excerpt: "Jelajahi fitur baru di Tailwind CSS v4 dan bagaimana ini mengubah cara kita men-styling aplikasi web.",
    slug: "introduction-tailwind-css-v4",
    coverImage: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=800&q=80",
    category: "CSS",
    date: "3 Des 2025, 16:45",
  },
  {
    title: "React Server Components Dijelaskan",
    excerpt: "Memahami cara kerja React Server Components dan kapan menggunakannya dalam aplikasi Anda.",
    slug: "react-server-components-explained",
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    category: "React",
    date: "28 Nov 2025, 11:20",
  },
]

export function FeaturedPosts() {
  const [featuredPost, ...otherPosts] = featuredPosts

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Artikel Terbaru
          </h2>
          <Button variant="ghost" className="group text-muted-foreground hover:text-foreground" asChild>
            <Link href="/blog">
              Lihat Semua
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Featured Post */}
        <div className="mb-12 pb-12 border-b border-border">
          <BlogPost {...featuredPost} featured />
        </div>

        {/* Other Posts - List Style */}
        <div>
          {otherPosts.map((post) => (
            <BlogPost key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </section>
  )
}
