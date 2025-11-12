
import { Button } from "@/components/ui/button";
import logo from "/logo.png"

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
                  src={logo}
                  alt="Team collaboration" 
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-golden-100 rounded-full opacity-50 -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-golden-200 rounded-full opacity-50 -z-10"></div>
            </div>
          </div>
          
          {/* Text column */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We are <span className="text-golden-700">Innov8 Technologys</span>
            </h2>
              <p className="text-lg text-gray-700 mb-6">
                Though officially founded in <strong>2025</strong>, our journey began way back in <strong>2022</strong> — 
                when a few passionate freelancers started building digital solutions that made a real impact. 
                What started as individual creative work has now evolved into <strong>Innov8 Technologys</strong>, 
                a full-fledged digital agency driven by innovation, design, and results.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our team blends years of hands-on experience with fresh ideas and cutting-edge tech. 
                From websites and web apps to branding and strategy, we craft digital experiences 
                that not only look exceptional but also deliver measurable growth.
              </p>

            
            <div className="grid grid-cols-2 gap-8 mt-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-golden-700">10+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-golden-700">5+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-golden-700">2</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-golden-700">8</div>
                <div className="text-gray-600">Team Members</div>
              </div>
            </div>
            
            <Button className="bg-golden-700 hover:bg-golden-800">
              <a href="#contact">Work With Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
