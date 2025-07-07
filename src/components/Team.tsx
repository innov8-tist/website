
import { 
  Linkedin, 
  Twitter, 
  Mail 
} from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamMember = ({ name, role, image, bio }: TeamMemberProps) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 border-4 border-golden-200 shadow-xl">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-xl font-bold text-gray-900">{name}</h3>
    <p className="text-golden-600 mb-2">{role}</p>
    <p className="text-gray-600 mb-4">{bio}</p>
    <div className="flex space-x-3">
      <a href="#" className="text-gray-500 hover:text-golden-700">
        <Linkedin size={18} />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a href="#" className="text-gray-500 hover:text-golden-700">
        <Twitter size={18} />
        <span className="sr-only">Twitter</span>
      </a>
      <a href="#" className="text-gray-500 hover:text-golden-700">
        <Mail size={18} />
        <span className="sr-only">Email</span>
      </a>
    </div>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "15+ years experience in digital strategy and business growth."
    },
    {
      name: "Sarah Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Award-winning designer with a passion for beautiful, functional interfaces."
    },
    {
      name: "Miguel Rodriguez",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Full-stack developer specializing in scalable web applications."
    },
    {
      name: "Aisha Johnson",
      role: "Marketing Strategist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Data-driven marketer focused on growth and client acquisition."
    }
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-br from-golden-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-golden-700">Team</span>
          </h2>
          <div className="h-1 w-20 bg-golden-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            We're a diverse team of talented professionals passionate about digital inInnov8tion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
