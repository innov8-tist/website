
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Services",
      links: ["AI Solutions", "Web Development", "Mobile Apps", "Business Automation","Cloud & Hosting","E-commerce"]
    },
    {
      title: "Company",
      links: ["About", "Team", "Careers", "Privacy Policy", "Terms of Service"]
    },
    {
      title: "Resources",
      links: ["Blog", "Case Studies", "Testimonials", "FAQ"]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:w-1/3">
            <h2 className="text-2xl font-bold mb-4">
              Innov8<span className="text-golden-500">.</span>
            </h2>
            <p className="text-gray-400 mb-4 max-w-md">
              Innov8 Creative Solutions is a full-service digital agency helping businesses 
              thrive in the digital landscape with inInnov8tive solutions.
            </p>
            <div className="flex space-x-4">
            {[
                      { label: "Instagram", href: "https://www.instagram.com/innov8.dev" },
                      { label: "GitHub", href: "https://github.com/innov8-tist/" },
                    ].map(({ label, href }, index) => (
                      <a
                        key={index}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-Innov8-700 transition-colors"
                      >
                        {label}
                      </a>
                    ))}
            </div>
          </div>
          
          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:w-2/3">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Innov8 Creative Solutions. All rights reserved.
          </div>
          <div className="flex items-center text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="mx-1 text-golden-500" />
            <span>by Innov8 Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
