"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

// Definir las imágenes para el mosaico
const mosaicImages = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2544_Original.jpg-p6qiCa5O9Mt61jEUMdOahafvp0z8by.jpeg",
    alt: "Trabajando en equipo junto con una empresa de software.",
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5141_Original.jpg-PbADDb6s4LqQnlFhGtmWvNiN9JHc4N.jpeg",
    alt: "Implementando por primera vez Inteligencia Artificial en la empresa.",
  },
  {
    id: 3,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ivy.jpg-Ez4E8O5JYxQ1xheicLZUIMdC7hkZRk.jpeg",
    alt: "Capacitando al equipo para salir a producción.",
  },
]

export function ImageMosaic() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="w-full h-[650px] md:h-[750px]">
      <div className="grid grid-cols-2 gap-4 h-full">
        {/* Lado izquierdo - 2 imágenes apiladas */}
        <div className="flex flex-col gap-4 h-full">
          {/* Primera imagen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-xl overflow-hidden flex-1 bg-black/20"
          >
            <div className="group relative w-full h-full">
              <Image
                src={mosaicImages[0].src || "/placeholder.svg"}
                alt={mosaicImages[0].alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{mosaicImages[0].alt}</p>
              </div>
            </div>
          </motion.div>

          {/* Segunda imagen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-xl overflow-hidden flex-1 bg-black/20"
          >
            <div className="group relative w-full h-full">
              <Image
                src={mosaicImages[1].src || "/placeholder.svg"}
                alt={mosaicImages[1].alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{mosaicImages[1].alt}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lado derecho - Imagen vertical */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative rounded-xl overflow-hidden h-full bg-black/20"
        >
          <div className="group relative w-full h-full">
            <Image
              src={mosaicImages[2].src || "/placeholder.svg"}
              alt={mosaicImages[2].alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm font-medium">{mosaicImages[2].alt}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
