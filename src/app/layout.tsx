import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Nova Blog - Blog Pribadi & Inspirasi",
    template: "%s | Nova Blog",
  },
  description:
    "Full Stack Developer yang antusias dalam membuat aplikasi web modern. Berbagi tutorial, pengalaman, dan perjalanan saya dalam web development.",
  keywords: [
    "blog",
    "full stack developer",
    "web development",
    "pemrograman",
    "tutorial",
    "Next.js",
    "React",
    "TypeScript",
    "Laravel",
  ],
  authors: [{ name: "Nova Ardiansyah" }],
  creator: "Nova Ardiansyah",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://blog.novaardiansyah.my.id",
    title: "Nova Blog - Blog Pribadi & Inspirasi",
    description:
      "Full Stack Developer yang antusias dalam membuat aplikasi web modern. Berbagi tutorial, pengalaman, dan perjalanan saya dalam web development.",
    siteName: "Nova Blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Blog - Blog Pribadi & Inspirasi",
    description:
      "Full Stack Developer yang antusias dalam membuat aplikasi web modern. Berbagi tutorial, pengalaman, dan perjalanan saya dalam web development.",
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
    <html lang="id" suppressHydrationWarning>
      <body className={`${sourceSans.variable} font-sans antialiased`}>
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
