import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  github?: string
  demo?: string
  hackathon: string
  hackathonId: string
  year: number
}

const projects: Project[] = [
  {
    id: 1,
    title: "EcoTrack",
    description:
      "A sustainable living app that helps users track and reduce their carbon footprint through daily activities and challenges.",
    longDescription:
      "EcoTrack is a comprehensive mobile application designed to help individuals and communities track, understand, and reduce their carbon footprint. The app provides personalized insights based on daily activities, offers challenges to promote sustainable habits, and creates a community-driven approach to environmental conservation.",
    image: "/placeholder.svg?height=300&width=600",
    technologies: ["React Native", "Node.js", "MongoDB", "TensorFlow"],
    github: "https://github.com/innov8/ecotrack",
    demo: "https://ecotrack.demo.com",
    hackathon: "ClimateHack 2023",
    hackathonId: "climatehack-2023",
    year: 2023,
  },
  {
    id: 2,
    title: "MediChain",
    description:
      "Blockchain-based medical records system ensuring secure and efficient sharing of patient data between healthcare providers.",
    longDescription:
      "MediChain leverages blockchain technology to create a secure, transparent, and efficient system for managing and sharing medical records. The platform ensures patient data privacy while enabling seamless access for authorized healthcare providers, reducing administrative overhead and improving care coordination.",
    image: "/placeholder.svg?height=300&width=600",
    technologies: ["Solidity", "React", "Ethereum", "IPFS"],
    github: "https://github.com/innov8/medichain",
    demo: "https://medichain.demo.com",
    hackathon: "HealthTech Summit 2023",
    hackathonId: "healthtech-summit-2023",
    year: 2023,
  },
  {
    id: 3,
    title: "StudyBuddy",
    description:
      "AI-powered study assistant that helps students organize notes, create study plans, and prepare for exams with personalized quizzes.",
    longDescription:
      "StudyBuddy is an intelligent learning companion that transforms how students prepare for exams. Using advanced AI algorithms, the application analyzes learning patterns, organizes study materials, generates custom quizzes, and creates optimized study schedules tailored to individual learning styles and goals.",
    image: "/placeholder.svg?height=300&width=600",
    technologies: ["Python", "Flask", "OpenAI", "PostgreSQL"],
    github: "https://github.com/innov8/studybuddy",
    hackathon: "EduHack 2022",
    hackathonId: "eduhack-2022",
    year: 2022,
  },
  {
    id: 4,
    title: "UrbanPulse",
    description:
      "Smart city monitoring system that collects and visualizes urban data to improve city planning and resource allocation.",
    longDescription:
      "UrbanPulse is a comprehensive smart city platform that collects, analyzes, and visualizes data from various urban sources including traffic sensors, air quality monitors, and public transportation systems. The platform provides city planners and officials with actionable insights to optimize resource allocation, reduce congestion, and improve quality of life for residents.",
    image: "/placeholder.svg?height=300&width=600",
    technologies: ["React", "Node.js", "AWS IoT", "TensorFlow", "D3.js"],
    github: "https://github.com/innov8/urbanpulse",
    hackathon: "SmartCity Hackathon 2022",
    hackathonId: "smartcity-hackathon-2022",
    year: 2022,
  },
]

export default function ProjectsPage() {
  // Group projects by year
  const projectsByYear = projects.reduce(
    (acc, project) => {
      if (!acc[project.year]) {
        acc[project.year] = []
      }
      acc[project.year].push(project)
      return acc
    },
    {} as Record<number, Project[]>,
  )

  // Sort years in descending order
  const sortedYears = Object.keys(projectsByYear)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
        <p className="text-xl text-gray-400">
          Explore our award-winning hackathon projects that showcase our team's innovation, technical expertise, and
          problem-solving abilities.
        </p>
      </div>

      <div className="space-y-20">
        {sortedYears.map((year) => (
          <div key={year} className="space-y-8">
            <h2 className="text-3xl font-bold border-b border-gray-800 pb-4">{year}</h2>

            <div className="grid gap-8 md:grid-cols-2">
              {projectsByYear[year].map((project) => (
                <div key={project.id} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                  <div className="relative h-64">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-purple-900 text-white">
                        {project.hackathon}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="bg-gray-800 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>

                      <Link href={`/hackathons/${project.hackathonId}`}>
                        <Button variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-900/20">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

