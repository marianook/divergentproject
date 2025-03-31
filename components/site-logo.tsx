import { Brain } from "lucide-react"

export function SiteLogo() {
  return (
    <div className="flex flex-col items-center justify-center mb-6">
      <div className="relative mb-4">
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 blur-md"></div>
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-black">
          <Brain className="h-8 w-8 text-white" />
        </div>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Revolucionando el futuro con IA
      </h1>
    </div>
  )
}

