"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Trophy, Calendar, DollarSign } from "lucide-react"

interface Achievement {
  id: number
  title: string
  value: number
  icon: React.ReactNode
  prefix?: string
  suffix?: string
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Hackathons Won",
    value: ("03") as number,
    icon: <Trophy className="h-10 w-10 text-yellow-500" />,
  },
  {
    id: 2,
    title: "Hackathons Attended",
    value: 5,
    icon: <Calendar className="h-10 w-10 text-blue-500" />,
  },
  {
    id: 3,
    title: "Prize Money",
    value: 35000,
    prefix: "$",
    icon: <DollarSign className="h-10 w-10 text-green-500" />,
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-950 relative">
      {/* Animated pulse beams */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(128, 0, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)`,
              animation: `pulse ${Math.random() * 4 + 3}s infinite alternate`,
              transform: "translate(-50%, -50%)",
              opacity: 0.7,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A track record of excellence across multiple hackathons and competitions. Our innovative solutions have been
            recognized globally.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-xl p-8 text-center border border-purple-900 border-opacity-30"
            >
              <div className="flex justify-center mb-4">{achievement.icon}</div>
              <CountUp
                value={achievement.value}
                prefix={achievement.prefix}
                suffix={achievement.suffix}
                isInView={isInView}
              />
              <h3 className="text-xl font-medium text-gray-300 mt-2">{achievement.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface CountUpProps {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
  isInView: boolean
}

function CountUp({ value, duration = 2, prefix = "", suffix = "", isInView }: CountUpProps) {
  const nodeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isInView || !nodeRef.current) return

    const start = 0
    const end = value
    const startTime = performance.now()
    const endTime = startTime + duration * 1000

    const countUp = () => {
      const now = performance.now()
      const progress = Math.min((now - startTime) / (endTime - startTime), 1)
      const currentValue = Math.floor(progress * end)

      if (nodeRef.current) {
        nodeRef.current.innerText = `${prefix}${currentValue.toLocaleString()}${suffix}`
      }

      if (progress < 1) {
        requestAnimationFrame(countUp)
      }
    }

    requestAnimationFrame(countUp)
  }, [value, duration, prefix, suffix, isInView])

  return (
    <div className="text-4xl font-bold text-white" ref={nodeRef}>
      {prefix}0{suffix}
    </div>
  )
}

