import dynamic from 'next/dynamic';
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/heroSection/HeroSection";

// Charger les sections de manière différée mais avec SSR activé pour préserver le SEO
const AboutSection = dynamic(() => import("@/components/sections/aboutSection/AboutSection"), { ssr: true });
const ProjectsSection = dynamic(() => import("@/components/sections/projectsSection/ProjectsSection"), { ssr: true });
const ContactSection = dynamic(() => import("@/components/sections/contactSection/ContactSection"), { ssr: true });

export default function Home() {
  return (
    <Layout>
      <section className="overflow-hidden">
        <HeroSection />
      </section>
      <section id="aboutsection" className="overflow-hidden">
        <AboutSection />
      </section>
      <section id="projectssection" className="overflow-hidden">
        <ProjectsSection />
      </section>
      <section id="contactsection" className="overflow-hidden">
        <ContactSection />
      </section>
    </Layout>
  );
}