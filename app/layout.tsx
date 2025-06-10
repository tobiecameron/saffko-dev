import type React from "react"
import "./globals.css"
import "./tailwind-fix.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ overflow: "hidden" }}>
      <head>
        <title>saffko</title>
        <meta name="description" content="design and engagement solutions" />
        <meta property="og:title" content="saffko" />
        <meta property="og:description" content="design and engagement solutions" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="saffko" />
        <meta name="twitter:description" content="design and engagement solutions" />
        <meta name="generator" content="v0.dev" />
      </head>
      <body className={inter.className} style={{ overflow: "hidden", margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
