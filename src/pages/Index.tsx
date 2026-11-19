import { Navigation } from "@/components/Navigation";
import { Hero3D } from "@/components/Hero3D";
import { MotionTicker } from "@/components/MotionTicker";
import { PageLoader, ScrollProgress, SmoothAnchorScroll } from "@/components/ScrollExperience";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { PhotoJournal } from "@/components/PhotoJournal";
import { Achievements } from "@/components/Achievements";
import { Skills } from "@/components/Skills";
import { FreeResources } from "@/components/FreeResources";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PageLoader />
      <ScrollProgress />
      <SmoothAnchorScroll />
      <Navigation />
      <Hero3D />
      <MotionTicker />
      <Projects />
      <About />
      <Skills />
      <PhotoJournal />
      <Achievements />
      <FreeResources />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
