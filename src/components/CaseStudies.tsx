import React from "react";
import { useState } from "react";
import {
  TrendingUp,
  Users,
  Target,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Import case study images
import uncrustablesImage from "../assets/case-studies/uncrustables.png";
import hersheysImage from "../assets/case-studies/hersheys.png";
import rewiredImage from "../assets/case-studies/rewired.png";
import smoresImage from "../assets/case-studies/smores.png";
import raybernsImage from "../assets/case-studies/rayberns.png";
import muckenderImage from "../assets/case-studies/muckender.png";

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cases = [
    {
      client: "Uncrustables",
      title: "Return to School",
      description:
        "We met busy parents in the games they love, weaving family-friendly, shoppable moments into play; so Uncrustables moved seamlessly from playtime to into carts.",
      image: uncrustablesImage,
      category: "Media",
      logo: "https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
    },
    {
      client: "Hershey's",
      title: "Halloween",
      description:
        "We helped trick-or-treaters celebrate Halloween with Hershey's in-game and in real life by connecting with them on social and Roblox through a limited drop and on-platform experience.",
      image: hersheysImage,
      category: "In-Game + Content",
      logo: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
    },
    {
      client: "Rewired Fest",
      title: "Music Gaming Festival",
      description:
        "We turned festival buzz into avatar pride with a QR-to-quest flow that let Rewired attendees claim a limited-edition Roblox wearable, turning excitement into redemptions.",
      image: rewiredImage,
      category: "In-Game Integration",
      logo: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
    },
    {
      client: "Hershey's",
      title: "S'mores",
      description:
        "We gamified S'mores nostalgia, turning memories into social-challenge entries that unlocked custom giveaways and moved fans from feed to cart.",
      image: smoresImage,
      category: "Content",
      logo: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
    },
    {
      client: "Raybern's",
      title: "Product Launch",
      description:
        "We partnered with creators to launch Raybern's new breakfast product, turning morning scrolls into trial and retail add-to-cart.",
      image: raybernsImage,
      category: "Content",
      logo: "https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
    },
    {
      client: "Muckender",
      title: "Product Launch",
      description:
        "We built a swipe-to-clean mini-game that that demonstrated Muckender's cleaning power across surfaces and drove players to a giveaway, capturing opt-in first party data through play.",
      image: muckenderImage,
      category: "Media",
      logo: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
    },
  ];

  // Show 3 case studies at a time on desktop, all on mobile
  const casesPerPage = 3;
  const totalPages = Math.ceil(cases.length / casesPerPage);
  const currentCases = cases.slice(currentIndex, currentIndex + casesPerPage);
  const allCases = cases; // For mobile horizontal scroll

  const nextCases = () => {
    setCurrentIndex((prev) => (prev + casesPerPage) % cases.length);
  };

  const prevCases = () => {
    setCurrentIndex(
      (prev) => (prev - casesPerPage + cases.length) % cases.length
    );
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="case-studies"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Sophisticated Gaming Background */}
      <div className="absolute inset-0">
        {/* Holographic grid overlay */}
        <div className="absolute inset-0 holographic-grid opacity-10"></div>

        {/* Circuit board pattern */}
        <div className="absolute inset-0 circuit-pattern opacity-15"></div>

        {/* Subtle pixel dithering */}
        <div className="absolute inset-0 pixel-dither opacity-20"></div>

        {/* Primary glow effects */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-400/2 rounded-full blur-3xl"></div>

        {/* Neon edge accents */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header with HUD styling */}
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-8 leading-tight relative">
            Proven Results for
            <span className="block text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text h-20">
              Leading Brands
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how we've helped brands authentically connect with gaming
            audiences and drive measurable business impact.
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="hidden lg:flex justify-between items-center mb-12 sm:mb-16">
          <button
            onClick={prevCases}
            className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-yellow-600 transition-colors duration-300 group p-2"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-sm sm:text-base">Previous</span>
          </button>

          <div className="flex space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * casesPerPage)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / casesPerPage) === index
                    ? "bg-yellow-400 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextCases}
            className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-yellow-600 transition-colors duration-300 group p-2"
          >
            <span className="font-medium text-sm sm:text-base">Next</span>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Enhanced Case Studies with Gaming UI Elements */}
        {/* Mobile: Show all cases in horizontal scroll */}
        <div className="flex overflow-x-auto snap-x snap-mandatory space-x-6 sm:space-x-8 lg:space-x-10 pb-4 hide-scrollbar mb-8 sm:mb-12 lg:hidden">
          {allCases.map((study, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-start w-[90%] sm:w-[calc(50%-12px)] bg-white border-2 border-gray-200 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-yellow-400 transition-all duration-500 group hover:shadow-2xl hover:shadow-yellow-400/10 transform hover:-translate-y-3 relative neon-edge"
            >
              {/* Holographic background effect */}
              <div className="absolute inset-0 holographic-grid opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>

              {/* Scanline effect */}
              <div className="absolute inset-0 scanlines opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"></div>

              {/* Enhanced Image with Gaming Overlay */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={study.image}
                  alt={`${study.client} gaming marketing case study: ${
                    study.title
                  } - ${
                    study.category
                  } campaign showing how brands connect with gamers through ${study.category.toLowerCase()} strategies`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* HUD-style category and logo */}
                {/* <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex justify-between items-start">
                  <span className="bg-black/90 backdrop-blur-md text-yellow-400 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-lg font-mono animate-hud-flicker">
                    {study.category}
                  </span>
                  <div className="w-16 h-8 sm:w-20 sm:h-10 bg-white/95 backdrop-blur-md rounded-lg sm:rounded-xl flex items-center justify-center shadow-xl neon-edge">
                    <img
                      src={study.logo}
                      alt={`${study.client} logo - Gaming marketing client success story with Hashku platform`}
                      className="w-12 h-6 sm:w-16 sm:h-8 object-contain"
                    />
                  </div>
                </div> */}
              </div>

              {/* Enhanced Content with Gaming UI */}
              <div className="p-4 sm:p-6 relative">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-black group-hover:text-gray-800 transition-colors">
                      {study.client}
                    </h3>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-yellow-600 mb-3 sm:mb-4 animate-hud-flicker">
                    {study.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {study.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Show paginated cases */}
        <div className="hidden lg:flex overflow-x-auto snap-x snap-mandatory space-x-6 sm:space-x-8 lg:space-x-10 pb-4 hide-scrollbar mb-8 sm:mb-12">
          {currentCases.map((study, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-start w-[90%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-20px)] bg-white border-2 border-gray-200 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-yellow-400 transition-all duration-500 group hover:shadow-2xl hover:shadow-yellow-400/10 transform hover:-translate-y-3 relative neon-edge"
            >
              {/* Holographic background effect */}
              <div className="absolute inset-0 holographic-grid opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>

              {/* Scanline effect */}
              <div className="absolute inset-0 scanlines opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"></div>

              {/* Enhanced Image with Gaming Overlay */}
              <div className="relative h-48 sm:h-56 lg:h-72 overflow-hidden">
                <img
                  src={study.image}
                  alt={`${study.client} gaming marketing case study: ${
                    study.title
                  } - ${
                    study.category
                  } campaign showing how brands connect with gamers through ${study.category.toLowerCase()} strategies`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* HUD-style category and logo */}
                {/* <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex justify-between items-start">
                  <span className="bg-black/90 backdrop-blur-md text-yellow-400 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-lg font-mono animate-hud-flicker">
                    {study.category}
                  </span>
                  <div className="w-16 h-8 sm:w-20 sm:h-10 bg-white/95 backdrop-blur-md rounded-lg sm:rounded-xl flex items-center justify-center shadow-xl neon-edge">
                    <img
                      src={study.logo}
                      alt={`${study.client} logo - Gaming marketing client success story with Hashku platform`}
                      className="w-12 h-6 sm:w-16 sm:h-8 object-contain"
                    />
                  </div>
                </div> */}
              </div>

              {/* Enhanced Content with Gaming UI */}
              <div className="p-4 sm:p-6 lg:p-8 relative">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-black group-hover:text-gray-800 transition-colors">
                      {study.client}
                    </h3>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-yellow-600 mb-3 sm:mb-4 animate-hud-flicker">
                    {study.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {study.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
