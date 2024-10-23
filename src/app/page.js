import Layout from "@/components/layout/Layout";

import HeroSection from "@/components/sections/heroSection/HeroSection";
import AboutSection from "@/components/sections/aboutSection/AboutSection";
import ProjectsSection from "@/components/sections/projectsSection/ProjectsSection";
import ContactSection from "@/components/sections/contactSection/ContactSection";

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
    </Layout >
  );
}
