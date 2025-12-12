"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import PhoneMockup from "@/components/ui/PhoneMockup";

export default function Hero() {
  const screenshots = [
    "/images/feed.png",
    "/images/profile.png",
    "/images/explore.png",
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 sm:pt-32"
      aria-label="Hero section"
    >
      {/* Background Lighting Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[0%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[100px] opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 sm:gap-16 items-center relative z-10 w-full">
        {/* Left Side: Content */}
        <div className="space-y-6 sm:space-y-8 animate-fade-in text-center md:text-left">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium text-white/80">v2.0 is now live</span>
          </div>

          <h1 
            className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[1.05] font-playfair tracking-tight text-white mb-4"
          >
            Connect. Share. <br/>
            <span className="text-gradient-purple">Inspire.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60 max-w-[500px] leading-relaxed mx-auto md:mx-0">
            The social platform built for creators. Share your story in high fidelity, build your community, and monetize your passion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <Button variant="primary" href="#download" ariaLabel="Download App" className="w-full sm:w-auto hover-lift shadow-[0_0_30px_-10px_rgba(143,138,214,0.5)]">
              Download App
            </Button>
            <Button variant="secondary" href="#features" ariaLabel="Learn more" className="w-full sm:w-auto glass hover:bg-white/10">
              Explore Features
            </Button>
          </div>

          <div className="pt-6 flex items-center justify-center md:justify-start gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                  <Image 
                    src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                    alt="User" 
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-white/50">
              <span className="text-white font-semibold">10k+</span> creators joined
            </p>
          </div>
        </div>

        {/* Right Side: Visual */}
        <div className="relative flex items-center justify-center min-h-[500px] perspective-[1000px] animate-float">
          {screenshots.map((screenshot, index) => {
            const isCenter = index === 1;
            return (
              <div
                key={index}
                className={`absolute transition-all duration-500 ease-out hover:scale-105 hover:z-50 ${
                  index === 0 ? "left-0 sm:left-12 top-12 -rotate-12 z-10 opacity-80 scale-90" : 
                  index === 1 ? "z-20 shadow-2xl" : 
                  "right-0 sm:right-12 top-24 rotate-12 z-10 opacity-80 scale-90"
                }`}
              >
                <div className={`relative rounded-[2.5rem] border-[6px] border-[#15171C] bg-[#0C0D10] overflow-hidden shadow-2xl ${isCenter ? 'ring-1 ring-white/20' : ''}`}>
                  <PhoneMockup
                    image={screenshot}
                    className="w-[200px] sm:w-[260px]"
                    alt={`App screenshot ${index + 1}`}
                    priority={isCenter}
                  />
                  {/* Glare effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none rounded-[2.2rem]"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

