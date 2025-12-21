import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <section className="relative overflow-hidden min-h-[50vh] flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-transparent" />
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="relative mb-6">
            <span className="text-[80px] md:text-[120px] font-bold text-muted/30 leading-none select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 md:w-18 md:h-18 rounded-full border-3 border-dashed border-primary/30 flex items-center justify-center animate-pulse">
                <Search className="w-5 h-5 md:w-7 md:h-7 text-primary/50" />
              </div>
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
            Halaman Tidak{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Ditemukan
            </span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed mb-6">
            Maaf, halaman yang Anda cari tidak ada atau mungkin sudah dipindahkan.
            Silakan kembali ke halaman utama atau cari artikel lainnya.
          </p>

          <Button size="default" className="group" asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Ke Halaman Utama
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
