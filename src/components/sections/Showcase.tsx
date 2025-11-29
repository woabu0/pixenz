"use client";

import SectionContainer from "@/components/ui/SectionContainer";
import TimelineItem from "@/components/ui/TimelineItem";

const showcaseItems = [
  {
    title: "Beautiful Home Feed",
    description: "Discover content tailored to your interests with our intelligent feed algorithm. See what matters most to you, when it matters.",
    image: "https://picsum.photos/400/800?random=10",
  },
  {
    title: "Seamless Messaging",
    description: "Connect with friends through our elegant messaging interface. Share moments, reactions, and conversations effortlessly.",
    image: "https://picsum.photos/400/800?random=11",
  },
  {
    title: "Creative Profiles",
    description: "Showcase your work with customizable profiles. Express yourself through beautiful layouts and curated content.",
    image: "https://picsum.photos/400/800?random=12",
  },
  {
    title: "Explore & Discover",
    description: "Find new creators, communities, and content that inspire you. Our discovery engine helps you connect with what you love.",
    image: "https://picsum.photos/400/800?random=13",
  },
];

export default function Showcase() {
  return (
    <SectionContainer id="showcase" className="bg-[#0C0D10] relative">
      {/* Vertical center line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#8F8AD6]/20 pointer-events-none" aria-hidden="true"></div>

      <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
        <h2 
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold mb-4 sm:mb-6 text-white"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          Experience Pixenz
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-white/60 max-w-2xl mx-auto px-4">
          A beautifully designed interface that puts your content first
        </p>
      </div>

      <div className="space-y-0">
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

