
import { 
  Code, 
  Layout, 
  Globe, 
  Smartphone, 
  Megaphone, 
  LineChart 
} from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => (
  <Card className="p-6 border border-golden-200 card-hover h-full flex flex-col bg-white shadow-sm">
    <div className="rounded-full bg-golden-100 w-16 h-16 flex items-center justify-center mb-4">
      <div className="text-golden-700">{icon}</div>
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600 flex-grow">{description}</p>
    <div className="mt-6">
      <a href="#contact" className="text-golden-700 font-medium flex items-center hover:text-golden-800">
        Learn more
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 ml-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </Card>
);

const Services = () => {
  const services = [
    {
      icon: <Layout size={24} />,
      title: "AI Solutions",
      description: "Custom AI tools that enhance productivity, from intelligent chatbots to document analysis and predictive insights.",
    },
    {
      icon: <Code size={24} />,
      title: "Web Development",
      description: "Custom-built websites and web applications with clean, efficient code and optimal performance.",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Business Automation",
      description: "Automate your workflows to reduce manual work, improve efficiency, and scale operations seamlessly.",
    },
    {
      icon: <Globe size={24} />,
      title: "E-commerce",
      description: "Full-featured online stores that drive sales with secure payment processing and inventory management.",
    },
    {
      icon: <Megaphone size={24} />,
      title: "Cloud & Hosting",
      description: "Reliable cloud infrastructure and hosting solutions tailored to your project needs with 24/7 support.",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile App",
      description: "Native and cross-platform mobile applications that deliver seamless user experiences.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-golden-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-golden-700">Services</span>
          </h2>
          <div className="h-1 w-20 bg-golden-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            We offer comprehensive digital solutions to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
