"use client";

import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionContainer({ children, className = "", id }: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`py-24 md:py-32 px-4 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

