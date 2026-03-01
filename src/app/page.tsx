import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ArsenalSection from "@/components/ArsenalSection";
import ProjectsSection from "@/components/ProjectsSection";
import JourneySection from "@/components/JourneySection";
import AboutSection from "@/components/AboutSection";
import FloatingCompass from "@/components/FloatingCompass";

export default function Home() {
  return (
    <div className="bg-[#0a191f] text-white min-h-screen">
      <Navigation />
      <FloatingCompass />
      <main>
        <HeroSection />
        <ArsenalSection />
        <ProjectsSection />
        <JourneySection />
        <AboutSection />
      </main>
    </div>
  );
}
