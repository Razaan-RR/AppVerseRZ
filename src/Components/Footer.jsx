import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-[#001931] text-white py-10 px-6 pt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-2xl font-bold mb-3">CS — Ticket System</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Simplify support. Track tickets efficiently. Empower your team with a seamless customer support experience.
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">About</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Tickets</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Connected</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="bg-[#0A3D62] p-2 rounded-full hover:bg-[#FF8811] transition-all duration-200">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-[#0A3D62] p-2 rounded-full hover:bg-[#FF8811] transition-all duration-200">
              <FaTwitter />
            </a>
            <a href="#" className="bg-[#0A3D62] p-2 rounded-full hover:bg-[#FF8811] transition-all duration-200">
              <FaInstagram />
            </a>
            <a href="#" className="bg-[#0A3D62] p-2 rounded-full hover:bg-[#FF8811] transition-all duration-200">
              <FaLinkedinIn />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            Subscribe for the latest updates and system improvements.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} CS — Ticket System. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
