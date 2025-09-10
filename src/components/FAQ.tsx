import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowLeft, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What is gaming marketing and how is it different from traditional advertising?",
          answer: "Gaming advertising involves reaching audiences through gaming environments, content, and culture. Unlike traditional advertising that interrupts the user experience, gaming advertising integrates brands naturally into gaming contexts where audiences are highly engaged. This includes in-game placements, gaming creator partnerships, and advertising around gaming content."
        },
        {
          question: "How do I know if gaming advertising is right for my brand?",
          answer: "Gaming advertising works well for brands targeting millennials and Gen Z, those looking to reach hard-to-reach audiences, and companies wanting to build authentic cultural connections. If your target audience includes people aged 18-45, there's a strong chance they're gamers. We can help assess if gaming advertising aligns with your brand goals and audience."
        },
        {
          question: "What's the minimum budget needed to start gaming advertising?",
          answer: "Gaming advertising campaigns can start at various budget levels depending on your goals. Small-scale creator partnerships might begin around $10K-25K, while comprehensive multi-platform campaigns typically start at $50K+. We work with brands to find the right approach for their budget and objectives."
        }
      ]
    },
    {
      category: "Campaign Strategy",
      questions: [
        {
          question: "How do you measure the success of gaming advertising campaigns?",
          answer: "We use a comprehensive measurement framework that goes beyond traditional metrics. This includes brand lift studies, purchase intent measurement, engagement quality analysis, and commerce attribution. We track how gaming exposure impacts brand awareness, consideration, and actual sales outcomes."
        },
        {
          question: "What types of gaming integrations work best for different industries?",
          answer: "Food and beverage brands often succeed with creator partnerships and virtual events. Tech companies excel with in-game placements and esports sponsorships. Fashion brands perform well with virtual item collaborations and influencer partnerships. We tailor integration strategies based on your industry, audience, and campaign goals."
        },
        {
          question: "How long does it take to see results from gaming advertising?",
          answer: "Brand awareness and engagement metrics typically show results within 2-4 weeks of campaign launch. Purchase intent and consideration metrics usually improve within 4-8 weeks. Sales attribution and commerce impact can be measured within 8-12 weeks, depending on your product's purchase cycle."
        }
      ]
    },
    {
      category: "Platform & Technology",
      questions: [
        {
          question: "Which gaming platforms do you work with?",
          answer: "We work across the entire gaming ecosystem including mobile games (iOS/Android), PC platforms (Steam, Epic), console environments (PlayStation, Xbox, Nintendo), virtual worlds (Roblox, Fortnite), and streaming platforms (Twitch, YouTube Gaming). Our approach is platform-agnostic and focused on reaching your audience wherever they game."
        },
        {
          question: "How do you ensure brand safety in gaming environments?",
          answer: "We have strict brand safety protocols including content review processes, platform vetting, creator background checks, and real-time monitoring. We work only with reputable gaming platforms and creators who align with your brand values and maintain appropriate content standards."
        },
        {
          question: "Can you integrate with our existing marketing analytics tools?",
          answer: "Yes, our platform integrates with major marketing analytics tools including Google Analytics, Adobe Analytics, and most major marketing automation platforms. We can also provide custom API integrations to ensure gaming marketing data flows into your existing reporting infrastructure."
        }
      ]
    },
    {
      category: "Pricing & Process",
      questions: [
        {
          question: "How does your pricing model work?",
          answer: "Our pricing is based on campaign scope, platform mix, and measurement requirements. We offer both project-based pricing for specific campaigns and retainer models for ongoing gaming marketing programs. All pricing includes strategy development, campaign execution, and comprehensive measurement and reporting."
        },
        {
          question: "What's your typical campaign development timeline?",
          answer: "Campaign development typically takes 2-4 weeks depending on complexity. This includes strategy development, creative planning, platform negotiations, and measurement setup. Rush timelines are possible for time-sensitive campaigns with additional planning resources."
        },
        {
          question: "Do you work with agencies or only direct with brands?",
          answer: "We work with both brands directly and as a specialized partner to agencies. For agencies, we can serve as your gaming marketing specialist, providing expertise, execution, and measurement while you maintain the client relationship. We're flexible in our partnership approach."
        }
      ]
    },
    {
      category: "Results & ROI",
      questions: [
        {
          question: "What kind of results should I expect from gaming advertising?",
          answer: "Results vary by industry and campaign type, but we typically see 20-40% brand awareness lift, 15-35% purchase intent increase, and 2-5x higher engagement rates compared to traditional display advertising. We provide detailed benchmarks based on your industry and campaign objectives."
        },
        {
          question: "How do you prove ROI from gaming advertising campaigns?",
          answer: "We use multi-touch attribution models that connect gaming touchpoints to business outcomes. This includes brand lift measurement, purchase intent tracking, retail traffic analysis, and direct sales attribution. We provide comprehensive reporting that shows the full customer journey from gaming exposure to purchase."
        },
        {
          question: "Can gaming advertising work for B2B companies?",
          answer: "Absolutely. Many B2B decision-makers are gamers, and gaming environments can be effective for reaching business audiences in a more relaxed, engaging context. We've successfully run B2B campaigns through gaming creator partnerships, virtual events, and targeted gaming media placements."
        }
      ]
    }
  ];

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
                window.location.href = '/';
              }}
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group p-2 bg-black/60 backdrop-blur-md rounded-lg border border-yellow-400/30"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </a>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gray-900/80 backdrop-blur-md border border-yellow-400/40 rounded-full text-yellow-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
              <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Frequently Asked Questions
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Gaming Advertising
              <span className="block text-yellow-400">FAQ</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 sm:mb-12 max-w-4xl mx-auto">
              Common questions about gaming advertising, campaign strategy, measurement, and working with Hashku.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {faqs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8 border-b-2 border-yellow-400 pb-3 sm:pb-4">
              {category.category}
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              {category.questions.map((faq, faqIndex) => {
                const globalIndex = categoryIndex * 100 + faqIndex;
                const isOpen = openItems.includes(globalIndex);
                
                return (
                  <div 
                    key={faqIndex}
                    className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-yellow-400 transition-all duration-300 hover:shadow-lg relative group"
                  >
                    <div className="absolute inset-0 holographic-grid opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    
                    <button
                      onClick={() => toggleItem(globalIndex)}
                      className="w-full px-6 sm:px-8 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300 relative z-10"
                    >
                      <h3 className="text-lg sm:text-xl font-semibold text-black pr-4 leading-tight">
                        {faq.question}
                      </h3>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    
                    {isOpen && (
                      <div className="px-6 sm:px-8 pb-4 sm:pb-6 relative z-10">
                        <div className="prose prose-base sm:prose-lg max-w-none">
                          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 mt-12 sm:mt-16 text-center relative overflow-hidden neon-edge">
          <div className="absolute inset-0 holographic-grid opacity-20"></div>
          <div className="absolute inset-0 scanlines opacity-30"></div>
          
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Our gaming advertising experts are here to help you navigate the gaming ecosystem and create campaigns that drive real results.
            </p>
            <button 
              onClick={() => {
                window.location.href = '/#contact';
              }}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-yellow-400/25 hover:shadow-yellow-400/40 btn-gaming neon-edge text-sm sm:text-base"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;