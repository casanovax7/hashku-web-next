import React, { useState } from "react";
import { Search, BookOpen, ArrowLeft } from "lucide-react";
import Breadcrumbs from "./Breadcrumbs";

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const glossaryTerms = [
    {
      term: "In-Game Advertising",
      definition:
        "Marketing placements that appear within video game environments, including virtual billboards, branded items, and environmental advertising that feels native to the game world.",
    },
    {
      term: "Gaming Media",
      definition:
        "Advertising placements around gaming content, including ads on gaming websites, streaming platforms, mobile gaming apps, and console dashboards.",
    },
    {
      term: "Brand Lift",
      definition:
        "The measurable increase in brand awareness, consideration, or purchase intent resulting from a marketing campaign, typically measured through pre and post-campaign surveys.",
    },
    {
      term: "Purchase Intent Lift",
      definition:
        "The percentage increase in consumers' stated likelihood to purchase a product after exposure to a marketing campaign, a key indicator of campaign effectiveness.",
    },
    {
      term: "Gaming Creator",
      definition:
        "Content creators who focus on gaming content across platforms like Twitch, YouTube, TikTok, and other social media, often with highly engaged gaming audiences.",
    },
    {
      term: "Esports Marketing",
      definition:
        "Marketing strategies focused on competitive gaming events, teams, and audiences, including sponsorships, event marketing, and team partnerships.",
    },
    {
      term: "Virtual World Integration",
      definition:
        "Brand placements and experiences within virtual environments like Roblox, Fortnite Creative, or VRChat that allow for immersive brand interactions.",
    },
    {
      term: "Gaming Audience Segmentation",
      definition:
        "The practice of dividing gaming audiences into distinct groups based on gaming preferences, platforms, demographics, and behavior patterns.",
    },
    {
      term: "Cross-Platform Campaign",
      definition:
        "Marketing campaigns that span multiple gaming platforms (mobile, PC, console) to reach gamers across their preferred gaming environments.",
    },
    {
      term: "Gaming Commerce Attribution",
      definition:
        "The process of connecting gaming marketing touchpoints to actual sales and retail outcomes, measuring the direct business impact of gaming campaigns.",
    },
    {
      term: "Native Gaming Content",
      definition:
        "Marketing content that feels authentic to gaming culture and doesn't disrupt the gaming experience, often created in partnership with gaming creators.",
    },
    {
      term: "Gaming Influencer Marketing",
      definition:
        "Partnerships with gaming content creators to promote brands through authentic gaming content, leveraging their credibility and audience trust.",
    },
    {
      term: "Virtual Event Marketing",
      definition:
        "Brand activations and experiences within virtual gaming events, concerts, or gatherings that take place in gaming environments.",
    },
    {
      term: "Gaming Platform Advertising",
      definition:
        "Paid advertising placements on gaming-specific platforms like Steam, Epic Games Store, mobile gaming apps, and console marketplaces.",
    },
    {
      term: "Gamification Marketing",
      definition:
        "The use of game-like elements (points, achievements, leaderboards) in marketing campaigns to increase engagement and participation.",
    },
    {
      term: "Gaming Content Strategy",
      definition:
        "A comprehensive approach to creating and distributing content that resonates with gaming audiences across multiple channels and platforms.",
    },
    {
      term: "Mobile Gaming Advertising",
      definition:
        "Advertising strategies specifically designed for mobile gaming environments, including rewarded video ads, interstitial ads, and native integrations.",
    },
    {
      term: "Gaming Community Management",
      definition:
        "The practice of building and maintaining relationships with gaming communities to foster brand loyalty and authentic engagement.",
    },
    {
      term: "Streaming Platform Marketing",
      definition:
        "Advertising and brand integration strategies for live streaming platforms like Twitch, YouTube Gaming, and Facebook Gaming.",
    },
    {
      term: "Gaming Analytics",
      definition:
        "Specialized measurement tools and methodologies for tracking the performance and impact of gaming marketing campaigns.",
    },
  ];

  const filteredTerms = glossaryTerms.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black relative overflow-hidden">
        <div className="absolute inset-0 holographic-grid opacity-15"></div>
        <div className="absolute inset-0 circuit-pattern opacity-25"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 sm:pb-16">
          <div className="mb-8">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/";
              }}
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group p-2 bg-black/60 backdrop-blur-md rounded-lg border border-yellow-400/30"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </a>
          </div>

          <div className="text-center">
            <Breadcrumbs
              items={[{ label: "Glossary", href: "/glossary", current: true }]}
            />

            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-900/80 backdrop-blur-md border border-yellow-400/40 rounded-full text-yellow-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Gaming Advertising Glossary
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Gaming Advertising
              <span className="block text-yellow-400">Glossary</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 sm:mb-12 max-w-4xl mx-auto">
              Essential terms and definitions for understanding gaming
              advertising, in-game advertising, and the gaming economy.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search gaming advertising terms..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glossary Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredTerms.map((item, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 holographic-grid opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 group-hover:text-gray-800 transition-colors">
                  {item.term}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {item.definition}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">
              No terms found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Glossary;
