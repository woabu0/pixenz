"use client";

import Image from "next/image";
import SectionContainer from "@/components/ui/SectionContainer";
import { UserIcon, FeedIcon, MessageIcon, CameraIcon, VideoIcon } from "@/components/ui/Icons";


export default function Features() {
  return (
    <SectionContainer id="features" className="bg-background relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2"></div>
      </div>

      <div className="text-center mb-16 sm:mb-24 animate-fade-in relative z-10">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 font-playfair tracking-tight leading-tight">
          Everything you need<br className="hidden md:block" /> to <span className="text-gradient">go viral.</span>
        </h2>
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto px-4">
          Powerful tools for creators, simplified for everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {/* Feature 1: Smart News Feed (Large) */}
        <div className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-white/5 bg-[#121212] transition-all duration-500 hover:border-white/10 hover:shadow-2xl hover:-translate-y-1 glass-card">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>
          <div className="p-8 relative z-10 h-full flex flex-col sm:flex-row gap-8 items-center">
            <div className="flex-1 z-20 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 mx-auto sm:mx-0">
                 <FeedIcon className="w-7 h-7 text-white/90" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Smart News Feed</h3>
              <p className="text-base text-white/60 leading-relaxed font-medium">
                 Our algorithm learns what you love. Stay updated with a personalized feed of content that matters to you.
              </p>
            </div>
            {/* Visual: Real Feed Mockup */}
            <div className="w-full sm:w-64 h-64 sm:h-auto relative perspective-1000 group-hover:scale-105 transition-transform duration-500 flex justify-center sm:block">
               <div className="absolute top-4 sm:top-4 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-0 w-48 sm:w-56 rotate-y-12 rotate-z-6 shadow-2xl rounded-[2rem] overflow-hidden border border-white/10">
                  <Image 
                    src="/images/feed.png" 
                    alt="Smart Feed UI" 
                    width={224}
                    height={400}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    decoding="async"
                  />
               </div>
               {/* Floating Element */}
               <div className="absolute bottom-8 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:-left-4 w-40 p-3 glass-card rounded-xl border border-white/10 animate-float">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500"></div>
                     <div className="text-xs text-left">
                        <div className="font-bold text-white">Trending Now</div>
                        <div className="text-white/50">@design_daily</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Stories (Tall) */}
        <div className="md:col-span-1 group relative overflow-hidden rounded-3xl border border-white/5 bg-[#121212] transition-all duration-500 hover:border-white/10 hover:shadow-2xl hover:-translate-y-1 glass-card">
          <div className="absolute inset-0 bg-gradient-to-bl from-accent/10 to-transparent opacity-50"></div>
           <div className="p-8 relative z-10 h-full flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                 <VideoIcon className="w-7 h-7 text-white/90" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Stories & Reels</h3>
              <p className="text-base text-white/60 leading-relaxed font-medium mb-8">
                 Share fleeting moments or cinematic masterpieces.
              </p>
              {/* Visual: Real Avatars */}
              <div className="mt-auto flex gap-4 overflow-hidden py-4 pl-2">
                 {[
                   "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                   "https://i.pravatar.cc/150?u=a042581f4e29026704d",
                   "https://i.pravatar.cc/150?u=a04258114e29026302d"
                 ].map((src, i) => (
                    <div key={i} className={`relative w-16 h-16 rounded-full p-[3px] ${i === 0 ? 'bg-gradient-to-tr from-yellow-400 to-fuchsia-600' : 'bg-white/10'} group-hover:scale-110 transition-transform duration-300`}>
                       <Image 
                         src={src} 
                         alt="User Story" 
                         width={64}
                         height={64}
                         className="w-full h-full rounded-full border-2 border-[#121212] object-cover"
                         loading="lazy"
                         decoding="async"
                       />
                       {i === 0 && <div className="absolute bottom-0 right-0 w-5 h-5 bg-blue-500 rounded-full border-2 border-[#121212] flex items-center justify-center text-[10px] font-bold text-white">+</div>}
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Feature 3: Messaging */}
        <div className="md:col-span-1 group relative overflow-hidden rounded-3xl border border-white/5 bg-[#121212] transition-all duration-500 hover:border-white/10 hover:shadow-2xl hover:-translate-y-1 glass-card">
           <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-transparent opacity-50"></div>
           <div className="p-8 relative z-10 h-full">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                 <MessageIcon className="w-7 h-7 text-white/90" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Secure Messaging</h3>
              <p className="text-base text-white/60 leading-relaxed font-medium mb-8">
                 End-to-end encrypted chats with friends.
              </p>
               {/* Visual: Chat UI image */}
              <div className="relative h-40 mt-4 overflow-hidden rounded-t-2xl border-t border-x border-white/10 bg-[#0C0D10] shadow-2xl group-hover:-translate-y-2 transition-transform">
                 <Image 
                   src="/images/messaging.png" 
                   alt="Messaging UI" 
                   width={400}
                   height={160}
                   className="w-full h-auto object-cover opacity-90"
                   style={{ objectPosition: "top center" }}
                   loading="lazy"
                   decoding="async"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent"></div>
              </div>
           </div>
        </div>

        {/* Feature 4: Filters */}
        <div className="md:col-span-1 group relative overflow-hidden rounded-3xl border border-white/5 bg-[#121212] transition-all duration-500 hover:border-white/10 hover:shadow-2xl hover:-translate-y-1 glass-card">
           <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 to-transparent opacity-50"></div>
           <div className="p-8 relative z-10 h-full">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                 <CameraIcon className="w-7 h-7 text-white/90" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Pro Filters</h3>
              <p className="text-base text-white/60 leading-relaxed font-medium mb-8">
                 Edit photos like a pro directly in the app.
              </p>
              {/* Visual: Filter Image Overlay */}
              <div className="relative h-32 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <Image 
                    src="https://picsum.photos/400/300?grayscale" 
                    alt="Filtered" 
                    width={400}
                    height={128}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-teal-500/30 mix-blend-overlay"></div>
                  {/* Slider Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 space-y-2">
                     <div className="h-1 w-full bg-white/30 rounded-full overflow-hidden backdrop-blur-sm"><div className="w-2/3 h-full bg-white"></div></div>
                  </div>
              </div>
           </div>
        </div>

        {/* Feature 5: Creator Profiles (Large) */}
        <div className="md:col-span-1 group relative overflow-hidden rounded-3xl border border-white/5 bg-[#121212] transition-all duration-500 hover:border-white/10 hover:shadow-2xl hover:-translate-y-1 glass-card">
          <div className="absolute inset-0 bg-surface opacity-50"></div>
          <div className="p-8 relative z-10 h-full">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                 <UserIcon className="w-7 h-7 text-white/90" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Creator Profiles</h3>
            <p className="text-base text-white/60 leading-relaxed font-medium mb-6">
                Customizable layouts to showcase your portfolio.
            </p>
             {/* Visual: Profile Preview */}
             <div className="relative h-48 mt-4 rounded-t-2xl overflow-hidden border-t border-x border-white/10 group-hover:-translate-y-2 transition-transform">
                <Image 
                  src="/images/profile.png" 
                  alt="Profile UI" 
                  width={400}
                  height={192}
                  className="w-full h-full object-cover object-top opacity-90"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
             </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
