"use client"

import { usePathname } from "next/navigation"
import { Footer } from "./footer"

export function FooterWrapper() {
  const pathname = usePathname()

  // Show brand section only on homepage
  const showBrand = pathname === "/"

  return <Footer showBrand={showBrand} />
}
