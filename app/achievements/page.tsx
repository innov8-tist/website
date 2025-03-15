import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Award, Medal, Star, Calendar } from "lucide-react"

interface Achievement {
  id: number
  title: string
  description: string
  date: string
  category: "hackathon" | "award" | "recognition"
  icon: React.ReactNode
  highlight?: boolean
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "First Place at ClimateHack 2023",
    description:
      "Won first place with our EcoTrack project, a sustainable living app that helps users track and reduce their carbon footprint.",
    date: "October 2023",
    category: "hackathon",
    icon: <Trophy className="h-8 w-8 text-yellow-500" />,
    highlight: true,
  },
  {
    id: 2,
    title: "Winner at HealthTech Summit 2023",
    description:
      "Secured the top prize with MediChain, a blockchain-based medical records system ensuring secure data sharing between healthcare providers.",
    date: "August 2023",
    category: "hackathon",
    icon: <Trophy className="h-8 w-8 text-yellow-500" />,
    highlight: true,
  },
  {
    id: 3,
    title: "Best Technical Implementation Award",
    description:
      "Received special recognition for technical excellence in our AI-powered study assistant at EduHack 2022.",
    date: "November 2022",
    category: "award",
    icon: <Award className="h-8 w-8 text-blue-500" />,
  },
  {
    id: 4,
    title: "Winner at SmartCity Hackathon 2022",
    description:
      "Won first place with UrbanPulse, a smart city monitoring system for improved urban planning and resource allocation.",
    date: "July 2022",
    category: "hackathon",
    icon: <Trophy className="h-8 w-8 text-yellow-500" />,
  },
  {
    id: 5,
    title: "Innovation Excellence Award",
    description: "Recognized for outstanding innovation in financial technology at FinTech Disrupt 2021.",
    date: "October 2021",
    category: "award",
    icon: <Star className="h-8 w-8 text-purple-500" />,
  },
  {
    id: 6,
    title: "Runner-up at AI Innovate Challenge",
    description: "Secured second place with our neural network solution for accessibility challenges.",
    date: "March 2022",
    category: "hackathon",
    icon: <Medal className="h-8 w-8 text-gray-400" />,
  },
  {
    id: 7,
    title: "Featured in Tech Innovators Magazine",
    description:
      "Our team was profiled in the 'Rising Stars' section of Tech Innovators Magazine for our consistent hackathon success.",
    date: "January 2023",
    category: "recognition",
    icon: <Star className="h-8 w-8 text-blue-500" />,
  },
  {
    id: 8,
    title: "Community Impact Award",
    description:
      "Recognized for creating technology solutions with significant social impact at the Global Tech for Good Summit.",
    date: "May 2022",
    category: "award",
    icon: <Award className="h-8 w-8 text-green-500" />,
  },
]

export default function AchievementsPage() {
  // Group achievements by year
  const achievementsByYear = achievements.reduce(
    (acc, achievement) => {
      const year = achievement.date.split(" ")[1]
      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(achievement)
      return acc
    },
    {} as Record<string, Achievement[]>,
  )

  // Sort years in descending order
  const sortedYears = Object.keys(achievementsByYear).sort((a, b) => Number(b) - Number(a))

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Achievements</h1>
        <p className="text-xl text-gray-400">
          A showcase of our team's accomplishments, awards, and recognition in the tech and hackathon community.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-800 z-0"></div>

        <div className="space-y-12 relative z-10">
          {sortedYears.map((year) => (
            <div key={year} className="mb-16">
              <div className="flex justify-center items-center mb-12">
                <div className="bg-purple-900 text-white text-xl font-bold py-2 px-6 rounded-full">{year}</div>
              </div>

              <div className="space-y-12">
                {achievementsByYear[year].map((achievement, index) => (
                  <div key={achievement.id} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-gray-900 border-4 border-purple-600 z-20"></div>

                    <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"}`}>
                      <Card
                        className={`bg-gray-900 border-gray-800 overflow-hidden ${
                          achievement.highlight ? "border-l-4 border-l-yellow-500" : ""
                        }`}
                      >
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div className="bg-gray-800 p-3 rounded-lg">{achievement.icon}</div>
                            <div className="flex items-center text-gray-400">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span className="text-sm">{achievement.date}</span>
                            </div>
                          </div>
                          <CardTitle className="text-xl mt-4">{achievement.title}</CardTitle>
                          <CardDescription className="text-gray-400">{achievement.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-end">
                            <div
                              className={`text-xs px-2 py-1 rounded-full ${
                                achievement.category === "hackathon"
                                  ? "bg-yellow-900/30 text-yellow-400"
                                  : achievement.category === "award"
                                    ? "bg-blue-900/30 text-blue-400"
                                    : "bg-purple-900/30 text-purple-400"
                              }`}
                            >
                              {achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl p-8 border border-purple-500/20">
        <h2 className="text-2xl font-bold mb-4">Our Journey Continues</h2>
        <p className="text-gray-300">
          These achievements represent milestones in our ongoing journey of innovation and growth. We're constantly
          pushing boundaries, learning new technologies, and tackling challenging problems. Stay tuned for more exciting
          projects and achievements from Team Innov8!
        </p>
      </div>
    </div>
  )
}

