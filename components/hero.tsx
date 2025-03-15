"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Spotlight effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    const drawSpotlight = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create radial gradient for spotlight
      const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 300)

      gradient.addColorStop(0, "rgba(75, 0, 130, 0.3)")
      gradient.addColorStop(0.5, "rgba(75, 0, 130, 0.1)")
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add sparkles
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 2
        const opacity = Math.random() * 0.5

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      // Add pulse beam
      const time = Date.now() * 0.001
      const pulseSize = 100 + Math.sin(time) * 50

      const pulseGradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, pulseSize)

      pulseGradient.addColorStop(0, "rgba(128, 0, 255, 0.2)")
      pulseGradient.addColorStop(0.5, "rgba(128, 0, 255, 0.1)")
      pulseGradient.addColorStop(1, "rgba(0, 0, 0, 0)")

      ctx.fillStyle = pulseGradient
      ctx.beginPath()
      ctx.arc(mouseX, mouseY, pulseSize, 0, Math.PI * 2)
      ctx.fill()

      requestAnimationFrame(drawSpotlight)
    }

    drawSpotlight()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left md:order-1 order-2"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600">
            INNOV8
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300">
            Transforming ideas into reality,  We're a team of passionate innovators dedicated to
            creating cutting-edge solutions for tomorrow's problems. You probably have seen us in a hackathon
          </p>
          <div className="mt-8">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full">
              Explore Our Projects
            </Button>
          </div>
        </motion.div>

        {/* Group Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:order-2 order-1 flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 z-10 rounded-2xl" />
            <Image
              src="main.jpg"
              alt="Innov8 Team"
              width={800}
              height={600}
              className="object-cover w-full h-full rounded-2xl"
              priority
            />
            <div className="absolute inset-0 border border-purple-500/30 rounded-2xl z-20" />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="h-8 w-8 text-gray-400" />
      </div>
    </section>
  )
}

