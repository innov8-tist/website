import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Calendar, MapPin, Users } from "lucide-react"

interface Hackathon {
  id: string
  name: string
  date: string
  location: string
  organizer: string
  description: string
  result: "Winner" | "Runner-up" | "Finalist" | "Participant"
  projectName: string
  projectId: number
  image: string
  teamSize: number
  year: number
}

const hackathons: Hackathon[] = [
  {
    id: "climatehack-2023",
    name: "ClimateHack 2023",
    date: "October 15-17, 2023",
    location: "San Francisco, CA",
    organizer: "Climate Action Network",
    description:
      "A 48-hour hackathon focused on developing innovative solutions to combat climate change and promote sustainability.",
    result: "Winner",
    projectName: "EcoTrack",
    projectId: 1,
    image: "/placeholder.svg?height=300&width=600",
    teamSize: 4,
    year: 2023,
  },
  {
    id: "healthtech-summit-2023",
    name: "HealthTech Summit 2023",
    date: "August 5-7, 2023",
    location: "Boston, MA",
    organizer: "MedInnovate Foundation",
    description:
      "A premier hackathon for healthcare innovation, bringing together developers, healthcare professionals, and entrepreneurs.",
    result: "Winner",
    projectName: "MediChain",
    projectId: 2,
    image: "/placeholder.svg?height=300&width=600",
    teamSize: 5,
    year: 2023,
  },
  {
    id: "eduhack-2022",
    name: "EduHack 2022",
    date: "November 12-14, 2022",
    location: "New York, NY",
    organizer: "Future of Education Initiative",
    description:
      "A hackathon dedicated to revolutionizing education through technology and innovative learning approaches.",
    result: "Runner-up",
    projectName: "StudyBuddy",
    projectId: 3,
    image: "/placeholder.svg?height=300&width=600",
    teamSize: 3,
    year: 2022,
  },
  {
    id: "smartcity-hackathon-2022",
    name: "SmartCity Hackathon 2022",
    date: "July 22-24, 2022",
    location: "Chicago, IL",
    organizer: "Urban Tech Alliance",
    description:
      "A hackathon focused on developing smart solutions for urban challenges and improving city infrastructure.",
    result: "Winner",
    projectName: "UrbanPulse",
    projectId: 4,
    image: "/placeholder.svg?height=300&width=600",
    teamSize: 4,
    year: 2022,
  },
  {
    id: "ai-innovate-2022",
    name: "AI Innovate Challenge 2022",
    date: "March 18-20, 2022",
    location: "Seattle, WA",
    organizer: "AI Research Consortium",
    description:
      "A hackathon dedicated to pushing the boundaries of artificial intelligence and machine learning applications.",
    result: "Finalist",
    projectName: "NeuralAssist",
    projectId: 5,
    image: "/placeholder.svg?height=300&width=600",
    teamSize: 3,
    year: 2022,
  },
  {
    id: "fintech-disrupt-2021",
    name: "FinTech Disrupt 2021",
    date: "October 8-10, 2021",
    location: "Virtual",
    organizer: "Global FinTech Association",
    description:
      "A virtual hackathon focused on disrupting traditional financial services with innovative technology solutions.",
    result: "Winner",
    projectName: "CryptoWallet",
    projectId: 6,
    image: "/placeholder.svg?height=300&width=600",
    teamSize: 4,
    year: 2021,
  },
]

export default function HackathonsPage() {
  // Group hackathons by year
  const hackathonsByYear = hackathons.reduce(
    (acc, hackathon) => {
      if (!acc[hackathon.year]) {
        acc[hackathon.year] = []
      }
      acc[hackathon.year].push(hackathon)
      return acc
    },
    {} as Record<number, Hackathon[]>,
  )

  // Sort years in descending order
  const sortedYears = Object.keys(hackathonsByYear)
    .map(Number)
    .sort((a, b) => b - a)

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
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Hackathons</h1>
        <p className="text-xl text-gray-400">
          Our journey through various hackathons, showcasing our team's growth, challenges, and achievements over the
          years.
        </p>
      </div>

      <div className="space-y-20">
        {sortedYears.map((year) => (
          <div key={year} className="space-y-8">
            <h2 className="text-3xl font-bold border-b border-gray-800 pb-4">{year}</h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {hackathonsByYear[year].map((hackathon) => (
                <Link key={hackathon.id} href={`/hackathons/${hackathon.id}`}>
                  <Card className="bg-gray-900 border-gray-800 h-full hover:border-purple-500/50 transition-colors cursor-pointer overflow-hidden">
                    <div className="relative h-48">
                      <img
                        src={hackathon.image || "/placeholder.svg"}
                        alt={hackathon.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 to-transparent">
                        <Badge className={`${getResultBadgeColor(hackathon.result)}`}>{hackathon.result}</Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle>{hackathon.name}</CardTitle>
                      <CardDescription className="text-gray-400">Project: {hackathon.projectName}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-sm text-gray-400 line-clamp-2">{hackathon.description}</p>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-400">{hackathon.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-400">{hackathon.location}</span>
                        </div>
                        <div className="flex items-center gap-2 col-span-2">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-400">Team of {hackathon.teamSize}</span>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter>
                      <div className="flex items-center justify-between w-full">
                        <span className="text-sm text-gray-500">{hackathon.organizer}</span>
                        {hackathon.result === "Winner" && <Trophy className="h-5 w-5 text-yellow-500" />}
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

