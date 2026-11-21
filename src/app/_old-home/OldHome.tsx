import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { ModelSection } from "@/components/ModelSection";
import { Navbar } from "@/components/Navbar";
import { SocialMediaManagerSection } from "@/components/SocialMediaManagerSection";
import { ContactRequestProvider } from "@/context/ContactRequestContext";

export function OldHome() {
  return (
    <ContactRequestProvider>
      <main className="w-full flex flex-col items-center overflow-hidden gap-[10px]">
        <Navbar />
        <HeroSection />

        <AboutSection />

        <ModelSection />

        <SocialMediaManagerSection />

        <ContactSection />
      </main>
    </ContactRequestProvider>
  );
}
