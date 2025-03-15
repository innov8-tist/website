"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
        <p className="text-xl text-gray-400">
          Have a question or want to collaborate? Reach out to us and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-purple-900 p-3 rounded-full">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <a href="mailto:team@innov8.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                  team@innov8.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-900 p-3 rounded-full">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <a href="tel:+15551234567" className="text-gray-400 hover:text-purple-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-900 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Location</h3>
                <p className="text-gray-400">San Francisco, California</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/innov8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-purple-900 transition-colors p-3 rounded-full"
              >
                <Github className="h-6 w-6 text-white" />
              </a>
              <a
                href="https://linkedin.com/company/innov8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-purple-900 transition-colors p-3 rounded-full"
              >
                <Linkedin className="h-6 w-6 text-white" />
              </a>
              <a
                href="https://twitter.com/innov8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-purple-900 transition-colors p-3 rounded-full"
              >
                <Twitter className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gray-900 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold mb-4">Interested in Collaboration?</h3>
            <p className="text-gray-300 mb-4">
              We're always open to new opportunities, partnerships, and hackathon teams. If you have a project idea or
              want to join forces for an upcoming hackathon, let us know!
            </p>
            <p className="text-gray-400">We typically respond within 24-48 hours.</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-gray-900 border-gray-700 text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="bg-gray-900 border-gray-700 text-white"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                placeholder="What is this regarding?"
                required
                className="bg-gray-900 border-gray-700 text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                className="bg-gray-900 border-gray-700 text-white min-h-[150px]"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            {isSubmitted && (
              <div className="bg-green-900 bg-opacity-20 border border-green-500 text-green-400 p-4 rounded">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

