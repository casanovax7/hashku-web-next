import React, { useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { submitContactForm } from "../lib/api";
import { trackContactSubmission } from "../utils/analytics";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const submission = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone || "",
        message: formData.message,
      };

      const { error } = await submitContactForm(submission);

      if (error) {
        throw new Error(error.message);
      }

      // Track successful form submission
      trackContactSubmission();

      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Calculate form completion percentage
  const formCompletion =
    Object.values(formData).filter((value) => value.trim() !== "").length * 20;

  return (
    <section
      id="contact"
      className="py-24 bg-gray-900 relative overflow-hidden"
    >
      {/* Sophisticated Gaming Background */}
      <div className="absolute inset-0">
        {/* Holographic grid overlay */}
        <div className="absolute inset-0 holographic-grid opacity-15"></div>

        {/* Directional lighting */}
        <div className="absolute inset-0 directional-light"></div>

        {/* Circuit board pattern */}
        <div className="absolute inset-0 circuit-pattern opacity-25"></div>

        {/* Primary glow effects */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-400/3 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Subtle scanlines */}
        <div className="absolute inset-0 scanlines opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header with HUD styling */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight relative">
            Let's Level Up
            <span className="block text-yellow-400">Your Brand</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to connect your brand with the gaming audience? Let's start
            the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Enhanced Contact Form with Gaming UI */}
          <div className="bg-black border border-gray-800 rounded-2xl p-8 sm:p-10 relative overflow-hidden neon-edge">
            {/* Holographic background effect */}
            <div className="absolute inset-0 holographic-grid opacity-20 animate-grid-pulse"></div>

            {/* Scanline effect */}
            <div className="absolute inset-0 scanlines opacity-30"></div>

            <div className="relative z-10">
              {/* Gaming-style header with HUD elements */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white animate-hud-flicker">
                  Get in Touch
                </h3>
                <span className="text-xs text-gray-400 font-mono">CONTACT</span>
              </div>

              {/* Form completion indicator with gaming styling */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-400 font-mono">
                    FORM COMPLETION
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    {formCompletion}%
                  </span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden neon-edge">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-1000 ease-out relative"
                    style={{ width: `${formCompletion}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-xs sm:text-sm font-medium text-gray-300 mb-2 font-mono"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 neon-edge text-sm sm:text-base"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xs sm:text-sm font-medium text-gray-300 mb-2 font-mono"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 neon-edge text-sm sm:text-base"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-gray-300 mb-2 font-mono"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 neon-edge text-sm sm:text-base"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs sm:text-sm font-medium text-gray-300 mb-2 font-mono"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 neon-edge text-sm sm:text-base"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-medium text-gray-300 mb-2 font-mono"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none transition-all duration-300 neon-edge text-sm sm:text-base"
                    placeholder="Tell us about your project and goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-400 disabled:cursor-not-allowed text-black px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center btn-gaming relative overflow-hidden neon-edge text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      Sending...
                      <div className="ml-2 w-4 h-4 sm:w-5 sm:h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="flex items-center space-x-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-3 sm:p-4">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Thank you! Your message has been sent successfully. We'll
                      get back to you soon.
                    </span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3 sm:p-4">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Error: {errorMessage}. Please try again.
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Enhanced Contact Info with Gaming UI */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 px-4 lg:px-0">
                Start Your Gaming Strategy Session Today
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 px-4 lg:px-0">
                Whether you're looking to break into gaming advertising or scale
                your existing efforts, we're here to help you navigate the
                gaming ecosystem and achieve measurable results.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6 px-4 lg:px-0">
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform neon-edge">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 animate-hud-flicker text-sm sm:text-base">
                    Email Us
                  </h4>
                  <p className="text-gray-400 font-mono text-sm sm:text-base">
                    hello@hashku.com
                  </p>
                </div>
              </div>
            </div>

            {/* Value Proposition Block */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 sm:p-6 mt-6 sm:mt-8 mx-4 lg:mx-0">
              <h4 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">
                Why Brands Work With Hashku
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Gaming-native, commerce-driven
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Full-funnel strategy
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Trusted to drive measurable growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
