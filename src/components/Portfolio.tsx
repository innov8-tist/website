
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Eye } from "lucide-react";
import denkareLogo from "/denkare-logo2.webp"
import gistEdLogo from "/gisted.webp"
import ilfLogo from "/i-love-finance.webp"
import denkareImg1 from "/denkare/img1.png"
import denkareImg2 from "/denkare/img2.png"
import denkareImg3 from "/denkare/img3.png"
import denkareImg4 from "/denkare/img4.png"
import gistedImg1 from "/gisted/img1.png"
import gistedImg2 from "/gisted/img2.png"
import gistedImg3 from "/gisted/img3.png"
import gistedImg4 from "/gisted/img4.png"
import gistedImg5 from "/gisted/img5.png"
import ilf1 from "/i-love-finance/img1.jpeg"
import ilf2 from "/i-love-finance/img2.png"
import ilf3 from "/i-love-finance/img3.png"
import ilf4 from "/i-love-finance/img4.png"


interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  technologies: string[];
  images: string[];
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Denkare",
    shortDescription: "AI-powered dental assistant",
    fullDescription: "Dental diagnosis is often manual, time-consuming, and prone to errors, requiring expert interpretation of X-rays and extensive documentation. Our AI-powered assistant automates anomaly detection in X-rays, providing faster and more accurate insights. It integrates a conversational AI that retains patient history, allowing doctors to quickly access past records. AI-generated diagnosis reports and treatment plans help streamline decision-making, while doctors can review, refine, and provide feedback to improve AI accuracy over time. The system also automates PDF report generation, reducing administrative workload and ensuring structured documentation. By enhancing efficiency, accuracy, and accessibility, it transforms dental care, making diagnosis and treatment planning smarter, safer, and faster..",
    category: "AI Web App",
    technologies: ["Python", "Langchain", "Postgres", "React", "Node"],
    images: [
      denkareLogo,
      denkareImg1,
      denkareImg2,
      denkareImg3,
      denkareImg4
    ],
    liveUrl: "https://youtu.be/AmN7yiZIQM0"
  },
  {
    id: 2,
    title: "GistED",
    shortDescription: "Your AI-powered learning companion—smarter studying, simplified",
    fullDescription: "GistEd is an AI-powered, all-in-one learning platform that simplifies education by centralizing study materials and enhancing productivity. It addresses the problem of information overload, helping students and lifelong learners stay organized and focused. With features like an Interactive AI chatbot, YouTube content extraction, community-driven library, task management, doodle board, handwritten note conversion, and NLP-powered chat for sorting and emailing documents. .",
    category: "AI Web App",
    technologies: ["Python", "Langchain", "LangGraph", "Expressjs", "FastAPI", "Vitejs"],
    images: [
      gistEdLogo,
      gistedImg1,
      gistedImg2,
      gistedImg3,
      gistedImg4,
      gistedImg5
    ],
    liveUrl:"https://youtu.be/pLO7GISv2WI"
  },
  {
    id: 3,
    title: "I Love Finance ❤️",
    shortDescription: "Smart Finance, Real-Time Insights - Powered by AI",
    fullDescription: "We developed a fintech website with a clean, user-friendly dashboard that presented key financial data in an accessible format. The platform featured an AI-powered chatbot that provided financial insights and customer support. Additionally, the website integrated real-time financial data, stock market analysis, credit score prediction, and loan status detection to enhance user decision-making. Users also received AI-generated financial reports with insights and recommendations.",
    category: "AI Web App",
    technologies: ["Python", "Langchain", "LangGraph", "Expressjs", "FastAPI", "Vitejs"],
    images: [
      ilfLogo,
      ilf1,
      ilf2,
      ilf3,
      ilf4    ],
    liveUrl:"https://youtu.be/HjPIh6R8lDs"
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-golden-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover our latest projects and see how we've helped businesses transform their digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer card-hover bg-white border-golden-200 hover:border-golden-300 transition-all duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                      <span className="text-xs bg-golden-100 text-golden-800 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <CardDescription className="text-gray-600">
                      {project.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-golden-600">+{project.technologies.length - 3} more</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <DialogTitle className="text-2xl text-gray-900 mb-2">{project.title}</DialogTitle>
                      <span className="bg-golden-100 text-golden-800 px-3 py-1 rounded-full text-sm">
                        {project.category}
                      </span>
                    </div>
                    {project.liveUrl && (
                      <Button variant="outline" className="border-golden-300 text-golden-700 hover:bg-golden-50" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </a>
                      </Button>
                    )}
                  </div>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Image Gallery */}
                  <div className="relative">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {project.images.map((image, index) => (
                          <CarouselItem key={index}>
                            <div className="relative">
                              <img
                                src={image}
                                alt={`${project.title} - Image ${index + 1}`}
                                className="w-full h-64 md:h-80 object-cover rounded-lg"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {project.images.length > 1 && (
                        <>
                          <CarouselPrevious className="left-4" />
                          <CarouselNext className="right-4" />
                        </>
                      )}
                    </Carousel>
                  </div>

                  {/* Project Description */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">Project Overview</h3>
                    <DialogDescription className="text-gray-600 leading-relaxed">
                      {project.fullDescription}
                    </DialogDescription>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-golden-100 text-golden-800 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
