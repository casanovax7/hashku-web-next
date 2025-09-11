import { type BlogPost } from '../data/blogPosts';

export const updatePageMeta = (post: BlogPost) => {
  // Update document title
  document.title = post.seo.metaTitle;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', post.seo.metaDescription);
  } else {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = post.seo.metaDescription;
    document.head.appendChild(meta);
  }
  
  // Update meta keywords
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) {
    metaKeywords.setAttribute('content', post.seo.keywords.join(', '));
  } else {
    const meta = document.createElement('meta');
    meta.name = 'keywords';
    meta.content = post.seo.keywords.join(', ');
    document.head.appendChild(meta);
  }
  
  // Update Open Graph tags
  updateOpenGraphTags(post);
  
  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', `https://hashku.com/resources/${post.slug}`);
  } else {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', `https://hashku.com/resources/${post.slug}`);
    document.head.appendChild(canonical);
  }
  
  // Add article schema markup
  addArticleSchema(post);
  
  // Add FAQ schema if content contains FAQs
  addFAQSchema(post);
};

const updateOpenGraphTags = (post: BlogPost) => {
  const ogTags = [
    { property: 'og:title', content: post.seo.metaTitle },
    { property: 'og:description', content: post.seo.metaDescription },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: `https://hashku.com/resources/${post.slug}` },
    { property: 'og:image', content: post.image },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: post.title },
    { property: 'og:site_name', content: 'Hashku' },
    { property: 'article:author', content: post.author },
    { property: 'article:published_time', content: post.date },
    { property: 'article:section', content: post.category },
    { property: 'article:tag', content: post.tags.join(', ') },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: post.seo.metaTitle },
    { name: 'twitter:description', content: post.seo.metaDescription },
    { name: 'twitter:image', content: post.image },
    { name: 'twitter:image:alt', content: post.title }
  ];
  
  ogTags.forEach(({ property, content }) => {
    const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
    let meta = document.querySelector(selector);
    if (meta) {
      meta.setAttribute('content', content);
    } else {
      meta = document.createElement('meta');
      if (property) {
        meta.setAttribute('property', property);
      } else {
        meta.setAttribute('name', name);
      }
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
    }
  });
};

const addArticleSchema = (post: BlogPost) => {
  // Remove existing article schema
  const existingSchema = document.querySelector('script[type="application/ld+json"][data-article]');
  if (existingSchema) {
    existingSchema.remove();
  }
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": {
      "@type": "ImageObject",
      "url": post.image,
      "width": 1200,
      "height": 630
    },
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": "https://hashku.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Hashku",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hashku.com/Logo_Hashku_White.png",
        "width": 200,
        "height": 50
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://hashku.com/resources/${post.slug}`
    },
    "keywords": post.tags.join(", "),
    "articleSection": post.category,
    "wordCount": post.content.replace(/<[^>]*>/g, '').split(' ').length
  };
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-article', 'true');
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

const addFAQSchema = (post: BlogPost) => {
  // Extract FAQ-like content from the post content
  const faqMatches = post.content.match(/<h3>(.*?)<\/h3>\s*<p>(.*?)<\/p>/g);
  
  if (faqMatches && faqMatches.length > 0) {
    const faqs = faqMatches.map(match => {
      const questionMatch = match.match(/<h3>(.*?)<\/h3>/);
      const answerMatch = match.match(/<p>(.*?)<\/p>/);
      
      return {
        "@type": "Question",
        "name": questionMatch ? questionMatch[1].replace(/<[^>]*>/g, '') : '',
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answerMatch ? answerMatch[1].replace(/<[^>]*>/g, '') : ''
        }
      };
    });
    
    if (faqs.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs
      };
      
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-faq', 'true');
      script.textContent = JSON.stringify(faqSchema);
      document.head.appendChild(script);
    }
  }
};

export const resetPageMeta = () => {
  document.title = 'Hashku - Turn Gameplay Into Brand Growth';
  
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Gaming marketing platform helping brands connect with 3B+ gamers through in-game integrations, targeted media, and culturally relevant content. Measure real business impact from gaming campaigns.');
  }
  
  // Reset canonical URL
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', 'https://hashku.com');
  }
  
  // Remove article schema
  const articleSchema = document.querySelector('script[type="application/ld+json"][data-article]');
  if (articleSchema) {
    articleSchema.remove();
  }
};