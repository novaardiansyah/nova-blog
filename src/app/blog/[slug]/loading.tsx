import { ArrowLeft } from "lucide-react";

export default function BlogPostLoading() {
  return (
    <article className="min-h-screen bg-background pb-12">
      {/* Hero Section Skeleton */}
      <div className="relative h-[320px] md:h-[360px] w-full bg-muted/30">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="inline-flex items-center text-sm font-medium text-gray-300 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <div className="h-4 w-32 bg-white/20 rounded animate-pulse" />
            </div>

            <div className="space-y-4">
              {/* Category and Date Skeleton */}
              <div className="flex items-center gap-3 text-sm">
                <div className="h-6 w-20 bg-white/20 rounded-full animate-pulse" />
                <span className="text-gray-400">•</span>
                <div className="h-4 w-32 bg-white/20 rounded animate-pulse" />
              </div>

              {/* Title Skeleton */}
              <div className="space-y-3">
                <div className="h-10 md:h-14 w-full max-w-3xl bg-white/20 rounded animate-pulse" />
                <div className="h-10 md:h-14 w-3/4 max-w-2xl bg-white/20 rounded animate-pulse" />
              </div>

              {/* Author Skeleton */}
              <div className="flex items-center gap-3 pt-2">
                <div className="h-10 w-10 rounded-full bg-white/20 animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-24 bg-white/20 rounded animate-pulse" />
                  <div className="h-3 w-16 bg-white/20 rounded animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="space-y-6">
          {/* Paragraphs */}
          <div className="space-y-3">
            <div className="h-5 w-full bg-muted rounded animate-pulse" />
            <div className="h-5 w-full bg-muted rounded animate-pulse" />
            <div className="h-5 w-5/6 bg-muted rounded animate-pulse" />
          </div>

          <div className="space-y-3">
            <div className="h-5 w-full bg-muted rounded animate-pulse" />
            <div className="h-5 w-4/5 bg-muted rounded animate-pulse" />
            <div className="h-5 w-full bg-muted rounded animate-pulse" />
            <div className="h-5 w-3/4 bg-muted rounded animate-pulse" />
          </div>

          {/* Heading */}
          <div className="h-8 w-1/2 bg-muted rounded animate-pulse mt-8" />

          <div className="space-y-3">
            <div className="h-5 w-full bg-muted rounded animate-pulse" />
            <div className="h-5 w-full bg-muted rounded animate-pulse" />
            <div className="h-5 w-2/3 bg-muted rounded animate-pulse" />
          </div>

          {/* Code block placeholder */}
          <div className="h-40 w-full bg-muted/50 rounded-xl animate-pulse" />

          <div className="space-y-3">
            <div className="h-5 w-full bg-muted rounded animate-pulse" />
            <div className="h-5 w-5/6 bg-muted rounded animate-pulse" />
          </div>
        </div>
      </div>

      {/* Newsletter Skeleton */}
      <div className="border-t">
        <div className="container mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="h-8 w-48 bg-muted rounded animate-pulse" />
            <div className="h-5 w-80 bg-muted rounded animate-pulse" />
            <div className="flex gap-3 mt-4">
              <div className="h-10 w-64 bg-muted rounded animate-pulse" />
              <div className="h-10 w-24 bg-muted rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
