import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, MessageCircle, Heart } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { href: "https://github.com/novaardiansyah", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/novaardiansyah/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://api.whatsapp.com/send/?phone=6289506668480&text=Hi+Nova%2C+I+would+like+to+connect+with+you!", icon: MessageCircle, label: "WhatsApp" },
  ]

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          {/* Brand */}
          <div className="max-w-md">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-800 dark:bg-neutral-700 text-white text-sm font-semibold shadow-sm">
                NA
              </div>
              <span className="font-semibold text-xl tracking-tight">Nova Blog</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Seorang developer antusias yang berfokus pada pengembangan solusi digital yang efisien, bersih, dan berkualitas. Berkomitmen untuk menghadirkan inovasi terbaik dengan standar profesional.
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-2 mt-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>
            © 2025{" "}
            <Link href="/" className="hover:text-foreground transition-colors underline-offset-4 hover:underline">
              Nova Blog
            </Link>
            . All rights reserved.
          </p>
          <p className="flex items-center mt-2 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500 fill-red-500 animate-heartbeat" /> by{" "}
            <Link
              href="https://novaardiansyah.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 hover:text-foreground transition-colors underline-offset-4 hover:underline"
            >
              Nova Ardiansyah
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
