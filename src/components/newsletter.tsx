"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
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
    <section className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Dapatkan artikel terbaru
          </h2>
          <p className="text-muted-foreground mb-6">
            Berlangganan newsletter untuk mendapatkan update artikel, tutorial, dan tips langsung ke inbox Anda.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@novadev.my.id"
              required
              className="w-full sm:flex-1 min-w-0 h-11 px-4 rounded-lg border border-border bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
            <Button
              type="submit"
              disabled={status === "loading" || status === "success"}
            >
              {status === "loading" ? (
                "Mengirim..."
              ) : status === "success" ? (
                "✓ Berhasil"
              ) : (
                <>
                  Langganan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          {status === "success" && (
            <p className="text-sm text-green-600 dark:text-green-400 mt-3">
              Terima kasih! Cek inbox Anda untuk konfirmasi.
            </p>
          )}

          <p className="text-xs text-muted-foreground mt-4">
            Tanpa spam. Berhenti langganan kapan saja.
          </p>
        </div>
      </div>
    </section>
  )
}
