"use client";

import { useRef, useState } from "react";
import Navigation from "./component/navigation";
import HeroSection from "./component/sections/hero";
import ImpactSection from "./component/sections/impact";
import ServicesSection from "./component/sections/services";
import AboutSection from "./component/sections/about";
import ObjectivesSection from "./component/sections/objectives";
import FooterSection from "./component/sections/footer";
import AarogyaDhan from "./component/sections/arrogyadhan";  

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const sectionsRef = useRef({});

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = sectionsRef.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="w-full overflow-x-hidden bg-background">
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />

      <section ref={(el) => { if (el) sectionsRef.current["home"] = el }} id="home">
        <HeroSection onExplore={() => scrollToSection("impact")} />
      </section>

      <section ref={(el) => { if (el) sectionsRef.current["impact"] = el }} id="impact">
        <ImpactSection />
      </section>

      <section ref={(el) => { if (el) sectionsRef.current["objectives"] = el }} id="objectives">
        <ObjectivesSection />
      </section>

      <section ref={(el) => { if (el) sectionsRef.current["services"] = el }} id="services">
        <ServicesSection />
      </section>

      <section ref={(el) => { if (el) sectionsRef.current["arrogyaDhan"] = el }} id="arrogyaDhan">
        <AarogyaDhan />
      </section>

      <section ref={(el) => { if (el) sectionsRef.current["about"] = el }} id="about">
        <AboutSection />
      </section>

      <section ref={(el) => { if (el) sectionsRef.current["contact"] = el }} id="contact">
        <FooterSection />
      </section>
    </main>
  );
}