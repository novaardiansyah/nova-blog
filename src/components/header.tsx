"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-800 dark:bg-neutral-700 text-white text-sm font-semibold shadow-sm">
            NA
          </div>
          <span className="font-semibold text-xl tracking-tight">Nova Blog</span>
        </Link>

        {/* Actions - Only GitHub and Theme Toggle */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
            <Link href="https://github.com/novaardiansyah" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
