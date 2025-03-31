import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import { PerformanceOptimizations } from "@/components/performance-optimizations"

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Optimización: Usar 'swap' para evitar FOIT (Flash of Invisible Text)
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Divergent Project - Transformando el Futuro con IA",
  description: "Soluciones de Automatización con IA que revolucionarán tu negocio",
  icons: {
    icon: "/images/logoAgenciaIASinFONDO.png",
    apple: "/images/logoAgenciaIASinFONDO.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Precargar recursos críticos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.className} ${montserrat.variable}`}>
        <PerformanceOptimizations />
        {children}
      </body>
    </html>
  )
}



import './globals.css'