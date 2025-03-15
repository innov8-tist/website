"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  bio: string
  social: {
    github?: string
    linkedin?: string
    twitter?: string
  }
}

const team: TeamMember[] = [
  {
    id: 1,
    name: "Manu Madhu",
    role: "Lead AI Developer",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHdBtHheCxThQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712315249293?e=1747267200&v=beta&t=CuZqPGW43DF4sImdw4awrhnKakjNGvRRbRxFlI0uGA8",
    bio: "Specializes in React and Node.js. Has won 5 hackathons as lead developer.",
    social: {
      github: "https://github.com/alexj",
      linkedin: "https://linkedin.com/in/alexj",
      twitter: "https://twitter.com/alexj",
    },
  },
  {
    id: 2,
    name: "Samantha Lee",
    role: "UI/UX Designer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Creates beautiful, intuitive interfaces. Background in psychology helps create user-centered designs.",
    social: {
      github: "https://github.com/samlee",
      linkedin: "https://linkedin.com/in/samlee",
    },
  },
  {
    id: 3,
    name: "Marcus Chen",
    role: "Machine Learning Engineer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Expert in TensorFlow and PyTorch. Passionate about applying AI to solve real-world problems.",
    social: {
      github: "https://github.com/marcusc",
      linkedin: "https://linkedin.com/in/marcusc",
      twitter: "https://twitter.com/marcusc",
    },
  },
  {
    id: 4,
    name: "Priya Patel",
    role: "Blockchain Developer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Specializes in smart contracts and decentralized applications. Ethereum and Solana expert.",
    social: {
      github: "https://github.com/priyap",
      linkedin: "https://linkedin.com/in/priyap",
    },
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 px-4 bg-black relative">
      {/* Sparkle effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full w-1 h-1 bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `twinkle ${Math.random() * 5 + 2}s infinite alternate`,
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A diverse group of innovators, problem-solvers, and tech enthusiasts who thrive under pressure and deliver
            exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gray-900 border-gray-800 overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
                </div>
                <CardHeader className="relative z-10 mt-[-40px]">
                  <CardTitle className="text-white">{member.name}</CardTitle>
                  <CardDescription className="text-purple-300">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-400">{member.bio}</p>
                </CardContent>
                <CardFooter className="flex justify-center gap-4 pb-6">
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

