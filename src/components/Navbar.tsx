
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="text-xl md:text-2xl font-bold text-Innov8-800">
              Innov8<span className="text-Innov8-500"></span>
            </a>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium text-gray-700 hover:text-Innov8-700 transition-colors">
              Home
            </a>
            <a href="#services" className="text-sm font-medium text-gray-700 hover:text-Innov8-700 transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm font-medium text-gray-700 hover:text-Innov8-700 transition-colors">
              About
            </a>
            <a href="#portfolio" className="text-sm font-medium text-gray-700 hover:text-Innov8-700 transition-colors">
              Projects
            </a>
            <Button className="bg-Innov8-700 hover:bg-Innov8-800">
              <a href="#contact">Get In Touch</a>
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a 
              href="#home" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-Innov8-700 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a 
              href="#services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-Innov8-700 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-Innov8-700 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="#team" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-Innov8-700 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Team
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium bg-Innov8-700 text-white hover:bg-Innov8-800"
              onClick={toggleMenu}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
