import { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { AwardsSection } from './components/AwardsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { NAV_ITEMS } from './data';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', ...NAV_ITEMS.map(n => n.toLowerCase())];
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActiveSection(e.target.id);
      });
    }, { threshold: 0.3, rootMargin: '-72px 0px 0px 0px' });

    sections.forEach(s => {
      const el = document.getElementById(s);
      if (el) obs.observe(el);
    });
    
    return () => obs.disconnect();
  }, []);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <>
      <div className="grain-overlay"></div>
      <Navbar active={activeSection} onNav={scrollTo} />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AwardsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
