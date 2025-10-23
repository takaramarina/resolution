import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "keen-slider/keen-slider.min.css";  // <-- Keen Slider base styles
// app/layout.tsx
import "./globals.css";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";

const noto_sans_jp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const noto_serif_jp = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

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
    <html lang="en" className={`${noto_sans_jp.variable} ${noto_serif_jp.variable}`}>
      <body>{children}</body>
    </html>
  )
}



import './globals.css'