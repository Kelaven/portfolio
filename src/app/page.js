import Layout from "@/components/layout/Layout";
import AboutSection from "@/components/sections/aboutSection/AboutSection";
import ProjectsSection from "@/components/sections/projectsSection/ProjectsSection";
import ContactSection from "@/components/sections/contactSection/ContactSection";
import HeroSection from "@/components/sections/heroSection/HeroSection";
import { Suspense } from "react";
import Loading from "@/components/loading/Loading";

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
