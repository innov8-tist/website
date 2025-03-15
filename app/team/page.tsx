import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Twitter, Globe, Mail } from "lucide-react"
import Link from "next/link"

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  bio: string
  skills: string[]
  hackathonsAttended: number
  hackathonsWon: number
  joinedYear: number
  social: {
    github?: string
    linkedin?: string
    twitter?: string
    website?: string
    email?: string
  }
}

const team: TeamMember[] = [
  {
    id: 1,
    name: "Manu Madhu",
    role: "Lead AI Developer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Alex is our technical lead with expertise in React, Node.js, and cloud infrastructure. With a background in computer science and 5 years of industry experience, he brings both theoretical knowledge and practical skills to every hackathon.",
    skills: ["React", "Node.js", "AWS", "TypeScript", "MongoDB", "GraphQL"],
    hackathonsAttended: 18,
    hackathonsWon: 7,
    joinedYear: 2020,
    social: {
      github: "https://github.com/alexj",
      linkedin: "https://linkedin.com/in/alexj",
      twitter: "https://twitter.com/alexj",
      website: "https://alexjohnson.dev",
      email: "alex@innov8.com",
    },
  },
  {
    id: 2,
    name: "Samantha Lee",
    role: "UI/UX Designer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Samantha creates beautiful, intuitive interfaces that enhance user experience. Her background in psychology helps her design user-centered products that are both functional and delightful to use.",
    skills: ["UI Design", "UX Research", "Figma", "Adobe XD", "Prototyping", "User Testing"],
    hackathonsAttended: 15,
    hackathonsWon: 6,
    joinedYear: 2020,
    social: {
      github: "https://github.com/samlee",
      linkedin: "https://linkedin.com/in/samlee",
      website: "https://samanthalee.design",
      email: "samantha@innov8.com",
    },
  },
  {
    id: 3,
    name: "Marcus Chen",
    role: "Machine Learning Engineer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Marcus is our AI and machine learning expert. With a PhD in Computer Science specializing in neural networks, he brings cutting-edge algorithms and data science expertise to our projects.",
    skills: ["TensorFlow", "PyTorch", "Python", "Data Science", "NLP", "Computer Vision"],
    hackathonsAttended: 12,
    hackathonsWon: 5,
    joinedYear: 2021,
    social: {
      github: "https://github.com/marcusc",
      linkedin: "https://linkedin.com/in/marcusc",
      twitter: "https://twitter.com/marcusc",
      email: "marcus@innov8.com",
    },
  },
  {
    id: 4,
    name: "Priya Patel",
    role: "Blockchain Developer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Priya specializes in blockchain technology and decentralized applications. Her expertise in smart contracts and cryptocurrency has been crucial for our fintech and security-focused projects.",
    skills: ["Solidity", "Ethereum", "Smart Contracts", "Web3.js", "DeFi", "Cryptography"],
    hackathonsAttended: 10,
    hackathonsWon: 4,
    joinedYear: 2021,
    social: {
      github: "https://github.com/priyap",
      linkedin: "https://linkedin.com/in/priyap",
      website: "https://priyapatel.tech",
      email: "priya@innov8.com",
    },
  },
  {
    id: 5,
    name: "David Kim",
    role: "Backend Developer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "David is our backend architecture expert. He excels at designing scalable systems and optimizing database performance. His attention to detail ensures our applications can handle growth and maintain reliability.",
    skills: ["Java", "Spring Boot", "Microservices", "PostgreSQL", "Redis", "Docker"],
    hackathonsAttended: 8,
    hackathonsWon: 3,
    joinedYear: 2022,
    social: {
      github: "https://github.com/davidk",
      linkedin: "https://linkedin.com/in/davidk",
      twitter: "https://twitter.com/davidk",
      email: "david@innov8.com",
    },
  },
  {
    id: 6,
    name: "Olivia Martinez",
    role: "Product Manager",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Olivia brings structure and strategic thinking to our hackathon projects. She excels at understanding user needs, defining requirements, and ensuring our solutions solve real-world problems effectively.",
    skills: ["Product Strategy", "Agile", "Market Research", "Wireframing", "User Stories", "Presentation"],
    hackathonsAttended: 7,
    hackathonsWon: 4,
    joinedYear: 2022,
    social: {
      linkedin: "https://linkedin.com/in/oliviam",
      twitter: "https://twitter.com/oliviam",
      email: "olivia@innov8.com",
    },
  },
]

export default function TeamPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
        <p className="text-xl text-gray-400">
          The talented individuals behind Innov8's success. Our diverse team brings together expertise across various
          domains to create innovative solutions.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <Card key={member.id} className="bg-gray-900 border-gray-800 overflow-hidden h-full flex flex-col">
            <div className="relative overflow-hidden h-64">
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
            </div>

            <CardHeader className="relative z-10 mt-[-40px]">
              <CardTitle className="text-white text-2xl">{member.name}</CardTitle>
              <CardDescription className="text-purple-300 text-lg">{member.role}</CardDescription>
            </CardHeader>

            <CardContent className="flex-grow">
              <p className="text-gray-300 mb-6">{member.bio}</p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-2">SKILLS</h3>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span key={skill} className="bg-gray-800 text-gray-300 px-2 py-1 rounded-md text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-gray-800 rounded-lg p-3">
                    <p className="text-2xl font-bold text-white">{member.hackathonsAttended}</p>
                    <p className="text-xs text-gray-400">Hackathons Attended</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3">
                    <p className="text-2xl font-bold text-yellow-400">{member.hackathonsWon}</p>
                    <p className="text-xs text-gray-400">Hackathons Won</p>
                  </div>
                </div>

                <div className="text-center text-sm text-gray-400">Team member since {member.joinedYear}</div>
              </div>
            </CardContent>

            <CardFooter className="flex justify-center gap-4 pb-6 border-t border-gray-800 pt-4">
              {member.social.github && (
                <Link
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                </Link>
              )}
              {member.social.linkedin && (
                <Link
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              )}
              {member.social.twitter && (
                <Link
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              )}
              {member.social.website && (
                <Link
                  href={member.social.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Globe className="h-5 w-5" />
                </Link>
              )}
              {member.social.email && (
                <Link
                  href={`mailto:${member.social.email}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-20 max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl p-8 border border-purple-500/20">
        <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
        <p className="text-gray-300 mb-6">
          Are you passionate about technology and innovation? Do you thrive in fast-paced, creative environments? We're
          always looking for talented individuals to join our hackathon team.
        </p>
        <Link href="/contact">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium">
            Get in Touch
          </button>
        </Link>
      </div>
    </div>
  )
}

