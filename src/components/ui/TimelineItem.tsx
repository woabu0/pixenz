"use client";

import PhoneMockup from "./PhoneMockup";

interface TimelineItemProps {
  title: string;
  description: string;
  image: string;
  side: "left" | "right";
  delay?: number;
}

export default function TimelineItem({
  title,
  description,
  image,
  side,
  delay = 0,
}: TimelineItemProps) {
  const isLeft = side === "left";

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-8 sm:gap-12 mb-16 sm:mb-24 md:mb-32 animate-fade-in-up ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Phone Mockup */}
      <div className="flex-1 flex justify-center w-full md:w-auto">
        <PhoneMockup 
          image={image} 
          className="w-48 sm:w-64 md:w-80" 
          alt={title}
        />
      </div>

      {/* Content */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
          {title}
        </h3>
        <p className="text-base sm:text-lg text-white/60 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

