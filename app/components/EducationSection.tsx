import { GraduationCap, Award } from 'lucide-react';
import { Section } from './Section';
import { portfolioContent } from '../lib/portfolioContent';

export function EducationSection() {
  const { education } = portfolioContent;

  return (
    <Section id="education" className="bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12 text-center">{education.title}</h2>
        <div className="space-y-6">
          {education.items.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 border border-border shadow-soft hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  {item.degree.includes('Certified') ? (
                    <Award size={24} className="text-primary" />
                  ) : (
                    <GraduationCap size={24} className="text-primary" />
                  )}
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-1">{item.degree}</h3>
                  <div className="text-primary font-medium mb-1">{item.institution}</div>
                  <div className="text-sm text-muted-foreground">{item.period}</div>
                  {item.details && (
                    <p className="text-sm text-muted-foreground mt-2">{item.details}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
