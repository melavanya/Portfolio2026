import { Briefcase, MapPin } from 'lucide-react';
import { Section } from './Section';
import { portfolioContent } from '../lib/portfolioContent';

export function ExperienceSection() {
  const { experience } = portfolioContent;

  return (
    <Section id="experience" className="bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12 text-center">{experience.title}</h2>
        <div className="space-y-8">
          {experience.roles.map((role, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 md:p-8 border border-border shadow-soft hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-2 md:mb-0">
                  <h3 className="text-xl font-semibold mb-1">{role.title}</h3>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Briefcase size={18} />
                    <span>{role.company}</span>
                  </div>
                </div>
                <div className="text-muted-foreground text-sm md:text-right">
                  <div className="font-medium">{role.period}</div>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin size={14} />
                    <span>{role.location}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                {role.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
