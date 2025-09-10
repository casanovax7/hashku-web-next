import React from "react";
import BlogRouter from "./components/BlogRouter";
import Glossary from "./components/Glossary";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyGaming from "./components/WhyGaming";
import Services from "./components/Services";
import Intelligence from "./components/Intelligence";
import CaseStudies from "./components/CaseStudies";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const isArticlePage = window.location.pathname.startsWith("/resources/");
  const isBlogListPage =
    window.location.pathname === "/resources" ||
    window.location.pathname === "/resources/";
  const isGlossaryPage = window.location.pathname === "/glossary";
  const isFAQPage = window.location.pathname === "/faq";

  if (isArticlePage || isBlogListPage) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <BlogRouter />
        <Footer />
      </div>
    );
  }

  if (isGlossaryPage) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <Glossary />
        <Footer />
      </div>
    );
  }

  if (isFAQPage) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <FAQ />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />

      {/* Sizzle Reel Section */}
      <section className="relative h-96 sm:h-[500px] lg:h-[600px] overflow-hidden -mt-4">
        {/* Full-width background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          preload="auto"
          controls={false}
          disablePictureInPicture
          style={{ pointerEvents: "none" }}
        >
          <source
            src="https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Optional overlay for text/content if needed */}
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      <WhyGaming />
      <Services />
      <Intelligence />
      <CaseStudies />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
