"use client";

import SectionContainer from "@/components/ui/SectionContainer";
import TimelineItem from "@/components/ui/TimelineItem";

const showcaseItems = [
  {
    title: "Beautiful Home Feed",
    description: "Discover content tailored to your interests with our intelligent feed algorithm. See what matters most to you, when it matters.",
    image: "/images/feed.png",
  },
  {
    title: "Seamless Messaging",
    description: "Connect with friends through our elegant messaging interface. Share moments, reactions, and conversations effortlessly.",
    image: "/images/messaging.png",
  },
  {
    title: "Creative Profiles",
    description: "Showcase your work with customizable profiles. Express yourself through beautiful layouts and curated content.",
    image: "/images/profile.png",
  },
  {
    title: "Explore & Discover",
    description: "Find new creators, communities, and content that inspire you. Our discovery engine helps you connect with what you love.",
    image: "/images/explore.png",
  },
];

export default function Showcase() {
  return (
    <SectionContainer id="showcase" className="bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="text-center mb-20 sm:mb-28 animate-fade-in relative z-10">
        <h2 
          className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold mb-6 font-playfair text-white"
        >
          Designed for <span className="text-gradient-purple">immersion.</span>
        </h2>
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto px-4">
          Every interaction feels natural, fluid, and delightful.
        </p>
      </div>

      <div className="space-y-12 sm:space-y-24 relative z-10">
        {showcaseItems.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            side={index % 2 === 0 ? "left" : "right"}
            delay={index * 0.1}
          />
        ))}
      </div>
    </SectionContainer>
  );
}

