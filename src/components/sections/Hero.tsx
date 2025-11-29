"use client";

import Button from "@/components/ui/Button";
import PhoneMockup from "@/components/ui/PhoneMockup";

export default function Hero() {
  const screenshots = [
    "https://picsum.photos/400/800?random=1",
    "https://picsum.photos/400/800?random=2",
    "https://picsum.photos/400/800?random=3",
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0C0D10] pt-20 sm:pt-24"
      aria-label="Hero section"
    >
      {/* Soft vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#0C0D10] opacity-60 pointer-events-none" aria-hidden="true"></div>

      {/* Floating abstract shapes - optimized blur */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#8F8AD6] rounded-full blur-3xl opacity-[0.04] pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#7DC9C3] rounded-full blur-3xl opacity-[0.06] pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10 w-full py-12 sm:py-16">
        {/* Left Side */}
        <div className="space-y-4 sm:space-y-6 animate-fade-in">
          <h1 
            className="text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.1] text-white font-playfair"
            style={{ 
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              lineHeight: "1.1"
            }}
          >
            Connect. Share. Inspire.
          </h1>

          <p 
            className="text-[clamp(1rem,2vw,1.25rem)] text-white/60 max-w-[500px] leading-relaxed"
            style={{ 
              fontSize: "clamp(1rem, 2vw, 1.25rem)"
            }}
          >
            The next-generation social platform where creativity meets community.
            Experience authentic connections in a beautifully designed space.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
            <Button variant="primary" href="#download" ariaLabel="Download the Pixenz app">
              Download App
            </Button>
            <Button variant="secondary" href="#features" ariaLabel="Explore Pixenz features">
              Explore Features
            </Button>
          </div>

          <p className="text-xs sm:text-sm text-white/40 pt-1">
            Trusted by 120k+ creators worldwide
          </p>
        </div>

        {/* Right Side - Overlapping Stack of Screenshots */}
        <div className="relative flex items-center justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] mt-8 md:mt-0">
          {screenshots.map((screenshot, index) => {
            const offsetX = (index - 1) * (index === 0 ? 0 : index === 1 ? 40 : 60);
            const offsetY = (index - 1) * (index === 0 ? 0 : index === 1 ? 20 : 30);
            const rotation = (index - 1) * (index === 0 ? 0 : index === 1 ? 4 : 6);
            
            return (
              <div
                key={index}
                className="absolute gpu-accelerated transition-transform duration-300 hover:scale-105 hover:rotate-0 hover:z-10"
                style={{
                  zIndex: screenshots.length - index,
                  transform: `translateX(${offsetX}px) translateY(${offsetY}px) rotate(${rotation}deg)`,
                }}
              >
                <PhoneMockup
                  image={screenshot}
                  className="w-36 sm:w-44 md:w-52"
                  alt={`Pixenz app screenshot ${index + 1}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
