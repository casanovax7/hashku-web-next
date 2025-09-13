import React from "react";
import { Users, Globe, ShoppingCart } from "lucide-react";

const WhyGaming = () => {
  const insights = [
    {
      icon: Globe,
      stat: "3B+",
      label: "Global Gamers",
      description:
        "Over 3 billion gamers worldwide, 200M+ in the U.S. - representing the largest entertainment audience on the planet.",
    },
    {
      icon: Users,
      stat: "Gen Z + Millennials",
      label: "Prime Demographics",
      description:
        "Gaming reaches valuable, hard-to-reach audiences who prioritize gaming over traditional media.",
    },
    {
      icon: ShoppingCart,
      stat: "Full-Funnel",
      label: "Commerce Engine",
      description:
        "Gaming is a complete commerce engine driving awareness, engagement, consideration, and conversion.",
    },
  ];

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Sophisticated Gaming Background */}
      <div className="absolute inset-0">
        {/* Holographic grid overlay */}
        <div className="absolute inset-0 holographic-grid opacity-20"></div>

        {/* Directional lighting */}
        <div className="absolute inset-0 directional-light"></div>

        {/* Circuit board pattern */}
        <div className="absolute inset-0 circuit-pattern opacity-30"></div>

        {/* Primary glow effects */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-yellow-400/3 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Neon edge accents */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header with HUD styling */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight relative">
            <span className="text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text">
              Why Gaming, Why Now
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Connect with the next generation of consumers, drive excitement at
            retail, and turn attention into measurable outcomes
          </p>
        </div>

        {/* Enhanced Insights Grid with Gaming UI Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="bg-black border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-yellow-400/50 transition-all duration-300 group text-center relative overflow-hidden neon-edge"
            >
              {/* Holographic background effect */}
              <div className="absolute inset-0 holographic-grid opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-2xl"></div>

              {/* Scanline effect */}
              <div className="absolute inset-0 scanlines opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"></div>

              <div className="relative z-10">
                {/* Enhanced Icon with HUD styling */}
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-105 transition-all duration-300 shadow-xl shadow-yellow-400/25 group-hover:shadow-yellow-400/40 relative overflow-hidden hud-corners neon-edge`}
                >
                  <insight.icon className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                </div>

                {/* Enhanced Stat with neon typography */}
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors animate-hud-flicker">
                  {insight.stat}
                </div>

                {/* Enhanced Label */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                  {insight.label}
                </h3>

                {/* Enhanced Description */}
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {insight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGaming;
