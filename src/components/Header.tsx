import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isResourcePage =
    window.location.pathname.startsWith("/resources/") ||
    window.location.pathname === "/resources" ||
    window.location.pathname === "/resources/";
  const isGlossaryPage = window.location.pathname === "/glossary";
  const isFAQPage = window.location.pathname === "/faq";
  const isSpecialPage = isResourcePage || isGlossaryPage || isFAQPage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    if (isSpecialPage) {
      window.location.href = "/#contact";
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (item: string, e: React.MouseEvent) => {
    const sectionId =
      item === "Process"
        ? "intelligence"
        : item.toLowerCase().replace(" ", "-");

    if (isSpecialPage) {
      // If we're on a special page, navigate to home with hash
      e.preventDefault();
      window.location.href = `/#${sectionId}`;
    } else {
      // If we're on home page, scroll to section
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md border-b border-gray-800 shadow-lg shadow-black/20"
          : "bg-black/80 backdrop-blur-sm border-b border-gray-800/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Official Hashku Logo with Correct Icon */}
          <div
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={() => (window.location.href = "/")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && (window.location.href = "/")}
            aria-label="Hashku - Gaming Marketing Platform Home"
          >
            <img
              src="/Icon_Hashku copy.png"
              alt="Hashku gaming marketing platform logo - Connect brands with 3 billion gamers through in-game advertising and gaming media"
              className="w-10 h-10 group-hover:scale-105 transition-all duration-300"
            />
            <img
              src="/Logo_Hashku_White.png"
              alt="Hashku - Gaming advertising and marketing platform for brands"
              className="h-8 group-hover:opacity-80 transition-all duration-300"
            />
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {["Services", "Process", "Case Studies", "Contact"].map((item) => {
              const sectionId =
                item === "Process"
                  ? "intelligence"
                  : item.toLowerCase().replace(" ", "-");
              return (
                <a
                  key={item}
                  href={`#${sectionId}`}
                  onClick={(e) => handleNavClick(item, e)}
                  aria-label={`Navigate to ${item} section`}
                  className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium relative group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              );
            })}
          </nav>

          {/* Enhanced Desktop CTA - Updated Text */}
          <div className="hidden md:flex items-center">
            <button
              onClick={scrollToContact}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/25 hover:shadow-yellow-400/40"
            >
              Book a Strategy Call
            </button>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-3 bg-gray-900/95 backdrop-blur-md rounded-2xl mt-4 border border-gray-800 shadow-2xl">
              {[
                "Services",
                "Process",
                "Case Studies",
                "Resources",
                "Contact",
              ].map((item) => {
                const sectionId =
                  item === "Process"
                    ? "intelligence"
                    : item.toLowerCase().replace(" ", "-");
                return (
                  <a
                    key={item}
                    href={`#${sectionId}`}
                    onClick={(e) => handleNavClick(item, e)}
                    className="block px-4 py-3 text-gray-300 hover:text-yellow-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300 font-medium"
                  >
                    {item}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-gray-800">
                <button
                  onClick={scrollToContact}
                  className="block w-full bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  Book a Strategy Call
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
