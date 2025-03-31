"use client"

import type React from "react"

import { useState } from "react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Calendar, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

interface BookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const [date, setDate] = useState<Date>()
  const [timeSlot, setTimeSlot] = useState<string>()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [bookingStep, setBookingStep] = useState(1)
  const [bookingSuccess, setBookingSuccess] = useState(false)

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (bookingStep === 1 && date && timeSlot) {
      setBookingStep(2)
    } else if (bookingStep === 2 && name && email) {
      // Aquí iría la lógica para enviar los datos a un servicio de reservas
      setBookingSuccess(true)
    }
  }

  const resetAndClose = () => {
    setDate(undefined)
    setTimeSlot(undefined)
    setName("")
    setEmail("")
    setBookingStep(1)
    setBookingSuccess(false)
    onOpenChange(false)
  }

  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] md:max-w-[600px] bg-card text-card-foreground max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            {bookingSuccess ? "¡Reserva Confirmada!" : "Agendar una Llamada"}
          </DialogTitle>
        </DialogHeader>

        {bookingSuccess ? (
          <div className="py-6 flex flex-col items-center text-center space-y-4">
            <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center">
              <Check className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-lg font-medium">¡Gracias por tu reserva!</h3>
            <p className="text-muted-foreground">
              Hemos recibido tu solicitud para el día {date ? format(date, "PPP", { locale: es }) : ""} a las {timeSlot}
              . Te enviaremos un correo de confirmación a {email}.
            </p>
            <Button className="mt-4 w-full" onClick={resetAndClose}>
              Cerrar
            </Button>
          </div>
        ) : (
          <form onSubmit={handleBookingSubmit} className="space-y-4">
            {bookingStep === 1 ? (
              <>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Selecciona una fecha</h3>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-auto">
                      <CalendarComponent
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="border rounded-md p-3 bg-card w-full max-w-full"
                        disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                        classNames={{
                          month: "space-y-4",
                          caption: "flex justify-center pt-1 relative items-center",
                          caption_label: "text-sm font-medium",
                          nav: "space-x-1 flex items-center",
                          nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                          nav_button_previous: "absolute left-1",
                          nav_button_next: "absolute right-1",
                          table: "w-full border-collapse space-y-1",
                          head_row: "flex",
                          head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
                          row: "flex w-full mt-2",
                          cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                          day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
                          day_selected:
                            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                          day_today: "bg-accent text-accent-foreground",
                          day_outside: "text-muted-foreground opacity-50",
                          day_disabled: "text-muted-foreground opacity-50",
                          day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                          day_hidden: "invisible",
                        }}
                      />
                    </div>

                    {date && (
                      <div className="w-full space-y-3">
                        <h3 className="text-sm font-medium">Selecciona una hora</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[280px] overflow-y-auto pr-1">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              className={`py-2 px-3 text-xs rounded-md transition-colors ${
                                timeSlot === slot ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                              }`}
                              onClick={() => setTimeSlot(slot)}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <Button type="submit" className="w-full mt-4" disabled={!date || !timeSlot}>
                  Continuar
                </Button>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Fecha seleccionada</h3>
                  <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {date ? format(date, "PPP", { locale: es }) : ""} - {timeSlot}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre completo
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Correo electrónico
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div className="flex gap-2 mt-4">
                  <Button type="button" variant="outline" onClick={() => setBookingStep(1)} className="flex-1">
                    Atrás
                  </Button>
                  <Button type="submit" className="flex-1" disabled={!name || !email}>
                    Confirmar
                  </Button>
                </div>
              </>
            )}
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

