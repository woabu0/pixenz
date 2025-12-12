"use client";

import SectionContainer from "@/components/ui/SectionContainer";

export default function Download() {
  return (
    <SectionContainer id="download" className="bg-background relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto animate-fade-in relative z-10 text-center">
        <div className="glass-card rounded-[3rem] p-12 sm:p-20 relative overflow-hidden border border-white/10">
           {/* Glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
           
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 font-playfair text-white relative z-10">
            Ready to <span className="text-gradient">begin?</span>
          </h2>
          <p className="text-xl sm:text-2xl text-white/70 mb-12 relative z-10 max-w-xl mx-auto">
            Join the community today. Available on iOS & Android.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center relative z-10">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-all hover:scale-105 font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c1.28-2.34 3.18-3.67 5.04-3.67 1.53 0 2.35.81 3.55.81 1.19 0 1.72-.79 3.55-.79 1.55 0 3.17.99 4.45 2.7-.39.6-.69 1.08-.99 1.88zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full hover:bg-white/20 transition-all hover:scale-105 backdrop-blur-md font-bold text-lg"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L16.81,15.12L14.54,12.85L16.81,10.81L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Google Play
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
