import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#001931] text-white py-10 px-4 sm:px-6 pt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-3">AppVerseRZ</h2>
          <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
            Welcome to RazVerse — your gateway to discovering and downloading
            the best apps in one place. Built with simplicity, speed, and
            security in mind, RazVerse makes finding the right app effortless.
            Curated by Razaan, it's more than a download site — it's a universe
            of apps designed to keep you connected, productive, and inspired.
          </p>
        </div>

        <div className="pl-30 flex flex-col space-y-2 text-sm sm:text-base">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 pl-6">
            Home
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 pl-6">
            About
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 pl-6">
            Tickets
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 pl-6">
            Contact
          </a>
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
          <p className="text-sm text-gray-400">Subscribe for the latest updates and system improvements.</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-xs sm:text-sm">
        © {new Date().getFullYear()} AppVerseRZ. All rights reserved by Razaan Reza.
      </div>
    </footer>
  );
}

export default Footer;
