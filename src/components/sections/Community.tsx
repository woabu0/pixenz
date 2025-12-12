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
    <SectionContainer id="community" className="bg-background relative">
       {/* Background */}
       <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-secondary/5 to-transparent pointer-events-none"></div>

      <div className="text-center mb-16 sm:mb-24 animate-fade-in relative z-10">
        <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">Community</span>
        <h2 
          className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold mb-6 font-playfair text-white"
        >
          Loved by <span className="text-gradient">millions.</span>
        </h2>
        <p className="text-lg sm:text-xl text-white/60 max-w-[600px] mx-auto px-4">
          Join the fastest growing social platform for creators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto relative z-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Card className="h-full hover:bg-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative flex-shrink-0">
                  <div
                    className="absolute -inset-1 rounded-full blur-sm opacity-50"
                    style={{ background: testimonial.color }}
                  ></div>
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name}, ${testimonial.role}`}
                    width={56}
                    height={56}
                    className="relative w-14 h-14 rounded-full object-cover border-2 border-background"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                  <p className="text-sm font-medium" style={{ color: testimonial.color }}>{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-lg text-white/80 leading-relaxed font-medium">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
            </Card>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

