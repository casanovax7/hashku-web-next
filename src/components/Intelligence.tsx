import React from "react";
import { Users, Monitor } from "lucide-react";

const Intelligence = () => {
  return (
    <section
      id="intelligence"
      className="py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900 relative overflow-hidden"
    >
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
            Our Process
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

            {/* Shopper Intelligence Visual Elements */}
            <div className="absolute inset-0 pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              {/* User personas visualization */}
              <div className="absolute top-6 right-6 w-20 h-16">
                <div className="w-3 h-3 bg-yellow-400 rounded-full absolute top-2 left-2 animate-pulse"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full absolute top-6 right-3 animate-pulse delay-300"></div>
                <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full absolute bottom-4 left-4 animate-pulse delay-700"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full absolute bottom-2 right-2 animate-pulse delay-1000"></div>
                {/* Connection lines */}
                <div className="absolute top-4 left-4 w-8 h-px bg-gradient-to-r from-yellow-400/30 to-transparent transform rotate-45"></div>
                <div className="absolute top-8 right-5 w-6 h-px bg-gradient-to-l from-yellow-400/30 to-transparent transform -rotate-45"></div>
              </div>

              {/* Data bars visualization */}
              <div className="absolute bottom-6 left-6 space-y-1">
                <div className="w-12 h-1 bg-gradient-to-r from-yellow-400/40 to-yellow-400/10 rounded-full"></div>
                <div className="w-8 h-1 bg-gradient-to-r from-yellow-400/30 to-yellow-400/5 rounded-full"></div>
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-400/50 to-yellow-400/15 rounded-full"></div>
                <div className="w-6 h-1 bg-gradient-to-r from-yellow-400/25 to-yellow-400/5 rounded-full"></div>
              </div>

              {/* Circular progress indicator */}
              <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
                <div className="w-8 h-8 border-2 border-yellow-400/20 rounded-full relative">
                  <div
                    className="absolute inset-0 border-2 border-transparent border-t-yellow-400/40 rounded-full animate-spin"
                    style={{ animationDuration: "3s" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 relative flex items-center justify-center lg:justify-start">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400 mr-3 flex-shrink-0" />
                <span>Shopper Intelligence</span>
              </h3>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                Voice-of-the-customer analysis reveals opportunities, defines
                personas, and guides campaign messaging.
              </p>
            </div>
          </div>

          {/* Media Intelligence Card */}
          <div className="bg-black border border-gray-800 rounded-2xl p-8 sm:p-10 relative overflow-hidden neon-edge hover:border-yellow-400 transition-all duration-500 group hover:shadow-2xl hover:shadow-yellow-400/10 transform hover:-translate-y-3">
            {/* Holographic background effect */}
            <div className="absolute inset-0 holographic-grid opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>

            {/* Scanline effect */}
            <div className="absolute inset-0 scanlines opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>

            {/* Media Intelligence Visual Elements */}
            <div className="absolute inset-0 pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              {/* Network nodes visualization */}
              <div className="absolute top-6 left-6 w-20 h-16">
                <div className="w-2 h-2 bg-yellow-400 rounded-full absolute top-0 left-4 animate-pulse"></div>
                <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full absolute top-3 right-2 animate-pulse delay-500"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full absolute bottom-2 left-0 animate-pulse delay-1000"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full absolute bottom-0 right-0 animate-pulse delay-300"></div>
                {/* Network connections */}
                <div className="absolute top-1 left-5 w-10 h-px bg-gradient-to-r from-yellow-400/40 to-yellow-400/10 transform rotate-12"></div>
                <div className="absolute top-4 right-4 w-8 h-px bg-gradient-to-l from-yellow-400/30 to-transparent transform rotate-45"></div>
                <div className="absolute bottom-3 left-2 w-12 h-px bg-gradient-to-r from-yellow-400/35 to-transparent transform -rotate-12"></div>
              </div>

              {/* Performance metrics visualization */}
              <div className="absolute bottom-6 right-6 space-y-1.5">
                <div className="flex items-end space-x-1">
                  <div className="w-1 h-3 bg-yellow-400/30 rounded-full"></div>
                  <div className="w-1 h-5 bg-yellow-400/40 rounded-full"></div>
                  <div className="w-1 h-2 bg-yellow-400/25 rounded-full"></div>
                  <div className="w-1 h-6 bg-yellow-400/50 rounded-full"></div>
                  <div className="w-1 h-4 bg-yellow-400/35 rounded-full"></div>
                </div>
                <div className="w-12 h-px bg-gradient-to-r from-yellow-400/20 to-transparent"></div>
              </div>

              {/* Data flow lines */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent transform rotate-45 animate-pulse"></div>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent transform -rotate-45 animate-pulse delay-700"></div>
              </div>

              {/* Monitor/screen representation */}
              <div className="absolute top-8 right-8 w-6 h-4 border border-yellow-400/20 rounded-sm">
                <div className="w-full h-1 bg-yellow-400/15 rounded-full mt-1"></div>
                <div className="w-3/4 h-px bg-yellow-400/10 rounded-full mt-1"></div>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 relative flex items-center justify-center lg:justify-start">
                <Monitor className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400 mr-3 flex-shrink-0" />
                <span>Media Intelligence</span>
              </h3>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                Unified, cross-channel gaming media; standardized metrics,
                transparent performance, and benchmarks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intelligence;
