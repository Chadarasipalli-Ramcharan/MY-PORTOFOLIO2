import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import ProjectsSection from "@/sections/ProjectsSection";
import CertificationsSection from "@/sections/CertificationsSection";
import GallerySection from "@/sections/GallerySection";
import ContactSection from "@/sections/ContactSection";
import AdminPanel from "@/components/AdminPanel";

export default function HomePage() {
  return (
    <main className="pt-20">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <GallerySection />
      <ContactSection />
      <AdminPanel/>
    </main>
  );
}
