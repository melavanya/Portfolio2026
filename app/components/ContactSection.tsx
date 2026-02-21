import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';
import { Section } from './Section';
import { portfolioContent } from '../lib/portfolioContent';

export function ContactSection() {
  const { contact } = portfolioContent;

  return (
    <Section id="contact" className="bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="mb-6">{contact.title}</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          {contact.description}
        </p>

        {/* Email CTA */}
        <div className="mb-12 flex justify-center px-4">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all shadow-soft hover:shadow-lg break-all"
          >
            <Mail size={24} className="flex-shrink-0" />
            <span>{contact.email}</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-8">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <div className="p-4 bg-muted rounded-full group-hover:bg-primary/10 transition-colors">
              <SiGithub size={32} />
            </div>
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <div className="p-4 bg-muted rounded-full group-hover:bg-primary/10 transition-colors">
              <SiLinkedin size={32} />
            </div>
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
