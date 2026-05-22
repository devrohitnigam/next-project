import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-500">
            Rohit Web Solutions
          </h2>

          <p className="text-gray-400 leading-7">
            We provide professional website development, SEO,
            digital marketing, and branding solutions to help
            businesses grow online.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                About
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                Services
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                FAQ
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Our Services
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition">
                Web Development
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                SEO Services
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                UI/UX Design
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                Digital Marketing
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                Ecommerce Solutions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Contact Details
          </h3>

          <div className="space-y-4 text-gray-400">

            <a
              href="#"
              className="flex items-center gap-3 hover:text-white transition"
            >
              <FaPhoneAlt />
              <span>9568228941</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-3 hover:text-white transition"
            >
              <FaEnvelope />
              <span>jacksteve9568@gmail.com</span>
            </a>

            <a
              href="#"
              className="flex items-start gap-3 hover:text-white transition"
            >
              <FaMapMarkerAlt className="mt-1" />
              <span>Sector 62 Noida, UP, India</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">

            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-gray-500 text-sm">
          © 2026 Rohit Web Solutions. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}