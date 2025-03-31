"use client"

import { useState, useEffect } from "react"

interface LazyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export function LazyImage({ src, alt, width, height, className }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px" },
    )

    const currentElement = document.getElementById(`lazy-img-${src.replace(/\W/g, "")}`)
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [src])

  return (
    <div
      id={`lazy-img-${src.replace(/\W/g, "")}`}
      className={`${className || ""} relative overflow-hidden`}
      style={{ width: width ? `${width}px` : "100%", height: height ? `${height}px` : "100%" }}
    >
      {isInView && (
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      )}
      {(!isInView || !isLoaded) && <div className="absolute inset-0 bg-gray-900 animate-pulse"></div>}
    </div>
  )
}

