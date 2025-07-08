import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const GOOGLE_FORM_ACTION_URL =
  "https://script.google.com/macros/s/AKfycbx6lps61XTBLioxd341wThVcwy4WY1Y_iMNwk0DgLYT71VERqWT-8YqMdNHRJeyW-ed/exec";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        alert("Thank you for your message! We'll get back to you soon.");
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await response.json();
        alert(
          "There was an error submitting the form: " +
            (data.message || "Unknown error")
        );
      }
    } catch (err) {
      alert("There was an error submitting the form.");
      console.error(err);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 right-0 w-72 h-72 bg-Innov8-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-Innov8-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-Innov8-700">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-Innov8-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="md:w-1/3">
            <div className="bg-Innov8-50 p-8 rounded-lg shadow-sm h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <div className="p-2 bg-Innov8-100 rounded-full">
                      <Mail size={20} className="text-Innov8-700" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Email
                    </h4>
                    <p className="text-base font-medium">
                      innov8tist@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <div className="p-2 bg-Innov8-100 rounded-full">
                      <Phone size={20} className="text-Innov8-700" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Phone
                    </h4>
                    <p className="text-base font-medium">+918921240475</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <div className="p-2 bg-Innov8-100 rounded-full">
                      {/* <MapPin size={20} className="text-Innov8-700" /> */}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      {" "}
                    </h4>
                    <p className="text-base font-medium">
                      <br />
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {[
                    {
                      label: "Instagram",
                      href: "https://www.instagram.com/innov8.dev",
                    },
                    {
                      label: "GitHub",
                      href: "https://github.com/innov8-tist/",
                    },
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
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  className="w-full min-h-[150px]"
                />
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full md:w-auto bg-black hover:bg-neutral-800"
                  size="lg"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
