import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { getPublishedPosts } from "@/lib/api"

export async function Hero() {
  let latestPostSlug = "";

  try {
    const response = await getPublishedPosts({ limit: 1 });
    if (response.data.length > 0) {
      latestPostSlug = response.data[0].slug;
    }
  } catch (error) {
    console.error("Failed to fetch latest post:", error);
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-16 md:py-32">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 text-sm font-medium text-muted-foreground mb-8 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 mr-2 text-primary" />
            Selamat datang di blog pribadi saya
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Ide, Cerita, dan{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Inspirasi
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
            Full Stack Developer yang antusias membuat aplikasi web dan mobile modern.
            Bergabunglah dengan saya dalam berbagi tutorial, pengalaman, dan perjalanan
            membangun API yang handal, antarmuka yang bersih, dan solusi terkini.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {latestPostSlug && (
              <Button size="lg" className="group" asChild>
                <Link href={`/blog/${latestPostSlug}`}>
                  Baca Artikel Terbaru
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            )}
            <Button size="lg" variant="outline" asChild>
              <Link href="https://novaardiansyah.my.id?utm_source=nova-blog&utm_medium=referral&utm_campaign=about" target="_blank" rel="noopener noreferrer">
                Tentang Saya
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
