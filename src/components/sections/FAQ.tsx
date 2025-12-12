"use client";

import { useState } from "react";
import SectionContainer from "@/components/ui/SectionContainer";

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
    <SectionContainer id="faq" className="bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 
            className="text-[clamp(2.5rem,6vw,3.75rem)] font-bold text-white mb-4 sm:mb-6 font-playfair"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/60 max-w-2xl mx-auto px-4">
            Everything you need to know about Pixenz
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="glass-card rounded-2xl overflow-hidden hover:bg-white/[0.08] transition-colors border border-white/5">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="font-semibold text-white text-lg pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-primary transition-transform duration-300 ${
                      openIndex === index ? "rotate-180 bg-white/10" : ""
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
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
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-base text-white/60 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Help Text */}
        <div className="text-center mt-12 pt-8 animate-fade-in">
          <p className="text-white/50 text-sm mb-4">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="text-primary hover:text-white transition-colors font-medium text-base underline decoration-primary/30 hover:decoration-white/50 underline-offset-4"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </SectionContainer>
  );
}

