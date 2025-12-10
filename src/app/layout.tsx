import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nova Ardiansyah - Personal Blog & Insights",
    template: "%s | Nova Ardiansyah",
  },
  description:
    "Full Stack Developer passionate about creating modern web applications. Sharing tutorials, insights, and my journey in web development.",
  keywords: [
    "blog",
    "full stack developer",
    "web development",
    "programming",
    "tutorials",
    "Next.js",
    "React",
    "TypeScript",
    "Laravel",
  ],
  authors: [{ name: "Nova Ardiansyah" }],
  creator: "Nova Ardiansyah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blog.novaardiansyah.my.id",
    title: "Nova Ardiansyah - Personal Blog & Insights",
    description:
      "Full Stack Developer passionate about creating modern web applications. Sharing tutorials, insights, and my journey in web development.",
    siteName: "Nova Ardiansyah",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Ardiansyah - Personal Blog & Insights",
    description:
      "Full Stack Developer passionate about creating modern web applications. Sharing tutorials, insights, and my journey in web development.",
    creator: "@novaardiansyah",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
