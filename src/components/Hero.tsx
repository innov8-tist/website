
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-nova-950 to-nova-800"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-nova-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            <span className="block">Turn Ideas Into</span> 
            <span className="gradient-text">Digital Reality</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Nova Creative Solutions is a full-service digital agency crafting beautiful, 
            functional experiences that drive results for ambitious brands.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-nova-500 hover:bg-nova-600 text-white font-medium px-8">
              <a href="#contact">Get Started</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="#services">Explore Services</a>
            </Button>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
            <div className="text-white/70 text-sm uppercase tracking-wider font-medium">Trusted by:</div>
            {["Company A", "Company B", "Company C", "Company D"].map((company, index) => (
              <div key={index} className="text-white/90 font-semibold text-xl">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-white/70 flex flex-col items-center">
          <span className="sr-only">Scroll down</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
