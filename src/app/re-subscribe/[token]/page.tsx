"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Home, Mail, Sparkles } from "lucide-react"
import { ClipLoader } from "react-spinners"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

interface ReSubscribeData {
  email: string;
  subscribed_at: string;
  verified_at: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data?: ReSubscribeData;
}

export default function ReSubscribePage() {
  const params = useParams()
  const token = params.token as string

  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [data, setData] = useState<ReSubscribeData | null>(null)
  const [message, setMessage] = useState("")

  useEffect(() => {
    const resubscribe = async () => {
      try {
        const [response] = await Promise.all([
          fetch(`/api/blog-subscribers/re-subscribe`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
          }),
          new Promise(resolve => setTimeout(resolve, 2000))
        ])

        const result: ApiResponse = await response.json()

        if (result.success && result.data) {
          setStatus("success")
          setData(result.data)
          setMessage(result.message)
        } else {
          setStatus("error")
          setMessage(result.message || "Gagal berlangganan kembali")
        }
      } catch {
        setStatus("error")
        setMessage("Gagal terhubung ke server")
      }
    }

    if (token) {
      resubscribe()
    }
  }, [token])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <section className="relative overflow-hidden min-h-[60vh] flex items-center justify-center">
      <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          {status === "loading" && (
            <>
              <div className="mb-6">
                <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center">
                  <ClipLoader size={40} color="currentColor" className="text-primary" />
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                Memproses Aktivasi...
              </h1>
              <p className="text-base md:text-lg text-muted-foreground">
                Mohon tunggu sebentar, kami sedang mengaktifkan kembali langganan Anda.
              </p>
            </>
          )}

          {status === "success" && data && (
            <>
              <div className="mb-6">
                <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
                Selamat Datang Kembali!
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed mb-6">
                Kami sangat senang Anda kembali! Berlangganan Anda telah berhasil diaktifkan kembali.
                Anda akan mulai menerima update artikel terbaru lagi.
              </p>

              <div className="w-full max-w-md bg-card border border-border rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Email Terdaftar</p>
                    <p className="font-medium">{data.email}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Diaktifkan kembali pada {formatDate(data.subscribed_at)}
                  </p>
                </div>
              </div>

              <Button size="lg" className="group" asChild>
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Lihat Artikel Terbaru
                </Link>
              </Button>
            </>
          )}

          {status === "error" && (
            <>
              <div className="mb-6">
                <div className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <XCircle className="w-10 h-10 text-red-600 dark:text-red-400" />
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                Gagal Aktivasi Kembali
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed mb-6">
                {message}
              </p>

              <Button size="lg" className="group" asChild>
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Ke Halaman Utama
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
