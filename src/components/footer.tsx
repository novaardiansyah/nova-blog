import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, MessageCircle, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigation: [
      { href: "/", label: "Home" },
      { href: "/blog", label: "Blog" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
    resources: [
      { href: "/rss.xml", label: "RSS Feed" },
      { href: "/sitemap.xml", label: "Sitemap" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  }

  const socialLinks = [
    { href: "https://github.com/novaardiansyah", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/novaardiansyah/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://api.whatsapp.com/send/?phone=6289506668480&text=Hi+Nova%2C+I+would+like+to+connect+with+you!", icon: MessageCircle, label: "WhatsApp" },
  ]

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-800 dark:bg-neutral-700 text-white text-sm font-semibold shadow-sm">
                NA
              </div>
              <span className="font-semibold text-xl tracking-tight">Nova Ardiansyah</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Full Stack Developer passionate about creating modern web applications.
              Sharing thoughts, tutorials, and insights about web development and technology.
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

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Resources</h3>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {currentYear} Nova Ardiansyah. All rights reserved.</p>
          <p className="flex items-center mt-2 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500 fill-red-500" /> by Nova Ardiansyah
          </p>
        </div>
      </div>
    </footer>
  )
}
