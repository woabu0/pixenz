"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`glass-card rounded-3xl p-6 sm:p-8 transition-all duration-300 gpu-accelerated ${
        hover ? "hover:border-white/20 hover:shadow-2xl hover:-translate-y-1" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

