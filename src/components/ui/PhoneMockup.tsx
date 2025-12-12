"use client";

import Image from "next/image";

interface PhoneMockupProps {
  image: string;
  className?: string;
  delay?: number;
  alt?: string;
  priority?: boolean;
}

export default function PhoneMockup({ image, className = "", alt = "App screenshot", priority = false }: PhoneMockupProps) {
  return (
    <div className={`relative ${className} gpu-accelerated transition-transform duration-300 hover:-translate-y-1`}>
      <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden soft-shadow-lg">
        <div className="absolute inset-0 bg-[#15171C] p-2">
          <div className="w-full h-full rounded-[2rem] overflow-hidden border border-white/8">
              <Image
                src={image}
                alt={alt}
                width={400}
                height={800}
                className="w-full h-full object-cover"
                loading={priority ? "eager" : "lazy"}
                decoding="async"
                sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 208px"
                priority={priority}
              />
          </div>
        </div>
      </div>
    </div>
  );
}

