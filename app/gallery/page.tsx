"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface GalleryImage {
  id: number
  src: string
  alt: string
  caption: string
  hackathon: string
  date: string
  location: string
  category: "team" | "project" | "award" | "event"
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Team working at ClimateHack 2023",
    caption: "Our team deep in concentration at ClimateHack 2023",
    hackathon: "ClimateHack 2023",
    date: "October 15-17, 2023",
    location: "San Francisco, CA",
    category: "team",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Winning moment at HealthTech Summit",
    caption: "The moment we were announced as winners at HealthTech Summit 2023",
    hackathon: "HealthTech Summit 2023",
    date: "August 5-7, 2023",
    location: "Boston, MA",
    category: "award",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Presentation at EduHack",
    caption: "Presenting our StudyBuddy solution to the judges at EduHack 2022",
    hackathon: "EduHack 2022",
    date: "November 12-14, 2022",
    location: "New York, NY",
    category: "event",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Team celebration",
    caption: "Celebrating after winning first place at SmartCity Hackathon 2022",
    hackathon: "SmartCity Hackathon 2022",
    date: "July 22-24, 2022",
    location: "Chicago, IL",
    category: "award",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Coding session",
    caption: "Late night coding session during AI Innovate Challenge 2022",
    hackathon: "AI Innovate Challenge 2022",
    date: "March 18-20, 2022",
    location: "Seattle, WA",
    category: "team",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Project demo",
    caption: "Demonstrating our CryptoWallet project at FinTech Disrupt 2021",
    hackathon: "FinTech Disrupt 2021",
    date: "October 8-10, 2021",
    location: "Virtual",
    category: "project",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Team photo",
    caption: "Team Innov8 at the opening ceremony of ClimateHack 2023",
    hackathon: "ClimateHack 2023",
    date: "October 15-17, 2023",
    location: "San Francisco, CA",
    category: "team",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Award ceremony",
    caption: "Receiving our award at the HealthTech Summit 2023",
    hackathon: "HealthTech Summit 2023",
    date: "August 5-7, 2023",
    location: "Boston, MA",
    category: "award",
  },
  {
    id: 9,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Project prototype",
    caption: "Early prototype of our EcoTrack application",
    hackathon: "ClimateHack 2023",
    date: "October 15-17, 2023",
    location: "San Francisco, CA",
    category: "project",
  },
  {
    id: 10,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Networking event",
    caption: "Networking with other teams and mentors at EduHack 2022",
    hackathon: "EduHack 2022",
    date: "November 12-14, 2022",
    location: "New York, NY",
    category: "event",
  },
  {
    id: 11,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Brainstorming session",
    caption: "Brainstorming ideas for our SmartCity Hackathon project",
    hackathon: "SmartCity Hackathon 2022",
    date: "July 22-24, 2022",
    location: "Chicago, IL",
    category: "team",
  },
  {
    id: 12,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Project demo",
    caption: "Final demo of our MediChain blockchain solution",
    hackathon: "HealthTech Summit 2023",
    date: "August 5-7, 2023",
    location: "Boston, MA",
    category: "project",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const navigateImage = (direction: "next" | "prev") => {
    if (!selectedImage) return

    const filteredImages =
      activeFilter === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeFilter)

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id)
    let newIndex

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    }

    setSelectedImage(filteredImages[newIndex])
  }

  const filteredImages =
    activeFilter === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeFilter)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "team":
        return "bg-blue-900/30 text-blue-400 border-blue-500/50"
      case "project":
        return "bg-green-900/30 text-green-400 border-green-500/50"
      case "award":
        return "bg-yellow-900/30 text-yellow-400 border-yellow-500/50"
      case "event":
        return "bg-purple-900/30 text-purple-400 border-purple-500/50"
      default:
        return "bg-gray-800 text-gray-300"
    }
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Photo Gallery</h1>
        <p className="text-xl text-gray-400 mb-8">
          A visual journey through our hackathon experiences, team moments, and achievements.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Badge
            className={`px-4 py-2 cursor-pointer text-sm ${
              activeFilter === "all" ? "bg-purple-900/50 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => setActiveFilter("all")}
          >
            All Photos
          </Badge>
          <Badge
            className={`px-4 py-2 cursor-pointer text-sm ${
              activeFilter === "team" ? "bg-blue-900/50 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => setActiveFilter("team")}
          >
            Team
          </Badge>
          <Badge
            className={`px-4 py-2 cursor-pointer text-sm ${
              activeFilter === "project" ? "bg-green-900/50 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => setActiveFilter("project")}
          >
            Projects
          </Badge>
          <Badge
            className={`px-4 py-2 cursor-pointer text-sm ${
              activeFilter === "award" ? "bg-yellow-900/50 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => setActiveFilter("award")}
          >
            Awards
          </Badge>
          <Badge
            className={`px-4 py-2 cursor-pointer text-sm ${
              activeFilter === "event" ? "bg-purple-900/50 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => setActiveFilter("event")}
          >
            Events
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredImages.map((image) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3] group"
            onClick={() => openLightbox(image)}
          >
            <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-4 right-4">
                <Badge className={`${getCategoryColor(image.category)}`}>
                  {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                </Badge>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm font-medium">{image.caption}</p>
                <p className="text-gray-300 text-xs mt-1">{image.hackathon}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 rounded-full p-2"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </button>

              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black bg-opacity-50 rounded-full p-2"
                onClick={() => navigateImage("prev")}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black bg-opacity-50 rounded-full p-2"
                onClick={() => navigateImage("next")}
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[70vh] object-contain mx-auto"
              />

              <div className="bg-black bg-opacity-70 p-6 mt-4 rounded">
                <h3 className="text-xl font-bold text-white mb-2">{selectedImage.caption}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    {selectedImage.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    {selectedImage.location}
                  </div>
                </div>
                <div className="mt-4">
                  <Badge className={`${getCategoryColor(selectedImage.category)}`}>
                    {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}
                  </Badge>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

