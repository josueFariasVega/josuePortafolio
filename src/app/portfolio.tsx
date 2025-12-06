import { motion, useScroll, useSpring } from 'motion/react';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';
import { AnimatedBackground } from '../components/animated-background';
import { HeroSection } from '../sections/hero';
import { AboutSection } from '../sections/about';
import { CertificatesSection } from '../sections/certificates';
import { SkillsSection } from '../sections/skills';
import { ProjectsSection } from '../sections/projects';
import { ExperienceSection } from '../sections/experience';
import { ContactSection } from '../sections/contact';

export function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen text-white relative overflow-x-hidden dark">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-white to-gray-800 origin-left z-50"
        style={{ scaleX }}
      />
      
      {/* Main Content */}
      <main className="content-layer">
        {/* Hero Section */}
        <div id="home">
          <HeroSection />
        </div>
        
        {/* About Section */}
        <div id="about">
          <AboutSection />
        </div>

        {/* Certificates Section */}
        <div id="certificates">
          <CertificatesSection />
        </div>
        
        {/* Skills Section */}
        <div id="skills">
          <SkillsSection />
        </div>
        
        {/* Projects Section */}
        <div id="projects">
          <ProjectsSection />
        </div>
        
        {/* Experience Section */}
        <div id="experience">
          <ExperienceSection />
        </div>
        
        {/* Contact Section */}
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}