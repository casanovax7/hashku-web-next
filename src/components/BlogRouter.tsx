import React from 'react';
import BlogArticle from './BlogArticle';
import BlogList from './BlogList';

const BlogRouter = () => {
  const path = window.location.pathname;
  
  if (path === '/resources' || path === '/resources/') {
    return <BlogList />;
  }
  
  if (window.location.pathname.startsWith('/resources/')) {
    const slug = window.location.pathname.replace('/resources/', '');
    return <BlogArticle slug={slug} />;
  }
  
  return null;
};

export default BlogRouter;