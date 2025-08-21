"use client";
import { FaGithub, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <section id="contact" className="flex-1 py-10 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-yellow-300 mb-10 text-center">
          Contact
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <div className="flex-1 bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-white mb-4">Get in touch</h3>
            <p className="text-gray-300 mb-6">
              Let’s collaborate! Send me a message below.
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-300 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Connect Section */}
          <div className="flex-1 bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-white mb-4">Connect with Me</h3>
            <p className="text-gray-300 mb-6">
              You can also reach me through these platforms. Let’s build something meaningful together! Bienvenue.
            </p>
            <div className="space-y-4 text-white">
              <div className="flex items-center gap-4 sm:gap-6">
                <FaWhatsapp className="text-green-400 text-2xl" />
                <span>+0780577120</span>
              </div>
              <div className="flex items-center gap-4 sm:gap-6">
                <FaGithub className="text-white text-2xl" />
                <a
                  href="https://github.com/Umubyeyi-Marie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-yellow-400 transition"
                >
                  github.com/Umubyeyi-Marie
                </a>
              </div>
              <div className="flex items-center gap-4 sm:gap-6">
                <FaEnvelope className="text-yellow-400 text-2xl" />
                <span>mariebienvenueu.com</span>
              </div>
              <div className="flex items-center gap-4 sm:gap-6">
                <FaPhone className="text-blue-400 text-2xl" />
                <span>+0780577120</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 text-center text-gray-200  shadow-lg">
        <p className="text-base sm:text-sm">
          © 2025 Umubyeyi Marie Bienvenue. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
