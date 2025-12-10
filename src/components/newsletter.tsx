"use client"

import { Button } from "@/components/ui/button"
import { Mail, Send } from "lucide-react"
import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setStatus("success")
    setEmail("")

    // Reset after 3 seconds
    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-muted/50 to-accent/5" />

      <div className="container mx-auto max-w-6xl px-4">
        <div className="relative rounded-2xl border border-border/40 bg-card/80 backdrop-blur-sm p-8 md:p-12 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Newsletter</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                Stay Updated
              </h2>
              <p className="text-muted-foreground max-w-md">
                Subscribe to my newsletter and get the latest articles, tutorials, and insights
                delivered straight to your inbox. No spam, unsubscribe anytime.
              </p>
            </div>

            {/* Form */}
            <div className="flex-1 max-w-md">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full h-11 px-4 rounded-lg border border-border bg-background/50 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "loading" || status === "success"}
                  className="min-w-[120px]"
                >
                  {status === "loading" ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending
                    </span>
                  ) : status === "success" ? (
                    <span className="flex items-center">
                      ✓ Subscribed
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Subscribe
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
              {status === "success" && (
                <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                  Thanks for subscribing! Check your inbox to confirm.
                </p>
              )}
              <p className="text-xs text-muted-foreground mt-3">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
