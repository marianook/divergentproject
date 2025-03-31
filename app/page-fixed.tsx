"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Brain, Calendar, Play } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { SiteLogo } from "@/components/site-logo"
import { BookingModal } from "@/components/booking-modal"
import { FaqSection } from "@/components/faq-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const [bookingOpen, setBookingOpen] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Optimización: Limitar la frecuencia de actualización del cursor
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      })
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Optimización: Reducir el uso del cursor personalizado
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      transition: { type: "tween", ease: "linear", duration: 0.1 },
    },
    button: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      height: 60,
      width: 60,
      transition: { type: "tween", ease: "linear", duration: 0.1 },
    },
  }

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  const enterButton = () => setCursorVariant("button")
  const leaveButton = () => setCursorVariant("default")

  const openBooking = () => {
    setBookingOpen(true)
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Custom cursor - optimizado */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 z-50 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm pointer-events-none hidden md:block hardware-accelerated"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Background gradient - simplificado */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-purple-950/20 to-black z-0" />

      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0" />

      {/* Announcement banner */}
      <div className="relative z-20 bg-gradient-to-r from-green-900 to-green-800 text-white py-3 px-4 text-center text-sm md:text-base">
        🚀 Si estás leyendo esto a finales de marzo, tu clínica podría estar generando cientos o miles de dólares EXTRA
        para el 15 de mayo 🚀
      </div>

      <header className="sticky top-0 z-40 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 blur-sm"></div>
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-black">
                <Brain className="h-5 w-5 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight">Hayward Project</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#services"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white relative group"
              onMouseEnter={enterButton}
              onMouseLeave={leaveButton}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Servicios
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#story"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white relative group"
              onMouseEnter={enterButton}
              onMouseLeave={leaveButton}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Mi Historia
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#benefits"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white relative group"
              onMouseEnter={enterButton}
              onMouseLeave={leaveButton}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Qué Obtendrás
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white relative group"
              onMouseEnter={enterButton}
              onMouseLeave={leaveButton}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Testimonios
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white relative group"
              onMouseEnter={enterButton}
              onMouseLeave={leaveButton}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              FAQ
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <Button
            className="relative overflow-hidden group"
            onClick={openBooking}
            onMouseEnter={enterButton}
            onMouseLeave={leaveButton}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:opacity-90"></span>
            <span className="relative flex items-center">
              Agendar Llamada
              <Calendar className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
      </header>

      <main className="relative z-10">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <SiteLogo />

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              >
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Transformando el Futuro con
                </span>
                <br />
                <span className="relative">
                  <span className="absolute -inset-1 blur-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-30"></span>
                  <span className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Inteligencia Artificial y Marketing
                  </span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto"
              >
                Hayward Project es tu socio estratégico para implementar soluciones de IA y Marketing que revolucionarán
                tu negocio y te posicionarán a la vanguardia de la innovación.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  className="relative overflow-hidden group h-14 px-8 text-base"
                  onClick={openBooking}
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:opacity-90"></span>
                  <span className="relative flex items-center">
                    Agendar Llamada Gratuita
                    <Calendar className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 h-14 px-8 text-base"
                  onMouseEnter={enterButton}
                  onMouseLeave={leaveButton}
                >
                  Descubrir Más
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-20 relative max-w-5xl mx-auto"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-50 blur-md"></div>
              <div className="relative rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm overflow-hidden">
                <div className="aspect-[16/9] w-full bg-black/80 relative">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    poster="/placeholder.svg?height=1080&width=1920"
                    controls={isVideoPlaying}
                    loading="lazy"
                  >
                    <source src="https://example.com/your-video.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>

                  {!isVideoPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <div
                        className="h-20 w-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center cursor-pointer border border-white/20 transition-transform duration-300 hover:scale-110"
                        onClick={handlePlayVideo}
                        onMouseEnter={enterButton}
                        onMouseLeave={leaveButton}
                      >
                        <Play className="h-8 w-8 text-white fill-white" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6 flex justify-center">
                  <Button
                    className="relative overflow-hidden group h-12 px-6 text-base"
                    onClick={openBooking}
                    onMouseEnter={enterButton}
                    onMouseLeave={leaveButton}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:opacity-90"></span>
                    <span className="relative flex items-center">
                      Agendar tu llamada
                      <Calendar className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating elements - reducidos para mejorar rendimiento */}
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        </section>

        <section id="quote" className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="mb-6 flex justify-center">
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  "En tiempos de cambio, quienes estén abiertos al aprendizaje se adueñarán del futuro, mientras que
                  aquellos que no se adapten estarán bien equipados para un mundo que ya no existe"
                </span>
              </h2>
              <p className="text-white/60 text-lg">
                En Hayward Project, abrazamos el cambio y la innovación para construir el futuro.
              </p>
            </motion.div>
          </div>

          {/* Animated particles - reducidas para mejorar rendimiento */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="particle absolute rounded-full bg-white/30"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                  opacity: Math.random() * 0.5 + 0.2,
                }}
              ></div>
            ))}
          </div>
        </section>

        {/* Sección de FAQ */}
        <FaqSection />
      </main>

      <SiteFooter />

      {/* Booking Modal */}
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  )
}

