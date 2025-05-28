"use client"

import { HelpCircle, Plus, Minus } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section id="faq" className="py-20 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Preguntas Frecuentes</h2>
          </div>
          <p className="text-muted-foreground text-center max-w-2xl">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios y cómo podemos ayudarte a
            transformar tu clínica.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg overflow-hidden bg-card"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 group">
                  <div className="flex items-center gap-3 text-left">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <HelpCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium text-base">{faq.question}</span>
                  </div>
                  <div className="h-6 w-6 rounded-full border border-border flex items-center justify-center">
                    <Plus className="h-3 w-3 group-data-[state=open]:hidden" />
                    <Minus className="h-3 w-3 hidden group-data-[state=open]:block" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-muted-foreground animate-slideDown data-[state=closed]:animate-slideUp">
                  <div className="pl-11">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

const faqs = [
  {
    question: "¿Cuánto tiempo se tarda en implementar soluciones de IA y desarrollo?",
    answer:
      "El tiempo promedio en crear integraciones de IA y desarrollar software a medida dependerá de muchos factores como la complejidad del proyecto y los requisitos específicos. Tenemos un éxito de integración de sistemas con nuestros clientes de 1 mes a 12 meses.",
  },
  {
    question: "¿Por qué contratar a Divergent Project?",
    answer:
      "Por encima de todo, somos personas, empatizamos con los proyectos de nuestros clientes y nos mimetizamos con sus emociones, te acompañaremos en cada paso. Además, combinamos experiencia en IA y desarrollo de software para ofrecer soluciones integrales.",
  },
  {
    question: "¿Imponen permanencia?",
    answer:
      "No. Confiamos tanto en la calidad y resultados de nuestros servicios que no obligamos a firmar ninguna cláusula de permanencia.",
  },
  {
    question: "¿Dónde trabaján?",
    answer:
      "Ofrecemos nuestros servicios de IA y desarrollo de software en todo el mundo. Desplazándonos en cada caso para reunirnos con cada uno de nuestros clientes.",
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
]
