import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Achievements from "@/components/achievements"
import Team from "@/components/team"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Hero />
      <Projects />
      <Achievements />
      <Team />
      <Gallery />
      <Contact />
    </main>
  )
}

