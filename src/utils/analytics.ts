import ReactGA from "react-ga4";

// Initialize Google Analytics
export const initGA = () => {
  ReactGA.initialize("G-1CWCLEWZ3B");
};

// Track page views
export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  ReactGA.event({
    action,
    category,
    label,
    value,
  });
};

// Track contact form submissions
export const trackContactSubmission = () => {
  trackEvent("submit", "contact_form", "contact_page");
};

// Track blog article views
export const trackBlogView = (articleTitle: string) => {
  trackEvent("view", "blog_article", articleTitle);
};

// Track service interest
export const trackServiceInterest = (serviceName: string) => {
  trackEvent("click", "service_interest", serviceName);
};

// Track case study views
export const trackCaseStudyView = (clientName: string) => {
  trackEvent("view", "case_study", clientName);
};
