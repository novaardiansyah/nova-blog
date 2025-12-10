import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface BlogCardProps {
  title: string
  excerpt: string
  slug: string
  coverImage?: string
  category: string
  date: string
  readTime: string
  author?: {
    name: string
    avatar?: string
  }
  featured?: boolean
}

export function BlogCard({
  title,
  excerpt,
  slug,
  coverImage,
  category,
  date,
  readTime,
  author = { name: "Nova Ardiansyah" },
  featured = false,
}: BlogCardProps) {
  return (
    <Card className={`group overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:border-primary/20 ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
      <Link href={`/blog/${slug}`} className="block">
        {/* Cover Image */}
        {coverImage && (
          <div className={`relative overflow-hidden ${featured ? 'aspect-[16/9]' : 'aspect-video'}`}>
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}

        <CardHeader className="space-y-3">
          {/* Category Badge */}
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-xs font-medium">
              {category}
            </Badge>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          {/* Title */}
          <h3 className={`font-bold leading-tight group-hover:text-primary transition-colors ${featured ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'}`}>
            {title}
          </h3>
        </CardHeader>

        <CardContent>
          {/* Excerpt */}
          <p className={`text-muted-foreground leading-relaxed ${featured ? 'text-base line-clamp-4' : 'text-sm line-clamp-2'}`}>
            {excerpt}
          </p>
        </CardContent>

        <CardFooter className="flex items-center justify-between pt-4 border-t border-border/40">
          {/* Author */}
          <div className="flex items-center space-x-2">
            <Avatar className="h-7 w-7">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback className="text-xs bg-primary/10 text-primary">
                {author.name.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">{author.name}</span>
          </div>

          {/* Meta */}
          <div className="flex items-center space-x-3 text-xs text-muted-foreground">
            <span className="flex items-center">
              <Calendar className="h-3.5 w-3.5 mr-1" />
              {date}
            </span>
            <span className="flex items-center">
              <Clock className="h-3.5 w-3.5 mr-1" />
              {readTime}
            </span>
          </div>
        </CardFooter>
      </Link>
    </Card>
  )
}
