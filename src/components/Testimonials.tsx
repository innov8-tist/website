
import { Card } from "@/components/ui/card";

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const Testimonial = ({ quote, author, position, company }: TestimonialProps) => (
  <Card className="p-6 border border-gray-200 shadow-sm h-full">
    <div className="mb-4 text-nova-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
      </svg>
    </div>
    <p className="text-gray-700 italic mb-6">{quote}</p>
    <div>
      <p className="font-semibold text-gray-900">{author}</p>
      <p className="text-sm text-gray-600">
        {position}, {company}
      </p>
    </div>
  </Card>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Nova Creative Solutions transformed our online presence. Their team understood our vision perfectly and delivered beyond our expectations.",
      author: "Jennifer Smith",
      position: "CEO",
      company: "TechStart Inc."
    },
    {
      quote: "Working with Nova was a game-changer for our business. Their strategic approach to web design and development helped us increase conversions by 45%.",
      author: "Michael Chen",
      position: "Marketing Director",
      company: "GrowthBox"
    },
    {
      quote: "The team at Nova is exceptional. They're not just skilled designers and developers but also strategic partners who care about our success.",
      author: "Sarah Johnson",
      position: "Founder",
      company: "Artisan Collective"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-nova-700">Clients Say</span>
          </h2>
          <div className="h-1 w-20 bg-nova-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Don't just take our word for it — hear from some of our satisfied clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
