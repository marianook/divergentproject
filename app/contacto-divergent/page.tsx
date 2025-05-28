"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Brain, Clock } from "lucide-react"
import Image from "next/image"

import { ContactFooter } from "@/components/contact-footer"

export default function ContactoPage() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white" id="top">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-purple-950/20 to-black z-0" />

      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0" />

      <header className="sticky top-0 z-40 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image
                src="/images/logoAgenciaIASinFONDO.png"
                alt="Divergent Project Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold tracking-tight">Divergent Project</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link
              href="/#services"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white relative group"
            >
              Servicios
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/#benefits"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white relative group"
            >
              Beneficios
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/#story"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white relative group"
            >
              Historia
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/#faq"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white relative group"
            >
              Preguntas
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="relative z-10 py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Agenda tu Llamada de Implementación
              </h1>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Reserva una sesión personalizada con nuestro equipo para analizar tus necesidades y crear un plan de
                acción.
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden max-w-7xl mx-auto">
              <div className="grid md:grid-cols-[3fr_3fr] w-full">
                {/* Columna izquierda - Información del servicio */}
                <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 blur-sm"></div>
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-black">
                        <Brain className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Divergent Project AI</h2>
                      <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Llamada de Inteligencia Artificial /<br />
                        Desarrollo de Software
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-white/70">
                    <Clock className="h-5 w-5 text-blue-400" />
                    <span>30-60 Minutos</span>
                  </div>

                  <div className="mt-8 mb-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                  <div className="prose prose-invert max-w-none">
                    <p className="text-white/70 mb-4">
                      Una llamada en profundidad con nuestro equipo para identificar los{" "}
                      <strong className="text-blue-400">cuellos de botella</strong> y obstáculos que estás enfrentando
                      actualmente en tu negocio.
                    </p>
                    <p className="text-white/70 mb-4">
                      Luego, construiremos un{" "}
                      <strong className="text-purple-400">
                        plan personalizado de Automatización con IA / Desarrollo de software
                      </strong>{" "}
                      sobre cómo solucionarlos.
                    </p>
                    <div className="flex items-center gap-2 mt-6 text-yellow-400">
                      <span className="text-2xl">👋</span>
                      <p className="text-white/70">
                        ¡Estamos ansiosos por conocerte y ayudarte a transformar tu negocio!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Columna derecha - Widget de Calendly como iframe */}
                <div className="p-8 md:p-12">
                  <h3 className="text-xl font-bold mb-6">A solo un paso de ayudarte a transformar tu negocio.</h3>
                  <iframe
                    src="https://calendly.com/dev-marianohayward/divergentproject?hide_event_type_details=1&hide_gdpr_banner=1&background_color=000000&text_color=e4e4e4&primary_color=a900af&embed_type=inline"
                    width="100%"
                    height="700"
                    frameBorder="0"
                    title="Selecciona una fecha para tu llamada"
                    className="rounded-md"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ContactFooter />
    </div>
  )
}
