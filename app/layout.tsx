import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Innov8 - Hackathon Team",
  description: "Transforming ideas into reality, one hackathon at a time.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <div className="pt-20">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'