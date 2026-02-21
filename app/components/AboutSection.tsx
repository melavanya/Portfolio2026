import { Section } from './Section';
import { portfolioContent } from '../lib/portfolioContent';

export function AboutSection() {
  const { about } = portfolioContent;

  return (
    <Section id="about" className="bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12 text-center">{about.title}</h2>
        <div className="space-y-6">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
