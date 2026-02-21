import { Download } from 'lucide-react';
import { Section } from './Section';
import { Button } from './Button';
import { portfolioContent } from '../lib/portfolioContent';

export function ResumeSection() {
  const { title, description, pdfUrl } = portfolioContent.resume;

  return (
    <Section id="resume" className="bg-accent/30">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button size="lg" className="gap-2">
            <Download size={20} />
            Download Resume
          </Button>
        </a>
      </div>
    </Section>
  );
}
