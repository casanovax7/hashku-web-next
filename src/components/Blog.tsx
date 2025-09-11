import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Mail, CheckCircle, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import { supabase, type NewsletterSubscription } from '../lib/supabase';
import { blogPosts, getRecentPosts } from '../data/blogPosts';

const Blog = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  
  const resourcesPerPage = 3;
  const totalPages = Math.ceil(blogPosts.length / resourcesPerPage);
  const currentResources = blogPosts.slice(currentPage * resourcesPerPage, (currentPage + 1) * resourcesPerPage);
  const allResources = blogPosts; // For mobile horizontal scroll

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const subscription: NewsletterSubscription = {
        email: email.trim(),
        source: 'website'
      };

      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([subscription]);

      if (error) {
        // Handle duplicate email error gracefully
        if (error.code === '23505') {
          setSubmitError('This email is already subscribed to our newsletter.');
        } else {
          throw error;
        }
      } else {
        setIsSubscribed(true);
        setEmail('');
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubscribed(false), 5000);
      }

    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="resources" className="py-24 bg-white relative overflow-hidden">
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
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-8 leading-tight relative">
            Gaming Advertising
            <span className="block text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text">
              Resources
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Insights, strategies, and data-driven guidance to help you master gaming as an advertising channel.
          </p>
        </div>

        {/* Article Navigation */}
        <div className="hidden lg:flex justify-between items-center mb-8 sm:mb-12 px-4">
          <button
            onClick={prevPage}
            className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600 transition-colors duration-300 group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Previous</span>
          </button>
          
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPage
                    ? 'bg-yellow-400 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextPage}
            className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600 transition-colors duration-300 group"
          >
            <span className="font-medium">Next</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile: Show all articles in horizontal scroll */}
        <div className="flex overflow-x-auto snap-x snap-mandatory space-x-6 sm:space-x-8 pb-4 hide-scrollbar mb-8 sm:mb-12 lg:hidden">
          {allResources.map((article, index) => (
            <div 
              key={article.id}
              className="flex-shrink-0 snap-start w-[90%] sm:w-[calc(50%-12px)] bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-yellow-400 transition-all duration-500 group hover:shadow-xl hover:shadow-yellow-400/10 transform hover:-translate-y-2 relative neon-edge"
            >
              {/* Holographic background effect */}
              <div className="absolute inset-0 holographic-grid opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              {/* Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={`Gaming marketing resource: ${article.title} - ${article.category} insights for gaming advertising success`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Category badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="bg-yellow-400 text-black px-2 sm:px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center text-gray-500 text-xs sm:text-sm space-x-3 sm:space-x-4 mb-3">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 leading-tight group-hover:text-gray-800 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `/resources/${article.slug}`;
                  }}
                  aria-label={`Read full article: ${article.title}`}
                  className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/25 hover:shadow-yellow-400/40 group/btn w-full justify-center text-sm sm:text-base"
                >
                  Read Full Resource
                  <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Show paginated articles */}
        <div className="hidden lg:flex overflow-x-auto snap-x snap-mandatory space-x-6 sm:space-x-8 pb-4 hide-scrollbar mb-8 sm:mb-12">
          {currentResources.map((article, index) => (
            <div 
              key={article.id}
              className="flex-shrink-0 snap-start w-[90%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-yellow-400 transition-all duration-500 group hover:shadow-xl hover:shadow-yellow-400/10 transform hover:-translate-y-2 relative neon-edge"
            >
              {/* Holographic background effect */}
              <div className="absolute inset-0 holographic-grid opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              {/* Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={`Gaming marketing resource: ${article.title} - ${article.category} insights for gaming advertising success`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Category badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="bg-yellow-400 text-black px-2 sm:px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center text-gray-500 text-xs sm:text-sm space-x-3 sm:space-x-4 mb-3">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 leading-tight group-hover:text-gray-800 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `/resources/${article.slug}`;
                  }}
                  aria-label={`Read full article: ${article.title}`}
                  className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/25 hover:shadow-yellow-400/40 group/btn w-full justify-center text-sm sm:text-base"
                >
                  Read Full Resource
                  <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;