import React from 'react';
import { Users, Monitor } from 'lucide-react';

const Intelligence = () => {
  return (
    <section id="intelligence" className="py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900 relative overflow-hidden">
      {/* Sophisticated Gaming Background */}
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight relative">
            Shopper & Media Intelligence
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Gain customers insights; improve media performance.
          </p>
        </div>

        {/* Intelligence Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 max-w-6xl mx-auto">
          {/* Shopper Intelligence Card */}
          <div className="bg-black border border-gray-800 rounded-2xl p-8 sm:p-10 relative overflow-hidden neon-edge hover:border-yellow-400 transition-all duration-500 group hover:shadow-2xl hover:shadow-yellow-400/10 transform hover:-translate-y-3">
            {/* Holographic background effect */}
            <div className="absolute inset-0 holographic-grid opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>
            
            {/* Scanline effect */}
            <div className="absolute inset-0 scanlines opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 relative flex items-center justify-center lg:justify-start">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400 mr-3 flex-shrink-0" />
                <span>Shopper Intelligence</span>
              </h3>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                Voice-of-the-customer analysis reveals opportunities, defines personas, and guides campaign messaging.
              </p>
            </div>
          </div>

          {/* Media Intelligence Card */}
          <div className="bg-black border border-gray-800 rounded-2xl p-8 sm:p-10 relative overflow-hidden neon-edge hover:border-yellow-400 transition-all duration-500 group hover:shadow-2xl hover:shadow-yellow-400/10 transform hover:-translate-y-3">
            {/* Holographic background effect */}
            <div className="absolute inset-0 holographic-grid opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>
            
            {/* Scanline effect */}
            <div className="absolute inset-0 scanlines opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 relative flex items-center justify-center lg:justify-start">
                <Monitor className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400 mr-3 flex-shrink-0" />
                <span>Media Intelligence</span>
              </h3>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                Unified, cross-channel gaming media - standardized metrics, transparent performance, and benchmarks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intelligence;