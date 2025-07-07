
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Eye } from "lucide-react";

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
    title: "E-Commerce Platform",
    shortDescription: "Modern online shopping platform with seamless user experience",
    fullDescription: "A comprehensive e-commerce solution built with cutting-edge technologies. Features include user authentication, product catalog, shopping cart, payment integration, order management, and admin dashboard. The platform is optimized for mobile devices and provides a smooth shopping experience with fast loading times and intuitive navigation.",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&h=600&fit=crop"
    ],
    liveUrl: "https://demo-ecommerce.com"
  },
  {
    id: 2,
    title: "Brand Identity Design",
    shortDescription: "Complete brand identity for a tech startup",
    fullDescription: "Comprehensive brand identity design for an innovative tech startup. The project included logo design, color palette development, typography selection, business card design, letterhead, and brand guidelines. We created a modern, tech-forward identity that reflects the company's innovative spirit while maintaining professional credibility in the market.",
    category: "Branding",
    technologies: ["Adobe Illustrator", "Photoshop", "Figma"],
    images: [
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 3,
    title: "Mobile App Design",
    shortDescription: "Intuitive fitness tracking mobile application",
    fullDescription: "User-centered design for a comprehensive fitness tracking mobile application. The app features workout planning, progress tracking, nutrition logging, social challenges, and personalized coaching. We conducted extensive user research, created user personas, developed wireframes, and designed high-fidelity prototypes. The final design emphasizes usability, motivation, and long-term engagement.",
    category: "UI/UX Design",
    technologies: ["Figma", "Principle", "Sketch"],
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 4,
    title: "Restaurant Website",
    shortDescription: "Elegant website for fine dining restaurant",
    fullDescription: "An elegant, responsive website for a premium fine dining restaurant. The project included menu presentation, online reservation system, event booking, gallery showcase, and customer reviews integration. We focused on creating an appetizing visual experience that reflects the restaurant's sophisticated atmosphere while ensuring easy navigation and mobile optimization for on-the-go customers.",
    category: "Web Development",
    technologies: ["React", "Gatsby", "Contentful", "Netlify"],
    images: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop"
    ],
    liveUrl: "https://demo-restaurant.com"
  },
  {
    id: 5,
    title: "SaaS Dashboard",
    shortDescription: "Analytics dashboard for business intelligence",
    fullDescription: "A comprehensive analytics dashboard for a SaaS business intelligence platform. The dashboard provides real-time data visualization, custom report generation, user management, and API integrations. We designed an intuitive interface that makes complex data accessible to users of all technical levels, with interactive charts, customizable widgets, and responsive design for desktop and tablet use.",
    category: "Web Development",
    technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&h=600&fit=crop"
    ]
  },
  {
    id: 6,
    title: "Marketing Campaign",
    shortDescription: "Digital marketing campaign for product launch",
    fullDescription: "Multi-channel digital marketing campaign for a major product launch. The campaign included social media strategy, email marketing automation, content creation, influencer partnerships, and paid advertising across Google and Facebook platforms. We achieved a 300% increase in brand awareness and exceeded sales targets by 150% during the launch period.",
    category: "Digital Marketing",
    technologies: ["Google Ads", "Facebook Ads", "Mailchimp", "Analytics"],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop"
    ]
  }
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
