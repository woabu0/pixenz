"use client";

import SectionContainer from "@/components/ui/SectionContainer";

export default function Highlight() {
  return (
    <SectionContainer className="bg-background relative py-32 sm:py-48">
       {/* Background Gradient */}
       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>

      <div className="text-center max-w-5xl mx-auto animate-fade-in relative z-10 px-4">
        <h2 
          className="text-[clamp(3rem,8vw,6rem)] font-bold text-white leading-[0.9] tracking-tighter mb-8"
        >
          Built for creators.<br/>
          <span className="text-white/40">By creators.</span>
        </h2>
         <p className="text-xl sm:text-2xl text-white/60 max-w-2xl mx-auto mb-12">
            The platform that puts you in control.
         </p>
         <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
      </div>
    </SectionContainer>
  );
}

