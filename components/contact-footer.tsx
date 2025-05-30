import Link from "next/link"
import { Mail, MapPin } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Image from "next/image"

export function ContactFooter() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
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
            <p className="text-sm text-muted-foreground mt-4 max-w-md">
              Transformando negocios con Inteligencia Artificial y desarrollo de software para mejorar la eficiencia y
              aumentar los ingresos.
            </p>
          </div>

          {/* Espacio en medio */}
          <div className="hidden md:block"></div>

          <div className="mt-8 sm:mt-0">
            <h3 className="text-lg font-medium mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#services" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/#story" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Mi Historia
                </Link>
              </li>
              <li>
                <Link href="/#benefits" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  Qué Obtendrás
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-sm text-muted-foreground hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-8 sm:mt-0">
            <h3 className="text-lg font-medium mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">Tucumán, capital, Argentina</span>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="h-5 w-5 text-green-500" />
                <Link
                  href="https://wa.me/543815214536"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  +54 381 521-4536
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">contacto@divergentproject.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2024 Divergent Project. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
              Términos
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
