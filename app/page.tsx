import Link from "next/link";

import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import HowItWorks from "@/components/home/HowItWorks";
import Benefits from "@/components/home/Benefits";
import Subjects from "@/components/home/Subjects";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/home/Footer";


export default function HomePage() {
  return (
    <main className="min-h-screen">
      
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <Benefits />
      <Subjects />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
