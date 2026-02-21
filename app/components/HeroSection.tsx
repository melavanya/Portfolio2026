import { ArrowDown, Mail } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { portfolioContent } from '../lib/portfolioContent';

export function HeroSection() {
  const { hero, contact } = portfolioContent;

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Overlay - lighter in light mode, stronger in dark mode */}
      <div className="absolute inset-0 bg-background/30 dark:bg-background/70 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary shadow-soft">
              <img
                src="../assets/images/avatar.jpg"
                alt={hero.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <h1 className="mb-4 animate-fade-in">{hero.name}</h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary font-semibold mb-6 animate-fade-in">
            {hero.title}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto text-balance animate-fade-in">
            {hero.tagline}
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in">
            {hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all shadow-soft hover:shadow-lg"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-all"
            >
              View My Work
              <ArrowDown size={20} />
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-fade-in">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <SiGithub size={28} />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <SiLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
}
