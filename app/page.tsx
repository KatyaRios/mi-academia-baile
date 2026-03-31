import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProgramsSection } from "@/components/programs-section";
import { InstructorsSection } from "@/components/instructors-section";
import { SupportSection } from "@/components/support-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <InstructorsSection />
      <ProgramsSection />
      <SupportSection />
      <Footer />
    </main>
  );
}
