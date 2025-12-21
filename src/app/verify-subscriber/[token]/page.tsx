"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Home, Mail } from "lucide-react"
import { ClipLoader } from "react-spinners"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

interface VerificationData {
  email: string;
  verified_at: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data?: VerificationData;
}

export default function VerifySubscriberPage() {
  const params = useParams()
  const token = params.token as string

  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [data, setData] = useState<VerificationData | null>(null)
  const [message, setMessage] = useState("")

  useEffect(() => {
    const verifySubscriber = async () => {
      try {
        const [response] = await Promise.all([
          fetch(`/api/blog-subscribers/verify/${token}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
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
          setMessage(result.message || "Verifikasi gagal")
        }
      } catch {
        setStatus("error")
        setMessage("Gagal terhubung ke server")
      }
    }

    if (token) {
      verifySubscriber()
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
                Memverifikasi Email...
              </h1>
              <p className="text-base md:text-lg text-muted-foreground">
                Mohon tunggu sebentar, kami sedang memproses verifikasi Anda.
              </p>
            </>
          )}

          {status === "success" && data && (
            <>
              <div className="mb-6">
                <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
                Selamat Datang di{" "}
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                  Nova Blog!
                </span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed mb-6">
                Email Anda telah berhasil diverifikasi. Terima kasih telah bergabung dengan komunitas kami!
                Anda akan menerima artikel terbaru langsung ke inbox Anda.
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
                    Terverifikasi pada {formatDate(data.verified_at)}
                  </p>
                </div>
              </div>

              <Button size="lg" className="group" asChild>
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Jelajahi Artikel
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
                Verifikasi{" "}
                <span className="text-red-600 dark:text-red-400">
                  Gagal
                </span>
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
