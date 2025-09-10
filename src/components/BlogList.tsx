import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search, Filter } from 'lucide-react';
import { blogPosts, getAllCategories, getAllTags, type BlogPost } from '../data/blogPosts';

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');

  const categories = ['All', ...getAllCategories()];
  const tags = ['All', ...getAllTags()];

  // Filter posts based on search and filters
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black relative overflow-hidden">
        <div className="absolute inset-0 holographic-grid opacity-15"></div>
        <div className="absolute inset-0 circuit-pattern opacity-25"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 sm:pb-16">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Gaming Advertising
              <span className="block text-yellow-400">Resources</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 sm:mb-12 max-w-4xl mx-auto">
              Insights, strategies, and data-driven guidance to help you master gaming as an advertising channel.
            </p>

            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-full px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 text-sm">Tags:</span>
                  <select
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    className="bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-full px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                  >
                    {tags.map(tag => (
                      <option key={tag} value={tag}>{tag}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((article) => (
              <div 
                key={article.id}
                className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-yellow-400 transition-all duration-500 group hover:shadow-xl hover:shadow-yellow-400/10 transform hover:-translate-y-2 relative neon-edge"
              >
                {/* Holographic background effect */}
                <div className="absolute inset-0 holographic-grid opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={`Gaming marketing guide: ${article.title}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {article.category}
                    </span>
                  </div>

                  {/* Featured badge */}
                  {article.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm space-x-4 mb-3">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-black mb-3 leading-tight group-hover:text-gray-800 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-base text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.slice(0, 3).map((tag) => (
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
                    className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/25 hover:shadow-yellow-400/40 group/btn w-full justify-center"
                  >
                    Read Full Resource
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No resources found matching your search criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedTag('All');
              }}
              className="mt-4 text-yellow-600 hover:text-yellow-700 font-semibold"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;