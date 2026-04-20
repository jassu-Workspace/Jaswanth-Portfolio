import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ArsenalSection from "@/components/ArsenalSection";
import ProjectsSection from "@/components/ProjectsSection";
import JourneySection from "@/components/JourneySection";
import AboutSection from "@/components/AboutSection";
import FloatingCompass from "@/components/FloatingCompass";
import ScrollProgress from "@/components/ScrollProgress";
import IntroOverlay from "@/components/IntroOverlay";
import MorphLayoutGroup from "@/components/MorphLayoutGroup";
import GlobalScrollAmbient from "@/components/GlobalScrollAmbient";

export default function Home() {
  return (
    <MorphLayoutGroup>
      <div className="site-shell min-h-screen">
        <IntroOverlay />
        <ScrollProgress />
        <div className="shell-grain" aria-hidden="true" />
        <GlobalScrollAmbient />
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
    </MorphLayoutGroup>
  );
}
