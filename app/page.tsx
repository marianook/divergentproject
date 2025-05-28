// Ajustar el footer en la página principal para que sea responsivo

"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Brain,
  Briefcase,
  Calendar,
  Check,
  Code,
  Cpu,
  Database,
  Globe,
  HelpCircle,
  Layers,
  MessageSquare,
  Play,
  Sparkles,
  Zap,
} from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ImageMosaic } from "@/components/image-mosaic"

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoUrl = isVideoPlaying
    ? "https://www.youtube.com/embed/hsNt1ZjF7Fg?autoplay=1"
    : "https://www.youtube.com/embed/hsNt1ZjF7Fg"

  const handlePlayVideo = () => {
    setIsVideoPlaying(!isVideoPlaying)
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-purple-950/20 to-black z-0" />

      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0" />

      {/* Radial gradient */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent z-0" />

      {/* Announcement banner */}
      <div className="relative z-20 bg-gradient-to-r from-green-900 to-green-800 text-white py-3 px-4 text-center text-sm md:text-base">
        🚀 Si estás leyendo esto a inicios de junio, tu empresa podría estar generando cientos o miles de
        dólares EXTRA para el 15 de julio 🚀
      </div>

      <header className="sticky top-0 z-40 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image
                src="/images/logoAgenciaIASinFONDO.png"
                alt="Divergent Project Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold tracking-tight">Divergent Project</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#services"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white relative group"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Servicios
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#benefits"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white relative group"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Beneficios
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#story"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white relative group"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Historia
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            {/* Enlace a testimonios temporalmente eliminado */}
            <Link
              href="#faq"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white relative group"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Preguntas
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <Link href="/contacto-divergent">
            <Button className="relative overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:opacity-90"></span>
              <span className="relative flex items-center">
                Agendar Llamada
                <Calendar className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </Link>
        </div>
      </header>

      <main className="relative z-10">
        <section className="relative py-8 md:py-14 overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              {/* Logo en el centro */}
              <div className="flex flex-col items-center mb-4">
                <div className="relative w-28 h-28 mb-4">
                  <Image
                    src="/images/logoAgenciaIASinFONDO.png"
                    alt="Divergent Project Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <Sparkles className="h-4 w-4 text-blue-400" />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Revolucionando el futuro con IA
                </span>
              </motion.div>

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
                    Inteligencia Artificial
                  </span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto"
              >
                Divergent Project es tu socio estratégico para implementar soluciones de IA y desarrollo de software que
                revolucionarán tu negocio y te posicionarán a la vanguardia de la innovación tecnológica.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex justify-center"
              ></motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="relative max-w-5xl mx-auto"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-50 blur-md"></div>
              <div className="relative rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm overflow-hidden">
                <div className="aspect-[16/9] w-full bg-black/80 relative">
                  <iframe
                    className="w-full h-full object-cover"
                    src={videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                  {!isVideoPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <div
                        className="h-20 w-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center cursor-pointer border border-white/20 transition-transform duration-300 hover:scale-110"
                        onClick={handlePlayVideo}
                      >
                        <Play className="h-8 w-8 text-white fill-white" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6 flex justify-center">
                  <Link href="/contacto-divergent">
                    <Button className="relative overflow-hidden group h-12 px-6 text-base">
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:opacity-90"></span>
                      <span className="relative flex items-center">
                        Agendar llamada gratuita
                        <Calendar className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating elements */}
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        </section>

        <section id="quote" className="relative py-12 md:py-20 overflow-hidden">
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
              <h2 className="text-2xl md:text-5xl font-bold mb-8 leading-tight font-sans tracking-tight">
                <span
                  className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
                  style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "-0.02em" }}
                >
                  En tiempos de cambio, quien no se adapta estará bien equipado para un mundo que ya no existe
                </span>
              </h2>
              <p className="text-white/60 text-lg">
                En Divergent Project, abrazamos el cambio y la innovación para construir el futuro.
              </p>
            </motion.div>
          </div>

          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
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

        {/* 1. Sección de Servicios */}
        <section id="services" className="relative py-12 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-blue-400" />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Nuestros Servicios
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                  Soluciones de IA y Software a tu Medida
                </span>
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Ofrecemos un conjunto completo de servicios de IA y desarrollo de software diseñados para transformar tu
                negocio y llevarlo al siguiente nivel.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: <Cpu className="h-6 w-6 text-blue-400" />,
                  title: "Automatización de Procesos",
                  description:
                    "Automatizamos mediante sistemas profundos las operaciones más ineficientes de cualquier departamento. Utilizamos tecnología de primer nivel para reducir costes y tiempo.",
                  color: "from-blue-600 to-blue-400",
                },
                {
                  icon: <Code className="h-6 w-6 text-purple-400" />,
                  title: "Chatbots y Agentes",
                  description:
                    "Desarrollamos agentes de inteligencia artificial capaces de tomar decisiones autónomas en cualquier departamento o SOPs de pequeñas y medianas empresas.",
                  color: "from-purple-600 to-purple-400",
                },
                {
                  icon: <Layers className="h-6 w-6 text-pink-400" />,
                  title: "Desarrollo de Software a Medida",
                  description:
                    "Creamos aplicaciones y sistemas personalizados que se adaptan perfectamente a las necesidades específicas de tu negocio, con tecnologías modernas y escalables.",
                  color: "from-pink-600 to-pink-400",
                },
                {
                  icon: <Globe className="h-6 w-6 text-blue-400" />,
                  title: "Automatización con IA",
                  description:
                    "Creamos asistentes de inteligencia artificial que responden mensajes en segundos, gestionan consultas y optimizan la comunicación con tus clientes en múltiples canales.",
                  color: "from-blue-600 to-blue-400",
                },
                {
                  icon: <Database className="h-6 w-6 text-purple-400" />,
                  title: "Desarrollo Web",
                  description:
                    "Diseñamos y desarrollamos sitios web de alto rendimiento con las últimas tecnologías, enfocados en la experiencia del usuario y la escalabilidad.",
                  color: "from-purple-600 to-purple-400",
                },
                {
                  icon: <Briefcase className="h-6 w-6 text-pink-400" />,
                  title: "Consultoría Empresarial",
                  description:
                    "Ofrecemos asesoramiento experto en tecnología, evaluando la viabilidad de proyectos y diseñando hojas de ruta para la transformación digital de tu empresa.",
                  color: "from-pink-600 to-pink-400",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-70 blur-md transition-opacity duration-300"></div>
                  <div className="relative h-full rounded-2xl border border-white/10 bg-black/80 backdrop-blur-sm p-6 md:p-8 overflow-hidden transition-colors duration-300 group-hover:bg-black/50">
                    <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                    <div className="relative z-10">
                      <h3 className="mb-3 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                        {service.title}
                      </h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-5"></div>
                      <p className="text-white/70">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Link href="/contacto-divergent">
                <Button className="relative overflow-hidden group h-14 px-8 text-base">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:opacity-90"></span>
                  <span className="relative flex items-center">
                    Agendar tu llamada
                    <Calendar className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Sección de Qué Obtendrás */}
        <section id="benefits" className="relative py-12 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <Check className="h-4 w-4 text-green-400" />
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Beneficios
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                  Beneficios que transformarán tu negocio
                </span>
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Al trabajar con Divergent Project, obtendrás soluciones personalizadas que llevarán tu negocio al
                siguiente nivel.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: <Zap className="h-6 w-6 text-green-400" />,
                  title: "Aumento de Eficiencia",
                  description:
                    "Automatiza procesos repetitivos y libera a tu equipo para que se enfoque en tareas de mayor valor.",
                  color: "from-green-600 to-green-400",
                },
                {
                  icon: <Brain className="h-6 w-6 text-blue-400" />,
                  title: "Decisiones Basadas en Datos",
                  description:
                    "Obtén insights valiosos de tus datos para tomar decisiones más informadas y estratégicas.",
                  color: "from-blue-600 to-blue-400",
                },
                {
                  icon: <Globe className="h-6 w-6 text-purple-400" />,
                  title: "Escalabilidad Global",
                  description: "Implementa soluciones que crecen con tu negocio y se adaptan a diferentes mercados.",
                  color: "from-purple-600 to-purple-400",
                },
                {
                  icon: <MessageSquare className="h-6 w-6 text-pink-400" />,
                  title: "Mejor Experiencia del Cliente",
                  description:
                    "Ofrece interacciones personalizadas y respuestas inmediatas a las necesidades de tus clientes.",
                  color: "from-pink-600 to-pink-400",
                },
                {
                  icon: <Cpu className="h-6 w-6 text-blue-400" />,
                  title: "Reducción de Costos",
                  description: "Optimiza tus operaciones y reduce gastos innecesarios con soluciones inteligentes.",
                  color: "from-blue-600 to-blue-400",
                },
                {
                  icon: <Layers className="h-6 w-6 text-green-400" />,
                  title: "Ventaja Competitiva",
                  description: "Posiciónate a la vanguardia de tu industria con tecnología de punta que te diferencia.",
                  color: "from-green-600 to-green-400",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-70 blur-md transition-opacity duration-300"></div>
                  <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 overflow-hidden transition-colors duration-300 group-hover:bg-black/50">
                    <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                    <div className="relative z-10">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br border border-white/10 backdrop-blur-sm">
                        {benefit.icon}
                      </div>
                      <h3 className="mb-3 text-xl font-bold">{benefit.title}</h3>
                      <p className="text-white/70">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <Link href="/contacto-divergent">
                <Button className="relative overflow-hidden group h-14 px-8 text-base">
                  <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 transition-all duration-300 group-hover:opacity-90"></span>
                  <span className="relative flex items-center">
                    Descubre cómo transformar tu negocio
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Por qué elegir Divergent Project - Ahora debajo de Qué Obtendrás */}
        {/*
        <section id="features" className="relative py-12 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-50 blur-sm"></div>
                      <div className="relative h-full w-full">
                        <Image
                          src="/placeholder.svg?height=400&width=300"
                          alt="IA Automatización"
                          fill
                          className="object-cover rounded-xl"
                        />
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl aspect-square">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 opacity-50 blur-sm"></div>
                      <div className="relative h-full w-full">
                        <Image
                          src="/placeholder.svg?height=300&width=300"
                          alt="Robot IA"
                          fill
                          className="object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="relative overflow-hidden rounded-xl aspect-square">
                      <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-blue-600 opacity-50 blur-sm"></div>
                      <div className="relative h-full w-full">
                        <Image
                          src="/placeholder.svg?height=300&width=300"
                          alt="Tecnología Futurista"
                          fill
                          className="object-cover rounded-xl"
                        />
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-50 blur-sm"></div>
                      <div className="relative h-full w-full">
                        <Image
                          src="/placeholder.svg?height=400&width=300"
                          alt="Automatización Inteligente"
                          fill
                          className="object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full opacity-20 blur-2xl"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                  <Sparkles className="h-4 w-4 text-pink-400" />
                  <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Características
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent">
                    Por qué elegir Divergent Project
                  </span>
                </h2>
                <p className="text-white/70 text-lg mb-8">
                  Nuestra experiencia y enfoque único nos distinguen en el competitivo mundo de la IA.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: <Zap className="h-5 w-5 text-blue-400" />,
                      title: "Soluciones Rápidas",
                      description:
                        "Implementamos soluciones de IA en tiempo récord, permitiéndote ver resultados rápidamente.",
                    },
                    {
                      icon: <Globe className="h-5 w-5 text-purple-400" />,
                      title: "Enfoque Global",
                      description:
                        "Trabajamos con clientes de todo el mundo, adaptando nuestras soluciones a diferentes mercados y culturas.",
                    },
                    {
                      icon: <Cpu className="h-5 w-5 text-pink-400" />,
                      title: "Tecnología de Vanguardia",
                      description:
                        "Utilizamos las últimas innovaciones en IA para garantizar que nuestras soluciones sean siempre las más avanzadas.",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 backdrop-blur-sm group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-colors duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-white/70">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        */}

        {/* 3. Sección de Mi Historia */}
        <section id="story" className="relative py-12 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                  <Sparkles className="h-4 w-4 text-blue-400" />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Mi historia
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    Del código a la revolución
                  </span>
                </h2>
                <p className="text-white/70 text-lg mb-6">
                  Desde que comencé en el mundo del desarrollo, siempre tuve una inquietud: no quería ser solo un
                  programador más. Quería crear algo que realmente marcara la diferencia.
                </p>
                <p className="text-white/70 text-lg mb-6">
                  Durante años trabajé como desarrollador web, resolviendo problemas, optimizando sistemas y viendo cómo
                  la tecnología podía cambiar la vida de las personas. Pero algo faltaba. No quería seguir atado a un
                  escritorio cumpliendo órdenes. Quería construir. Innovar.
                </p>
                <p className="text-white/70 text-lg mb-6">
                  Fue entonces cuando descubrí el potencial de la Inteligencia Artificial y el desarrollo de software
                  moderno. No como conceptos futuristas, sino como herramientas reales que podían transformar negocios,
                  automatizar procesos y crear soluciones tecnológicas a medida.
                </p>
                <p className="text-white/70 text-lg mb-6">
                  Con esa visión en mente, fundé <span className="text-white font-semibold">Divergent Project</span>,
                  con un objetivo claro: hacer que la IA y el desarrollo de software de calidad dejen de ser un
                  privilegio de las grandes empresas y se conviertan en una ventaja competitiva para cualquier negocio.
                </p>
                <p className="text-white/70 text-lg mb-8">
                  Hoy, <span className="text-white font-semibold">Divergent Project</span> no solo desarrolla soluciones
                  de IA y software, sino que redefine la manera en que las empresas operan. No vendemos tecnología.
                  Construimos sistemas que piensan, aprenden y evolucionan para que los negocios crezcan sin límites.
                </p>
                <p className="text-white/70 text-lg mb-8 text-center text-xl font-semibold italic">
                  Si llegaste hasta acá, es porque también estás buscando algo más que simples herramientas. <br />
                  <span className="text-white">Bienvenido al futuro.</span> 🚀
                </p>

                <div className="flex justify-center w-full">
                  <Link href="/contacto-divergent">
                    <Button className="relative overflow-hidden group h-14 px-8 text-base">
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:opacity-90"></span>
                      <span className="relative flex items-center">
                        Agendar una Llamada
                        <Calendar className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-50 blur-md"></div>
                <div className="relative rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm overflow-hidden p-4">
                  <ImageMosaic />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. Sección de Testimonios */}

        {/* 5. Sección de FAQ - Convertida a acordeón */}
        <section id="faq" className="relative py-12 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <HelpCircle className="h-4 w-4 text-blue-400" />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Preguntas Frecuentes
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Resolvemos tus dudas
                </span>
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios y cómo podemos
                ayudarte.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "¿Cuánto tiempo se tarda en implementar la IA?",
                    answer:
                      "El tiempo promedio en crear las integraciones de inteligencia artificial en una estructura empresarial dependerá de muchos factores tales como los SOPs de cada empresa y el departamento afectado. Tenemos un éxito de integración de sistemas con nuestros clientes de 1 mes a 12 meses.",
                  },
                  {
                    question: "¿Por qué contratar a Divergent Project?",
                    answer:
                      "Por encima de todo, somos personas, empatizamos con los proyectos de nuestros clientes y nos mimetizamos con sus emociones, te acompañaremos en cada paso.",
                  },
                  {
                    question: "¿Imponen permanencia?",
                    answer:
                      "No. Confiamos tanto en la calidad y resultados de nuestros servicios que no obligamos a firmar ninguna cláusula de permanencia.",
                  },
                  {
                    question: "¿Dónde trabaján?",
                    answer:
                      "Ofrecemos nuestros servicios de IA en todo el mundo. Desplazándonos en cada caso para reunirnos con cada uno de nuestros clientes.",
                  },
                  {
                    question: "¿Cómo puedo empezar a trabajar con Divergent Project?",
                    answer:
                      "Lo primero que debemos analizar es si tu negocio/compañía cumple nuestras expectativas como cliente, rellena el formulario pinchando en el botón de abajo y nuestro Director de accesos se pondrá en contacto contigo en menos de 60 minutos, esta llamada será tu primer contacto con Divergent Project, si consideramos oportuno tu acceso a la agencia, programaremos una reunión directamente con Mariano Hayward (CEO) para analizar a fondo la viabilidad del proyecto.",
                  },
                  {
                    question: "¿Ofrecen soporte continuo después de la implementación?",
                    answer:
                      "Sí, todos nuestros proyectos incluyen un período de soporte post-implementación. Además, ofrecemos planes de mantenimiento y optimización continua para asegurar que las soluciones sigan evolucionando con tu negocio y mantengan su efectividad a largo plazo.",
                  },
                ].map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/5 group">
                      <div className="flex items-center gap-3 text-left">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                          <HelpCircle className="h-4 w-4 text-blue-400" />
                        </div>
                        <span className="font-medium text-base">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-2 text-white/70">
                      <div className="pl-11">{faq.answer}</div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-16 flex justify-center">
              <Link href="/contacto-divergent">
                <Button className="relative overflow-hidden group h-14 px-8 text-base">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:opacity-90"></span>
                  <span className="relative flex items-center">
                    Agendá una llamada
                    <Calendar className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CONTACTO
        <section id="contact" className="relative py-12 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <MessageSquare className="h-4 w-4 text-blue-400" />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Contacto
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Comienza tu Transformación Digital
                </span>
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Estamos listos para ayudarte a implementar soluciones de IA que revolucionarán tu negocio.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-lg mx-auto"
            >
              <div className="relative">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-50 blur-md"></div>
                <div className="relative rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm overflow-hidden p-6 md:p-8">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-white/70">
                        Nombre
                      </label>
                      <input
                        id="name"
                        placeholder="Tu nombre"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-white/70">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-white/70">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        placeholder="¿Cómo podemos ayudarte?"
                        className="min-h-[120px] w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <Button className="relative w-full h-12 overflow-hidden group">
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:opacity-90"></span>
                      <span className="relative flex items-center justify-center">
                        Enviar Mensaje
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        */}
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-black py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="col-span-1 sm:col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="relative w-10 h-10">
                  <Image
                    src="/images/logoAgenciaIASinFONDO.png"
                    alt="Divergent Project Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold tracking-tight">Divergent Project</span>
              </div>
              <p className="text-white/60 mb-6 max-w-md">
                Automatización inteligente para empresas que quieren escalar sin límites.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white transition-colors duration-300"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@marianohayward"
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white transition-colors duration-300"
                  rel="noreferrer"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Espacio en medio */}
            <div className="hidden md:block"></div>

            <div className="mt-8 sm:mt-0">
              <h3 className="text-lg font-bold mb-6">Servicios</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                    Automatización de Procesos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                    Chatbots y Agentes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                    Desarrollo de Software
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-8 sm:mt-0">
              <h3 className="text-lg font-bold mb-6">Contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-white/60 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <span className="text-white/60">Tucumán, San Miguel de Tucumán, Argentina</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-green-500 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  </svg>
                  <a
                    href="https://wa.me/543815214536"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors duration-300"
                  >
                    +54 3815214536
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-white/60 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span className="text-white/60">contacto@divergentproject.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()} Divergent Project. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 text-sm hover:text-white transition-colors duration-300">
                Términos de Servicio
              </a>
              <a href="#" className="text-white/60 text-sm hover:text-white transition-colors duration-300">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Animated particles */}
      <style jsx global>{`
@keyframes float {
  0% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(10px);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
}
`}</style>
    </div>
  )
}
