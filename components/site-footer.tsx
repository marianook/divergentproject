import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
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
            <p className="text-sm text-muted-foreground">
              Transformando negocios con Inteligencia Artificial para mejorar la eficiencia y aumentar los ingresos.
            </p>
          </div>

          {/* El espacio del medio queda libre */}

          <div>
            <h3 className="text-lg font-medium mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Automatización con IA
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Consultoría Estratégica
                </Link>
              </li>
              <li>
                <Link href="#story" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Implementación Personalizada
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">Tucumán, capital, Argentina</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">info@haywardproject.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2024 Divergent Project. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
              Términos
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
              Privacidad
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

