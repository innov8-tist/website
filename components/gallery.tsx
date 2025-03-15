"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface GalleryImage {
  id: number
  src: string
  alt: string
  caption: string
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Team working at TechCrunch Hackathon",
    caption: "Our team deep in concentration at TechCrunch Hackathon 2023",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Winning moment at Global Hack",
    caption: "The moment we were announced as winners at Global Hack 2023",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Presentation at DevFest",
    caption: "Presenting our solution to the judges at DevFest 2022",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Team celebration",
    caption: "Celebrating after winning first place at AI Innovate Challenge",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Coding session",
    caption: "Late night coding session during 48-hour hackathon",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Award ceremony",
    caption: "Receiving our award at the International Developer Conference",
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

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

    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage.id)
    let newIndex

    if (direction === "next") {
      newIndex = (currentIndex + 1) % galleryImages.length
    } else {
      newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
    }

    setSelectedImage(galleryImages[newIndex])
  }

  return (
    <section id="gallery" className="py-20 px-4 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Moments captured during our hackathon journey. From intense coding sessions to victory celebrations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3]"
              onClick={() => openLightbox(image)}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
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
              className="relative max-w-4xl w-full"
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
                className="w-full h-auto max-h-[80vh] object-contain"
              />

              <div className="bg-black bg-opacity-70 p-4 mt-2 rounded">
                <p className="text-white text-center">{selectedImage.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

