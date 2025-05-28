"use client"

import { useEffect } from "react"

// Componente para aplicar optimizaciones de rendimiento a nivel de aplicación
export function PerformanceOptimizations() {
  useEffect(() => {
    // Desactivar animaciones durante el scroll para mejorar el rendimiento
    let scrollTimeout: NodeJS.Timeout
    const handleScroll = () => {
      document.body.classList.add("is-scrolling")
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        document.body.classList.remove("is-scrolling")
      }, 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    // Optimizar la carga de imágenes
    if ("loading" in HTMLImageElement.prototype) {
      const images = document.querySelectorAll("img")
      images.forEach((img) => {
        if (img.getAttribute("loading") !== "eager") {
          img.setAttribute("loading", "lazy")
        }
      })
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return null
}
