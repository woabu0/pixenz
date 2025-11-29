"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
  href?: string;
  ariaLabel?: string;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  href,
  ariaLabel,
}: ButtonProps) {
  const baseClasses = "px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 relative overflow-hidden active:scale-[0.98] hover:scale-[1.02] gpu-accelerated";
  
  const variants = {
    primary: "bg-[#8F8AD6] text-white hover:bg-[#7A75C4] soft-shadow focus:outline-none focus:ring-2 focus:ring-[#8F8AD6] focus:ring-offset-2 focus:ring-offset-[#0C0D10]",
    secondary: "bg-transparent border border-white/20 text-white hover:border-white/40 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0C0D10]",
    ghost: "text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0C0D10]",
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (href?.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    onClick?.();
  };

  if (href) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={`${baseClasses} ${variants[variant]} ${className} inline-block`}
        aria-label={ariaLabel}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      aria-label={ariaLabel}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}

