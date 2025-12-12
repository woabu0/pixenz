"use client";

import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <SectionContainer id="contact" className="bg-background relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 
            className="text-[clamp(2.5rem,6vw,3.75rem)] font-bold text-white mb-4 sm:mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 3.75rem)" }}
          >
            Contact & Support
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/60 max-w-2xl mx-auto px-4">
            We&apos;re here to help! Get in touch with our support team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-white">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a
                      href="mailto:support@pixenz.com"
                      className="text-primary hover:text-primary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background rounded"
                    >
                      support@pixenz.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Live Chat</h4>
                    <p className="text-white/60">
                      Available 24/7 in the app
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.523 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.523 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Support Center</h4>
                    <a
                      href="#"
                      className="text-accent hover:text-accent/80 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-background rounded"
                    >
                      Visit Help Center
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <Card className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white">
                Send us a Message
              </h3>
              <form className="space-y-4" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none text-base"
                    placeholder="Your name"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none text-base"
                    placeholder="your.email@example.com"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2">
                    Subject
                  </label>
                  <select 
                    id="subject"
                    name="subject"
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none text-base [&>option]:bg-[#121212]"
                  >
                    <option>General Inquiry</option>
                    <option>Bug Report</option>
                    <option>Feature Request</option>
                    <option>Account Issue</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none resize-none text-base"
                    placeholder="How can we help?"
                    aria-required="true"
                  ></textarea>
                </div>
                <Button variant="primary" className="w-full" ariaLabel="Send message">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

