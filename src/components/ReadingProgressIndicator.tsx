import React, { useState, useEffect } from 'react';

const ReadingProgressIndicator = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      // Only show progress indicator on article pages
      if (!window.location.pathname.startsWith('/resources/')) {
        setProgress(0);
        return;
      }

      // Find the main article content container
      const articleContent = document.querySelector('.prose');
      if (!articleContent) {
        setProgress(0);
        return;
      }

      const scrollTop = window.scrollY;
      
      // Find the article header (title and description) to include in progress calculation
      const articleHeader = document.querySelector('.bg-black h1');
      const headerTop = articleHeader ? articleHeader.getBoundingClientRect().top + window.scrollY : 0;
      
      const articleTop = articleContent.getBoundingClientRect().top + window.scrollY;
      const articleHeight = articleContent.scrollHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate progress starting from the article header (title/description)
      const articleScrollStart = headerTop - viewportHeight * 0.1; // Start tracking when header enters viewport
      const articleScrollEnd = articleTop + articleHeight - viewportHeight * 0.8; // End when 80% through article
      
      if (scrollTop < articleScrollStart) {
        setProgress(0);
      } else if (scrollTop > articleScrollEnd) {
        setProgress(100);
      } else {
        const scrollPercent = ((scrollTop - articleScrollStart) / (articleScrollEnd - articleScrollStart)) * 100;
        setProgress(Math.min(Math.max(scrollPercent, 0), 100));
      }
    };

    const handleScroll = () => {
      requestAnimationFrame(calculateProgress);
    };

    window.addEventListener('scroll', handleScroll);
    calculateProgress(); // Calculate initial progress

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Only render on article pages
  if (!window.location.pathname.startsWith('/resources/')) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-700/50">
      {/* Gaming-style progress bar with neon glow */}
      <div 
        className="h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 transition-all duration-300 ease-out relative overflow-hidden shadow-lg shadow-yellow-400/50"
        style={{ width: `${progress}%` }}
      >
        {/* Holographic shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        
        {/* Neon glow effect */}
        <div className="absolute inset-0 bg-yellow-400 opacity-60 blur-sm"></div>
        
        {/* Progress indicator dot */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/70 animate-pulse border-2 border-black">
          <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
        </div>
      </div>
      
      {/* Gaming HUD-style percentage display */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/95 backdrop-blur-md border-2 border-yellow-400/60 rounded-lg px-3 py-1.5 text-sm font-mono text-yellow-400 shadow-xl shadow-yellow-400/30 font-bold">
        {Math.round(progress)}%
      </div>
    </div>
  );
};

export default ReadingProgressIndicator;