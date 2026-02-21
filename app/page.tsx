'use client';

import { TopNav } from '../app/components/TopNav';
import { Footer } from '../app/components/Footer';
import { HeroSection } from '../app/components/HeroSection';
import { AboutSection } from '../app/components/AboutSection';
import { SkillsSection } from '../app/components/SkillsSection';
import { ExperienceSection } from '../app/components/ExperienceSection';
import { ProjectsSection } from '../app/components/ProjectsSection';
import { EducationSection } from '../app/components/EducationSection';
import { TestimonialsSection } from '../app/components/TestimonialsSection';
import { ResumeSection } from '../app/components/ResumeSection';
import { ContactSection } from '../app/components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        {/* <ProjectsSection /> */}
        <EducationSection />
        <TestimonialsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
