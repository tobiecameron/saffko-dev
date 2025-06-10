import type React from "react"
import "./globals.css"
import "./tailwind-fix.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { getSiteSettings } from "@/lib/sanity"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata(): Promise<Metadata> {
  try {
    const settings = await getSiteSettings()

    // Default values
    const defaultTitle = "saffko"
    const defaultDescription = "design and engagement solutions"
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saffko.com"

    // Use settings if available, otherwise fall back to defaults
    const title = settings?.title || defaultTitle
    const description = settings?.description || defaultDescription
    const metadata = settings?.metadata || {}

    return {
      title: metadata.metaTitle || title,
      description: metadata.metaDescription || description,
      metadataBase: new URL(siteUrl),
      openGraph: {
        title: metadata.ogTitle || title,
        description: metadata.ogDescription || description,
        type: "website",
        ...(metadata.ogImage && {
          images: [metadata.ogImage.url],
        }),
      },
      twitter: {
        card: "summary_large_image",
        title: metadata.twitterTitle || metadata.ogTitle || title,
        description: metadata.twitterDescription || metadata.ogDescription || description,
        ...(metadata.twitterImage && {
          images: [metadata.twitterImage.url],
        }),
      },
      generator: "v0.dev",
    }
  } catch (error) {
    // Fallback metadata if Sanity fails
    return {
      title: "saffko",
      description: "design and engagement solutions",
      metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://saffko.com"),
      openGraph: {
        title: "saffko",
        description: "design and engagement solutions",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "saffko",
        description: "design and engagement solutions",
      },
      generator: "v0.dev",
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ overflow: "hidden" }}>
      <body className={inter.className} style={{ overflow: "hidden", margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
