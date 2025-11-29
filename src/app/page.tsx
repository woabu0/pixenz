import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Showcase from "@/components/sections/Showcase";
import Community from "@/components/sections/Community";
import Highlight from "@/components/sections/Highlight";
import Download from "@/components/sections/Download";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#0C0D10]" role="main">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Community />
      <Highlight />
      <Download />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
