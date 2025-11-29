"use client";

import { useState } from "react";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is the app free?",
      answer: "Yes! Pixenz offers a free plan with access to core features. We also have Pro and Creator plans with additional features for users who want more.",
    },
    {
      question: "How do you delete your account?",
      answer: "You can delete your account by going to Settings > Account > Delete Account. This action is permanent and cannot be undone. All your data will be removed within 30 days.",
    },
    {
      question: "Is my data safe?",
      answer: "Absolutely. We take your privacy seriously. All data is encrypted, and we never sell your personal information to third parties. You can read our Privacy Policy for more details.",
    },
    {
      question: "How to report users?",
      answer: "You can report users by tapping the three dots on their profile or any of their posts, then selecting 'Report'. Our moderation team reviews all reports within 24 hours.",
    },
    {
      question: "Can I use Pixenz on multiple devices?",
      answer: "Yes! You can access your Pixenz account on multiple devices. Simply log in with your credentials on any device.",
    },
    {
      question: "How do I change my password?",
      answer: "Go to Settings > Security > Change Password. You'll need to enter your current password and create a new one.",
    },
    {
      question: "What file formats are supported for uploads?",
      answer: "We support JPEG, PNG, GIF for images, and MP4, MOV for videos. Maximum file size is 100MB for photos and 500MB for videos.",
    },
    {
      question: "How do I become a verified creator?",
      answer: "Apply for verification through Settings > Account > Request Verification. We review applications based on authenticity, uniqueness, and activity level.",
    },
  ];

  return (
    <SectionContainer id="faq" className="bg-[#111317]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 
            className="text-[clamp(2.5rem,6vw,3.75rem)] font-bold text-white mb-4 sm:mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 3.75rem)" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/60 max-w-2xl mx-auto px-4">
            Everything you need to know about Pixenz
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Card className="p-0 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-soft-purple/50 focus:ring-offset-2 focus:ring-offset-[#15171C] rounded-t-2xl"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="font-semibold text-white text-base sm:text-lg pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#0C0D10] border border-white/6 flex items-center justify-center text-soft-purple transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-2 border-t border-white/6">
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Help Text */}
        <div className="text-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/6 animate-fade-in">
          <p className="text-white/50 text-xs sm:text-sm mb-3 sm:mb-4">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="text-soft-purple hover:text-soft-purple/80 transition-colors font-medium text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-soft-purple/50 focus:ring-offset-2 focus:ring-offset-[#111317] rounded"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </SectionContainer>
  );
}

