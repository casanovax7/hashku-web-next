import React from "react";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/Icon_Hashku copy.png"
                alt="Hashku gaming marketing platform logo icon"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <img
                src="/Logo_Hashku_White.png"
                alt="Hashku gaming marketing platform logo"
                className="h-5 sm:h-6"
              />
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Media innovation partner for brands at the intersection of gaming
              and commerce
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/hashku/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hashku LinkedIn"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Explore Hashku */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Explore Hashku
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm sm:text-base"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#intelligence"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm sm:text-base"
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm sm:text-base"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm sm:text-base"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Learn & Grow */}
          {/* <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Learn & Grow</h3>
            <ul className="space-y-2">
              <li><a href="/resources" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm sm:text-base">Blog</a></li>
              <li><a href="/glossary" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm sm:text-base">Gaming Glossary</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm sm:text-base">FAQ</a></li>
            </ul>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0">
            © 2025 Hashku. All rights reserved.
          </div>
          {/* <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <span className="text-gray-500">Privacy Policy</span>
            <span className="text-gray-500">Terms of Service</span>
            <span className="text-gray-500">Cookie Policy</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
