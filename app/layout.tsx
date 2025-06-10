import type React from "react"
import "./globals.css"
import "./tailwind-fix.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { getSiteSettings } from "@/lib/sanity"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings()

  // Default values if settings are not available
  const defaultTitle = "saffko"
  const defaultDescription = "design and engagement solutions"
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saffko.com"

  // Use settings if available, otherwise fall back to defaults
  const title = settings?.title || defaultTitle
  const description = settings?.description || defaultDescription

  // Get metadata from settings or use defaults
  const metadata = settings?.metadata || {}

  return {
    title: metadata.metaTitle || title,
    description: description,
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: metadata.ogTitle || title,
      description: metadata.ogDescription || description,
      type: metadata.ogType || "website",
      ...(metadata.ogImage && {
        images: [
          {
            url: metadata.ogImage.url,
            width: 1200,
            height: 630,
            alt: metadata.ogImage.alt || title,
          },
        ],
      }),
    },
    twitter: {
      card: metadata.twitterCard || "summary_large_image",
      title: metadata.twitterTitle || metadata.ogTitle || title,
      description: metadata.twitterDescription || metadata.ogDescription || description,
      ...(metadata.twitterImage && {
        images: [
          {
            url: metadata.twitterImage.url,
            width: 1200,
            height: 630,
            alt: metadata.twitterImage.alt || title,
          },
        ],
      }),
    },
    ...(metadata.canonicalUrl && {
      alternates: {
        canonical: metadata.canonicalUrl,
      },
    }),
    generator: "v0.dev",
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
