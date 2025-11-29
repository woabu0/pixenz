"use client";

import SectionContainer from "@/components/ui/SectionContainer";

export default function Download() {
  return (
    <SectionContainer id="download" className="bg-[#0C0D10]">
      <div className="max-w-2xl mx-auto animate-fade-in">
        <div className="bg-[#15171C] border border-white/8 rounded-2xl sm:rounded-[28px] p-8 sm:p-12 md:p-16 text-center soft-shadow-lg">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white">
            Get Started Today
          </h2>
          <p className="text-lg sm:text-xl text-white/60 mb-8 sm:mb-12">
            Available on iOS & Android
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors soft-shadow focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Download Pixenz on the App Store"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c1.28-2.34 3.18-3.67 5.04-3.67 1.53 0 2.35.81 3.55.81 1.19 0 1.72-.79 3.55-.79 1.55 0 3.17.99 4.45 2.7-.39.6-.69 1.08-.99 1.88zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-sm sm:text-lg font-semibold">App Store</div>
              </div>
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors soft-shadow focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Get Pixenz on Google Play"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L16.81,15.12L14.54,12.85L16.81,10.81L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-sm sm:text-lg font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
