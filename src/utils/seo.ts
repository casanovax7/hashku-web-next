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
};

const updateOpenGraphTags = (post: BlogPost) => {
  const ogTags = [
    { property: 'og:title', content: post.seo.metaTitle },
    { property: 'og:description', content: post.seo.metaDescription },
    { property: 'og:type', content: 'article' },
    { property: 'og:image', content: post.image },
    { property: 'article:author', content: post.author },
    { property: 'article:published_time', content: post.date },
    { property: 'article:section', content: post.category },
    { property: 'article:tag', content: post.tags.join(', ') }
  ];
  
  ogTags.forEach(({ property, content }) => {
    let meta = document.querySelector(`meta[property="${property}"]`);
    if (meta) {
      meta.setAttribute('content', content);
    } else {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
    }
  });
};

export const resetPageMeta = () => {
  document.title = 'Hashku - Turn Gameplay Into Brand Growth';
  
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Gaming marketing platform helping brands connect with 3B+ gamers through in-game integrations, targeted media, and culturally relevant content. Measure real business impact from gaming campaigns.');
  }
};