
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image column */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-nova-100 rounded-full opacity-50 -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-nova-200 rounded-full opacity-50 -z-10"></div>
            </div>
          </div>
          
          {/* Text column */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We are <span className="text-nova-700">Nova Creative Solutions</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2020, Nova Creative Solutions is a team of passionate designers, developers, 
              and digital strategists committed to transforming businesses through technology.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We believe in creating digital experiences that not only look beautiful but also drive 
              tangible results. Our collaborative approach ensures that every project we undertake 
              aligns perfectly with our clients' goals and exceeds their expectations.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-nova-700">100+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-nova-700">50+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-nova-700">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-nova-700">15+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
            </div>
            
            <Button className="bg-nova-700 hover:bg-nova-800">
              <a href="#contact">Work With Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
