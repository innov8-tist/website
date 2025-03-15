import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  MapPin,
  Users,
  Building,
  Code,
  Lightbulb,
  Clock,
  Award,
  ArrowLeft,
  Github,
  ExternalLink,
  Share2,
} from "lucide-react"

interface TeamMember {
  name: string
  role: string
  image: string
}

interface Hackathon {
  id: string
  name: string
  date: string
  location: string
  organizer: string
  description: string
  longDescription: string
  result: "Winner" | "Runner-up" | "Finalist" | "Participant"
  prize?: string
  projectName: string
  projectId: number
  projectDescription: string
  projectImage: string
  teamMembers: TeamMember[]
  technologies: string[]
  challenges: string[]
  learnings: string[]
  duration: string
  github?: string
  demo?: string
  images: string[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
}

// This would typically come from a database or API
const hackathons: Hackathon[] = [
  {
    id: "climatehack-2023",
    name: "ClimateHack 2023",
    date: "October 15-17, 2023",
    location: "San Francisco, CA",
    organizer: "Climate Action Network",
    description:
      "A 48-hour hackathon focused on developing innovative solutions to combat climate change and promote sustainability.",
    longDescription:
      "ClimateHack 2023 brought together over 500 participants from around the world to tackle pressing environmental challenges. The event featured workshops, mentorship sessions, and networking opportunities with industry leaders in sustainability and climate tech. Teams were challenged to develop innovative solutions addressing climate change, renewable energy, sustainable agriculture, and waste reduction.",
    result: "Winner",
    prize: "$10,000",
    projectName: "EcoTrack",
    projectId: 1,
    projectDescription:
      "A sustainable living app that helps users track and reduce their carbon footprint through daily activities and challenges.",
    projectImage: "/placeholder.svg?height=600&width=1200",
    teamMembers: [
      {
        name: "Alex Johnson",
        role: "Full Stack Developer",
        image: "/placeholder.svg?height=400&width=400",
      },
      {
        name: "Samantha Lee",
        role: "UI/UX Designer",
        image: "/placeholder.svg?height=400&width=400",
      },
      {
        name: "Marcus Chen",
        role: "Machine Learning Engineer",
        image: "/placeholder.svg?height=400&width=400",
      },
      {
        name: "Priya Patel",
        role: "Blockchain Developer",
        image: "/placeholder.svg?height=400&width=400",
      },
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "TensorFlow", "AWS", "Google Maps API"],
    challenges: [
      "Developing an accurate carbon footprint calculation algorithm that accounts for various lifestyle factors",
      "Creating an intuitive user interface that encourages daily engagement",
      "Implementing real-time data processing for immediate feedback on user actions",
      "Integrating with external APIs for location-based sustainability recommendations",
    ],
    learnings: [
      "Advanced TensorFlow implementation for predictive modeling",
      "Optimizing React Native performance for complex real-time calculations",
      "Effective team collaboration under tight deadlines",
      "User-centered design principles for behavior change applications",
    ],
    duration: "48 hours",
    github: "https://github.com/innov8/ecotrack",
    demo: "https://ecotrack.demo.com",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    testimonial: {
      quote:
        "The Innov8 team demonstrated exceptional creativity and technical expertise in developing EcoTrack. Their solution stood out for its innovative approach to making sustainability accessible and engaging for everyday users.",
      author: "Dr. Emma Richards",
      role: "Head Judge, ClimateHack 2023",
    },
  },
  {
    id: "healthtech-summit-2023",
    name: "HealthTech Summit 2023",
    date: "August 5-7, 2023",
    location: "Boston, MA",
    organizer: "MedInnovate Foundation",
    description:
      "A premier hackathon for healthcare innovation, bringing together developers, healthcare professionals, and entrepreneurs.",
    longDescription:
      "HealthTech Summit 2023 was a three-day event that united technologists, healthcare professionals, and entrepreneurs to address critical challenges in healthcare delivery and patient care. The hackathon featured expert panels, hands-on workshops, and mentorship from leading healthcare innovators. Teams were tasked with developing solutions for medical data management, telehealth, preventive care, and healthcare accessibility.",
    result: "Winner",
    prize: "$15,000",
    projectName: "MediChain",
    projectId: 2,
    projectDescription:
      "Blockchain-based medical records system ensuring secure and efficient sharing of patient data between healthcare providers.",
    projectImage: "/placeholder.svg?height=600&width=1200",
    teamMembers: [
      {
        name: "Alex Johnson",
        role: "Full Stack Developer",
        image: "/placeholder.svg?height=400&width=400",
      },
      {
        name: "Samantha Lee",
        role: "UI/UX Designer",
        image: "/placeholder.svg?height=400&width=400",
      },
      {
        name: "Marcus Chen",
        role: "Machine Learning Engineer",
        image: "/placeholder.svg?height=400&width=400",
      },
      {
        name: "Priya Patel",
        role: "Blockchain Developer",
        image: "/placeholder.svg?height=400&width=400",
      },
      {
        name: "David Kim",
        role: "Healthcare Consultant",
        image: "/placeholder.svg?height=400&width=400",
      },
    ],
    technologies: ["Solidity", "React", "Ethereum", "IPFS", "Node.js", "Express", "FHIR API"],
    challenges: [
      "Ensuring HIPAA compliance while maintaining data accessibility",
      "Developing a secure permission system for different levels of healthcare providers",
      "Creating an intuitive interface for non-technical medical professionals",
      "Implementing efficient data retrieval for emergency situations",
    ],
    learnings: [
      "Advanced blockchain implementation for sensitive data",
      "Healthcare data standards and interoperability",
      "Balancing security with usability in healthcare applications",
      "Effective communication between technical and healthcare domain experts",
    ],
    duration: "72 hours",
    github: "https://github.com/innov8/medichain",
    demo: "https://medichain.demo.com",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    testimonial: {
      quote:
        "MediChain represents a breakthrough in how we approach medical records management. The Innov8 team's solution elegantly addresses the complex challenges of data security, accessibility, and interoperability that have long plagued healthcare systems.",
      author: "Dr. James Wilson",
      role: "Chief Innovation Officer, Boston Medical Center",
    },
  },
  {
    id: "eduhack-2022",
    name: "EduHack 2022",
    date: "November 12-14, 2022",
    location: "New York, NY",
    organizer: "Future of Education Initiative",
    description:
      "A hackathon dedicated to revolutionizing education through technology and innovative learning approaches.",
    longDescription:
      "EduHack 2022 gathered educators, developers, and students to reimagine the future of education. The event focused on creating solutions for personalized learning, educational accessibility, student engagement, and remote education tools. Participants had access to workshops on educational psychology, learning technologies, and user experience design for educational products.",
    result: "Runner-up",
    prize: "$5,000",
    projectName: "StudyBuddy",
    projectId: 3,
    projectDescription:
      "AI-powered study assistant that helps students organize notes, create study plans, and prepare for exams with personalized quizzes.",
    projectImage: "/placeholder.svg?height=600&width=1200",
    teamMembers: [
      {
        name: "Alex Johnson",
        role: "Full Stack Developer",
        image: "/placeholder.svg?height=400&width=400",
      },
      {
        name: "Samantha Lee",
        role: "UI/UX Designer",
        image: "/placeholder.svg?height=400&width=400",
      },
      {
        name: "Marcus Chen",
        role: "Machine Learning Engineer",
        image: "/placeholder.svg?height=400&width=400",
      },
    ],
    technologies: ["Python", "Flask", "OpenAI", "PostgreSQL", "React", "Natural Language Processing"],
    challenges: [
      "Developing accurate content understanding algorithms for diverse subjects",
      "Creating adaptive learning paths based on student performance",
      "Designing an engaging interface that motivates consistent studying",
      "Implementing efficient data processing for large volumes of study materials",
    ],
    learnings: [
      "Advanced NLP techniques for educational content analysis",
      "Adaptive learning algorithms and personalization",
      "Educational psychology principles for effective study tools",
      "Balancing AI assistance with active learning principles",
    ],
    duration: "48 hours",
    github: "https://github.com/innov8/studybuddy",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    testimonial: {
      quote:
        "StudyBuddy impressed our judges with its innovative approach to personalized learning. The team's deep understanding of both educational needs and technical possibilities resulted in a solution that could genuinely transform how students prepare for exams.",
      author: "Professor Sarah Johnson",
      role: "Education Technology Director, NYU",
    },
  },
]

export default function HackathonDetailPage({ params }: { params: { id: string } }) {
  const hackathon = hackathons.find((h) => h.id === params.id)

  if (!hackathon) {
    notFound()
  }

  const getResultBadgeColor = (result: Hackathon["result"]) => {
    switch (result) {
      case "Winner":
        return "bg-yellow-900/50 text-yellow-400 border-yellow-500/50"
      case "Runner-up":
        return "bg-gray-800 text-gray-300 border-gray-600"
      case "Finalist":
        return "bg-blue-900/50 text-blue-400 border-blue-500/50"
      default:
        return "bg-gray-800 text-gray-400 border-gray-700"
    }
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="mb-8">
        <Link href="/hackathons" className="flex items-center text-gray-400 hover:text-white transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Hackathons
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={hackathon.projectImage || "/placeholder.svg"}
              alt={hackathon.projectName}
              className="w-full h-auto aspect-video object-cover"
            />
            <div className="absolute top-4 left-4">
              <Badge className={`${getResultBadgeColor(hackathon.result)} text-lg px-4 py-1`}>{hackathon.result}</Badge>
            </div>
            {hackathon.prize && (
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center">
                <Award className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-white font-medium">{hackathon.prize} Prize</span>
              </div>
            )}
          </div>

          <div className="mt-8">
            <h1 className="text-4xl font-bold mb-2">{hackathon.projectName}</h1>
            <p className="text-xl text-gray-400 mb-6">{hackathon.projectDescription}</p>

            <div className="flex flex-wrap gap-3 mb-8">
              {hackathon.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="bg-gray-800 text-gray-300 px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              {hackathon.github && (
                <a
                  href={hackathon.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Button variant="outline" className="gap-2">
                    <Github className="h-4 w-4" />
                    View Code
                  </Button>
                </a>
              )}
              {hackathon.demo && (
                <a href={hackathon.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  <Button className="gap-2 bg-purple-600 hover:bg-purple-700">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                </a>
              )}
              <Button variant="ghost" className="gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>

            <Tabs defaultValue="overview">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="challenges">Challenges</TabsTrigger>
                <TabsTrigger value="learnings">Learnings</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                  <p className="text-gray-300 leading-relaxed">{hackathon.longDescription}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Team Members</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {hackathon.teamMembers.map((member, index) => (
                      <div key={index} className="text-center">
                        <div className="rounded-full overflow-hidden w-24 h-24 mx-auto mb-3">
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="font-medium">{member.name}</h3>
                        <p className="text-sm text-gray-400">{member.role}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {hackathon.testimonial && (
                  <div className="bg-gray-900 border-l-4 border-purple-500 rounded-r-lg p-6">
                    <p className="text-gray-300 italic mb-4">"{hackathon.testimonial.quote}"</p>
                    <div>
                      <p className="font-medium">{hackathon.testimonial.author}</p>
                      <p className="text-sm text-gray-400">{hackathon.testimonial.role}</p>
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="challenges" className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Challenges We Faced</h2>
                <div className="space-y-4">
                  {hackathon.challenges.map((challenge, index) => (
                    <div key={index} className="bg-gray-900 rounded-lg p-4 flex gap-4">
                      <div className="bg-purple-900/30 text-purple-400 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-300">{challenge}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-900/50 rounded-lg p-6 mt-8">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-gray-400" />
                    Time Constraint
                  </h3>
                  <p className="text-gray-300">
                    We had just {hackathon.duration} to ideate, design, develop, and present our solution. This required
                    efficient teamwork, clear communication, and focused execution to deliver a working prototype within
                    the tight deadline.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="learnings" className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Key Learnings</h2>
                <div className="space-y-4">
                  {hackathon.learnings.map((learning, index) => (
                    <div key={index} className="bg-gray-900 rounded-lg p-4 flex gap-4">
                      <div className="text-blue-400 flex-shrink-0">
                        <Lightbulb className="h-6 w-6" />
                      </div>
                      <p className="text-gray-300">{learning}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg p-6 mt-8 border border-purple-500/20">
                  <h3 className="text-xl font-bold mb-3">Our Takeaway</h3>
                  <p className="text-gray-300">
                    Participating in {hackathon.name} was an invaluable experience that pushed our technical and
                    creative boundaries. Beyond the technical skills we gained, we learned the importance of rapid
                    iteration, user-focused design, and effective presentation of complex ideas.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="gallery" className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hackathon.images.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${hackathon.projectName} screenshot ${index + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card className="bg-gray-900 border-gray-800 sticky top-24">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">{hackathon.name}</h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Date</h3>
                    <p className="text-gray-400">{hackathon.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-400">{hackathon.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Organizer</h3>
                    <p className="text-gray-400">{hackathon.organizer}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Team Size</h3>
                    <p className="text-gray-400">{hackathon.teamMembers.length} members</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Code className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Technologies</h3>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {hackathon.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="bg-gray-800 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                      {hackathon.technologies.length > 4 && (
                        <Badge variant="outline" className="bg-gray-800 text-gray-300">
                          +{hackathon.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-6">
                <h3 className="font-medium mb-3">Related Projects</h3>
                <div className="space-y-3">
                  {hackathons
                    .filter((h) => h.id !== hackathon.id)
                    .slice(0, 3)
                    .map((h) => (
                      <Link key={h.id} href={`/hackathons/${h.id}`}>
                        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors">
                          <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
                            <img
                              src={h.images[0] || "/placeholder.svg"}
                              alt={h.projectName}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">{h.projectName}</h4>
                            <p className="text-xs text-gray-400">{h.name}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

