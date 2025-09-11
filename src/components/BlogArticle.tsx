import React from 'react';
import { useEffect } from 'react';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { getBlogPostBySlug } from '../data/blogPosts';
import { updatePageMeta, resetPageMeta } from '../utils/seo';
import ReadingProgressIndicator from './ReadingProgressIndicator';
import Breadcrumbs from './Breadcrumbs';
import InternalLinks from './InternalLinks';

interface BlogArticleProps {
  slug: string;
}

const BlogArticle: React.FC<BlogArticleProps> = ({ slug }) => {
  const article = getBlogPostBySlug(slug);

  useEffect(() => {
    if (article) {
      updatePageMeta(article);
    }
    
    return () => {
      resetPageMeta();
    };
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/resources';
            }}
            className="text-yellow-600 hover:text-yellow-700 font-semibold"
          >
            ← Back to Resources
          </a>
        </div>
      </div>
    );
  }

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-white">
      <ReadingProgressIndicator />
      
      {/* Article Header */}
      <div className="bg-black relative overflow-hidden">
        <div className="absolute inset-0 holographic-grid opacity-15"></div>
        <div className="absolute inset-0 circuit-pattern opacity-25"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 sm:pb-16">
          <div className="mb-8">
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/';
              }}
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group p-2 bg-black/60 backdrop-blur-md rounded-lg border border-yellow-400/30"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </a>
          </div>
          
          <Breadcrumbs 
            items={[
              { label: 'Resources', href: '/resources' },
              { label: article.category, href: `/resources?category=${encodeURIComponent(article.category)}` },
              { label: article.title, href: `/resources/${article.slug}`, current: true }
            ]}
          />
          
          <div className="flex items-center space-x-4 mb-6">
            <span className="bg-yellow-400 text-black px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
              {article.category}
            </span>
            <div className="flex items-center space-x-1 text-gray-300 text-xs sm:text-sm">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{article.readTime}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <span className="text-gray-300 text-sm sm:text-base">By {article.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Image */}
      <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="prose prose-base sm:prose-lg max-w-none">
          <div 
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          {article.tags.map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* Internal Links */}
        <InternalLinks 
          currentSlug={article.slug}
          category={article.category}
          tags={article.tags}
        />

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 mt-12 sm:mt-16 text-center relative overflow-hidden neon-edge">
          <div className="absolute inset-0 holographic-grid opacity-20"></div>
          <div className="absolute inset-0 scanlines opacity-30"></div>
          
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Apply These Insights?
            </h3>
            <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Let's discuss how we can help you implement these gaming marketing strategies for your brand.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-yellow-400/25 hover:shadow-yellow-400/40 btn-gaming neon-edge text-sm sm:text-base"
            >
              Book a Strategy Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;