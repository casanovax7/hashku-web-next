import React from 'react';
import { ArrowRight, BookOpen, HelpCircle, FileText } from 'lucide-react';

interface RelatedLink {
  title: string;
  href: string;
  description: string;
  type: 'article' | 'glossary' | 'faq' | 'resource';
}

interface InternalLinksProps {
  currentSlug?: string;
  category?: string;
  tags?: string[];
}

const InternalLinks: React.FC<InternalLinksProps> = ({ currentSlug, category, tags = [] }) => {
  // This would typically be generated based on content relationships
  const getRelatedLinks = (): RelatedLink[] => {
    const links: RelatedLink[] = [
      {
        title: "Gaming Advertising Glossary",
        href: "/glossary",
        description: "Essential terms and definitions for gaming marketing",
        type: "glossary"
      },
      {
        title: "Gaming Marketing FAQ",
        href: "/faq",
        description: "Common questions about gaming advertising campaigns",
        type: "faq"
      },
      {
        title: "All Gaming Marketing Resources",
        href: "/resources",
        description: "Complete library of gaming advertising insights",
        type: "resource"
      }
    ];

    // Add category-specific links
    if (category === 'Strategy') {
      links.unshift({
        title: "In-Game Advertising vs Traditional Display",
        href: "/resources/in-game-advertising-vs-traditional-display-why-gaming-wins-for-gen-z-engagement",
        description: "Compare gaming ads to traditional advertising methods",
        type: "article"
      });
    }

    if (category === 'Insights') {
      links.unshift({
        title: "Gaming Marketing ROI Guide",
        href: "/resources/the-complete-guide-to-gaming-marketing-roi-how-to-measure-what-matters",
        description: "Learn how to measure gaming campaign effectiveness",
        type: "article"
      });
    }

    return links.filter(link => !currentSlug || !link.href.includes(currentSlug));
  };

  const relatedLinks = getRelatedLinks();
  const getIcon = (type: string) => {
    switch (type) {
      case 'article': return FileText;
      case 'glossary': return BookOpen;
      case 'faq': return HelpCircle;
      default: return ArrowRight;
    }
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 mt-8 sm:mt-12">
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-6">Related Resources</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {relatedLinks.slice(0, 2).map((link, index) => {
          const Icon = getIcon(link.type);
          return (
            <a
              key={index}
              href={link.href}
              className="flex items-start space-x-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-yellow-400 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Icon className="w-4 h-4 text-black" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-black group-hover:text-gray-800 transition-colors text-sm sm:text-base line-clamp-2">
                  {link.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 line-clamp-2">
                  {link.description}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default InternalLinks;