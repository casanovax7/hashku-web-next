import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  // For mobile, show only Home and current page if there are more than 2 items
  const shouldSimplifyForMobile = items.length > 2;
  const currentItem = items[items.length - 1];
  const simplifiedItems = shouldSimplifyForMobile ? [currentItem] : items;

  return (
    <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6 lg:mb-8">
      {/* Desktop breadcrumbs - show all items */}
      <ol className="hidden sm:flex items-center space-x-2 text-sm">
        <li>
          <a 
            href="/"
            className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 flex items-center p-1"
            aria-label="Home - Hashku Gaming Marketing Platform"
          >
            <Home className="w-4 h-4" />
            <span className="sr-only">Home</span>
          </a>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-500 mx-2" />
            {item.current ? (
              <span className="text-gray-300 font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <a 
                href={item.href}
                className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
      
      {/* Mobile breadcrumbs - simplified */}
      <ol className="flex sm:hidden items-center space-x-1 text-xs">
        <li>
          <a 
            href="/"
            className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 flex items-center p-1"
            aria-label="Home"
          >
            <Home className="w-3 h-3" />
            <span className="sr-only">Home</span>
          </a>
        </li>
        {shouldSimplifyForMobile && (
          <li className="flex items-center">
            <ChevronRight className="w-3 h-3 text-gray-500 mx-1" />
            <span className="text-gray-500">...</span>
          </li>
        )}
        {simplifiedItems.map((item, index) => (
          <li key={index} className="flex items-center min-w-0">
            <ChevronRight className="w-3 h-3 text-gray-500 mx-1 flex-shrink-0" />
            {item.current ? (
              <span className="text-gray-300 font-medium truncate max-w-[200px]" aria-current="page" title={item.label}>
                {item.label}
              </span>
            ) : (
              <a 
                href={item.href}
                className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 truncate max-w-[150px]"
                title={item.label}
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;