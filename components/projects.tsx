"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

interface Project {
    id: number
    title: string
    description: string
    image: string
    technologies: string[]
    github?: string
    demo?: string
    hackathon: string
}

const projects: Project[] = [
    {
        id: 1,
        title: "Denkare",
        description:
            "AI-powered dental assistant for X-ray analysis, diagnosis, treatment planning, doctor feedback integration, and automated PDF reports.",
        image: "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F0c8b3c8cb2344c3ea71ca25d220d587a%2Fprojects%2Fb51f7d1bf0a94254899a5911bc3c7897%2Fb3269ce0-d95a-48ec-8160-458e57b68b17.jpeg&w=1440&q=75",
        technologies: ["React", "Deep Learning", "Express", "Langchain", "Yolo"],
        github: "https://github.com/innov8-tist/den-kare",
        demo: "https://youtu.be/AmN7yiZIQM0",
        hackathon: "Yudhya 2025",
    },
    {
        id: 2,
        title: "Gen Edu",
        description:
            "GenEdu is designed to enhance the learning experience by streamlining everyday tasks, improving study efficiency, and fostering better organization",
        image: "gen-edu.png",
        technologies: ["Langchain", "LangGraph", "Vitejs", "Expressjs", "FastAPI"],
        github: "https://github.com/innov8-tist/gen-edu",
        demo: "https://youtu.be/NanEyBxIP8s",
        hackathon: "Zynapse'25",
    },
    {
        id: 3,
        title: "I LOVE FINANCE ❤️",
        description:
            "This tool offers real-time financial insights, AI-powered chat, stock market analysis, loan status detection, credit score prediction, and financial news summarization. Users also receive a monthly AI-generated PDF report with insights and recommendations.",
        image: "i-love-finance.jpeg",
        technologies: ["Python", "Langchain", "Machine Learning", "Vitejs","Express"],
        github: "https://github.com/innov8-tist/innov8",
        demo:"https://youtu.be/HjPIh6R8lDs",
        hackathon: "Define 3 ",
    },
]

export default function Projects() {
    const [activeProject, setActiveProject] = useState<number | null>(null)

    return (
        <section id="projects" className="py-20 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Innovative solutions crafted during intense hackathon sessions. Each project represents our commitment to
                        solving real-world problems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: project.id * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            onMouseEnter={() => setActiveProject(project.id)}
                            onMouseLeave={() => setActiveProject(null)}
                        >
                            <Card className="bg-gray-900 border-gray-800 overflow-hidden h-full flex flex-col">
                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                                        style={{
                                            transform: activeProject === project.id ? "scale(1.05)" : "scale(1)",
                                        }}
                                    />
                                    <div className="absolute top-2 right-2">
                                        <Badge variant="secondary" className="bg-purple-900 text-white">
                                            {project.hackathon}
                                        </Badge>
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription className="text-gray-400">{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <Badge key={tech} variant="outline" className="bg-gray-800 text-gray-300">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between">
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
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

