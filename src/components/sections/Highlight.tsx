"use client";

import SectionContainer from "@/components/ui/SectionContainer";

export default function Highlight() {
  return (
    <SectionContainer className="bg-[#15171C]">
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        <h2 
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold mb-6 sm:mb-8 text-white leading-tight px-4"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          Built for creators, by creators.
        </h2>
        <div className="w-16 sm:w-24 h-px bg-white/20 mx-auto mt-6 sm:mt-8" aria-hidden="true"></div>
      </div>
    </SectionContainer>
  );
}

