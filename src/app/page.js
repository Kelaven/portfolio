import Layout from "@/components/layout/Layout";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <Layout>
      <section className="overflow-hidden">
        <HeroSection />
      </section>
      <section className="overflow-hidden">
        <AboutSection />
      </section>
      <section className="overflow-hidden">
        <ProjectsSection />
      </section>
      <ContactSection />
    </Layout >
  );
}
