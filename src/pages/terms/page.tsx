import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-gray-900">Innov8</div>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Terms and Conditions</h1>
          <p className="text-lg text-gray-600">Last updated: January 2025</p>
        </div>

        {/* Terms Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using Innov8 Creative Solutions' services, you accept and agree to be bound by the
                terms and provision of this agreement. If you do not agree to abide by the above, please do not use this
                service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Innov8 Creative Solutions provides digital services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Website creation and development</li>
                <li>Web hosting services</li>
                <li>Business automation solutions</li>
                <li>AI-powered tools and integrations</li>
                <li>Mobile application development</li>
                <li>E-commerce solutions</li>
                <li>Cloud services and hosting</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Provide accurate and complete information when required</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services in compliance with all applicable laws</li>
                <li>Not engage in any activity that could harm our systems or other users</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                Payment terms will be specified in individual service agreements. Generally, payments are due according
                to the billing cycle chosen (monthly, quarterly, or annually). Late payments may result in service
                suspension or termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content, features, and functionality of our services are owned by Innov8 Creative Solutions and are
                protected by copyright, trademark, and other intellectual property laws. Custom work created for clients
                remains the property of the client upon full payment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                Innov8 Creative Solutions shall not be liable for any indirect, incidental, special, consequential, or
                punitive damages resulting from your use of our services. Our total liability shall not exceed the
                amount paid by you for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Service Availability</h2>
              <p className="text-gray-700 leading-relaxed">
                While we strive to maintain high service availability, we do not guarantee uninterrupted service.
                Scheduled maintenance and unforeseen technical issues may cause temporary service disruptions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                Either party may terminate services with appropriate notice as specified in individual service
                agreements. Upon termination, you remain responsible for any outstanding payments, and we will provide
                reasonable assistance in data migration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your
                information when you use our services. By using our services, you agree to the collection and use of
                information in accordance with our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of significant changes via
                email or through our website. Continued use of our services after changes constitutes acceptance of the
                new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="text-gray-700">
                  <strong>Innov8 Creative Solutions</strong>
                  <br />
                  Email: innov8dotdev@gmail.com
                  <br />
                  Website: tinyurl.com/Innov8dotdev
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link to="/">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">Return to Homepage</Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Innov8.</h3>
              <p className="text-gray-400 mb-6">
                Innov8 Creative Solutions is a full-service digital agency helping businesses thrive in the digital
                landscape with innovative solutions.
              </p>
              <div className="flex space-x-4">
                <Link to="#" className="text-gray-400 hover:text-white">
                  Instagram
                </Link>
                <Link to="#" className="text-gray-400 hover:text-white">
                  GitHub
                </Link>
                <Link to="#" className="text-gray-400 hover:text-white">
                  LinkedIn
                </Link>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="#" className="hover:text-white">
                    AI Solutions
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Business Automation
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Cloud & Hosting
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    E-commerce
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="#" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Team
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Innov8 Creative Solutions. All rights reserved.
              <span className="mx-2">|</span>
              <Link to="/terms" className="hover:text-white underline">
                Terms and Conditions
              </Link>
            </div>
            <div className="text-gray-400 text-sm">Made with ❤️ by Innov8 Team</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
