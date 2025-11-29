"use client";

import Image from "next/image";
import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Content Creator",
    image: "https://i.pravatar.cc/150?img=1",
    text: "Pixenz has completely transformed how I connect with my audience. The tools are intuitive and the community is incredibly supportive.",
    color: "#8F8AD6",
  },
  {
    name: "Michael Chen",
    role: "Photographer",
    image: "https://i.pravatar.cc/150?img=12",
    text: "As a photographer, I love how Pixenz showcases my work. The quality is preserved perfectly and I've gained so many new followers.",
    color: "#A5B4FC",
  },
  {
    name: "Emily Rodriguez",
    role: "Small Business Owner",
    image: "https://i.pravatar.cc/150?img=5",
    text: "The marketplace feature has been a game-changer for my business. I can sell directly to my customers with such ease.",
    color: "#D7CFC2",
  },
  {
    name: "David Kim",
    role: "Beta Tester",
    image: "https://i.pravatar.cc/150?img=33",
    text: "I've been using Pixenz since the beta. The team listens to feedback and keeps improving. It's become my favorite platform.",
    color: "#7DC9C3",
  },
];

export default function Community() {
  return (
    <SectionContainer id="community" className="bg-[#111317]">
      <div className="text-center mb-12 sm:mb-16 animate-fade-in">
        <h2 
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold mb-4 sm:mb-6 text-white"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          Our Community
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-white/60 max-w-[550px] mx-auto px-4">
          Join thousands of creators, artists, and everyday users who are building meaningful connections on Pixenz.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Card>
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="relative flex-shrink-0">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${testimonial.color}30, transparent)`,
                      padding: "2px",
                    }}
                    aria-hidden="true"
                  >
                    <div className="w-full h-full rounded-full bg-[#15171C]"></div>
                  </div>
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name}, ${testimonial.role}`}
                    width={48}
                    height={48}
                    className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    style={{
                      border: `2px solid ${testimonial.color}40`,
                    }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-white/50">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-sm sm:text-base text-white/70 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
            </Card>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

