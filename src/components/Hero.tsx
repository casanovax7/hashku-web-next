import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-16 min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* Sophisticated Gaming Background Effects */}
      <div className="absolute inset-0">
        {/* Holographic grid overlay */}
        <div className="absolute inset-0 holographic-grid opacity-15"></div>
        
        {/* Directional lighting */}
        <div className="absolute inset-0 directional-light"></div>
        
        {/* Circuit board pattern */}
        <div className="absolute inset-0 circuit-pattern opacity-25"></div>
        
        {/* Primary glow effects */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-400/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Subtle scanlines */}
        <div className="absolute inset-0 scanlines opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-20">
        <div className="text-center">
          {/* Enhanced Gaming Badge with HUD styling */}
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-900/80 backdrop-blur-md border border-yellow-400/40 rounded-full text-yellow-400 text-xs sm:text-sm font-medium mb-8 sm:mb-10 hover:border-yellow-400/60 hover:bg-gray-900/90 transition-all duration-300 shadow-lg shadow-yellow-400/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent animate-shimmer"></div>
            Gaming Advertising
          </div>

          {/* Enhanced Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 sm:mb-10 leading-[0.9] tracking-tight relative">
            <span className="relative">
              Turn Gameplay Into
            </span>
            <span className="block text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text relative">
              Brand Growth
            </span>
          </h1>

          {/* Enhanced Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-5xl mx-auto mb-12 sm:mb-16 leading-relaxed font-light">
            Where gaming, culture, and commerce collide
          </p>

          {/* Enhanced Gaming-Style CTA Button */}
          <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center">
            <button 
              onClick={scrollToContact}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center group shadow-2xl shadow-yellow-400/25 hover:shadow-yellow-400/40 w-full sm:w-auto max-w-xs sm:min-w-[200px] justify-center relative overflow-hidden btn-gaming neon-edge"
            >
              Book a Strategy Call
              <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Gaming-style scroll indicator */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center space-y-2">
              <div className="text-xs text-gray-500 font-mono animate-hud-flicker hidden sm:block">SCROLL</div>
              <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center relative overflow-hidden neon-edge">
                <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-bounce"></div>
                <div className="absolute bottom-1 w-1 h-1 bg-yellow-400/50 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;