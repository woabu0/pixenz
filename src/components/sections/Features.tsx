"use client";

import SectionContainer from "@/components/ui/SectionContainer";
import Card from "@/components/ui/Card";
import { UserIcon, FeedIcon, MessageIcon, CameraIcon, VideoIcon, UsersIcon } from "@/components/ui/Icons";

const features = [
  {
    title: "User Profiles",
    description: "Create beautiful, customizable profiles that showcase your personality and work.",
    icon: UserIcon,
  },
  {
    title: "News Feed",
    description: "Stay updated with a personalized feed of content from people and topics you care about.",
    icon: FeedIcon,
  },
  {
    title: "Messaging",
    description: "Connect privately with friends and followers through secure, real-time messaging.",
    icon: MessageIcon,
  },
  {
    title: "Photo/Video",
    description: "Share high-quality photos and videos with filters, editing tools, and more.",
    icon: CameraIcon,
  },
  {
    title: "Stories / Reels",
    description: "Share temporary stories and engaging reels that disappear after 24 hours.",
    icon: VideoIcon,
  },
  {
    title: "Communities",
    description: "Join or create communities around shared interests, hobbies, and passions.",
    icon: UsersIcon,
  },
];

export default function Features() {
  return (
    <SectionContainer id="features" className="bg-[#111317]">
      <div className="text-center mb-12 sm:mb-16">
        <h2 
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold mb-4 sm:mb-6 text-white"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          Features
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-white/60 max-w-2xl mx-auto px-4">
          Everything you need to connect, share, and grow your social presence
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full">
                <div className="mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#8F8AD6]/20 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#8F8AD6]" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
