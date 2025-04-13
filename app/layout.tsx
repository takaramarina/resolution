import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "keen-slider/keen-slider.min.css";  // <-- Keen Slider base styles

export const metadata: Metadata = {
  title: "Reiji Shimane",
  description: "Explore Reiji Shimane's gallery of artworks",
  generator: 'v0.dev',
  icons: {
    icon: "/favicon.png", // Path to the favicon in the `public/` folder
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



import './globals.css'