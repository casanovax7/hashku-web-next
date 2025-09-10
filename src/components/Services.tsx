import React from 'react';
import { Gamepad2, Monitor, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Gamepad2,
      title: "Integrations",
      subtitle: "In-Game",
      description: "Brand integrations into some of the most popular, brand-safe games to reach and connect with existing audiences at scale.",
      features: ["Native game placements", "Virtual brand experiences", "Custom gaming assets"],
      gradient: "from-yellow-400 to-yellow-500",
      iconBg: "bg-gradient-to-br from-yellow-400 to-yellow-500",
      hoverGlow: "hover:shadow-yellow-500/20"
    },
    {
      icon: Monitor,
      title: "Media",
      subtitle: "Around the Game",
      description: "Targeted advertising across gaming platforms (mobile, console, and PC) to reach gamers where they play.",
      features: ["Gaming platform ads", "Mobile & desktop targeting", "Console advertising", "Streaming platform integration"],
      gradient: "from-yellow-400 to-yellow-600",
      iconBg: "bg-gradient-to-br from-yellow-400 to-yellow-600",
      hoverGlow: "hover:shadow-yellow-500/20"
    },
    {
      icon: Users,
      title: "Content",
      subtitle: "Away from the Game",
      description: "Creator-driven content, social campaigns, and cultural storytelling that connects gaming culture with your brand narrative.",
      features: ["Gaming creator partnerships", "Social media campaigns", "Cultural content strategy", "Community engagement"],
      gradient: "from-yellow-400 to-yellow-500",
      iconBg: "bg-gradient-to-br from-yellow-400 to-yellow-500",
      hoverGlow: "hover:shadow-yellow-500/20"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Sophisticated Gaming Background Pattern */}
      <div className="absolute inset-0">
        {/* Holographic grid overlay */}
        <div className="absolute inset-0 holographic-grid opacity-10"></div>
        
        {/* Circuit board pattern */}
        <div className="absolute inset-0 circuit-pattern opacity-15"></div>
        
        {/* Subtle pixel dithering */}
        <div className="absolute inset-0 pixel-dither opacity-20"></div>
        
        {/* Neon edge accents */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header with HUD styling */}
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-8 leading-tight relative">
            Ways We Connect
            <span className="block text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text">
              Brands with Gamers
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our integrated approach ensures your brand shows up authentically across the entire gaming ecosystem.
          </p>
        </div>

        {/* Enhanced Services Grid with Gaming UI Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white border-2 border-gray-200 rounded-3xl p-6 sm:p-8 lg:p-10 hover:border-yellow-400 transition-all duration-500 group hover:shadow-2xl ${service.hoverGlow} transform hover:-translate-y-3 relative overflow-hidden neon-edge`}
            >
              {/* Holographic background effect */}
              <div className="absolute inset-0 holographic-grid opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Scanline effect */}
              <div className="absolute inset-0 scanlines opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative z-10">
                {/* Enhanced Icon with HUD styling */}
                <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 ${service.iconBg} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-105 transition-all duration-300 shadow-lg relative overflow-hidden hud-corners neon-edge`}>
                  <service.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
                </div>

                {/* Enhanced Title with gaming typography */}
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors">{service.title}</h3>
                  <p className="text-lg sm:text-xl text-yellow-600 font-semibold animate-hud-flicker">{service.subtitle}</p>
                </div>

                {/* Enhanced Description */}
                <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg">{service.description}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;