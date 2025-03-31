"use client"

import { useEffect } from "react"

export function CalendlyWidget() {
  useEffect(() => {
    // Cargar el script de Calendly
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Limpiar el script cuando el componente se desmonte
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/dev-marianohayward/30min?primary_color=a900af"
      style={{ minWidth: "320px", height: "700px" }}
    />
  )
}

