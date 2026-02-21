import { Quote } from 'lucide-react';
import { Section } from './Section';
import { portfolioContent } from '../lib/portfolioContent';

export function TestimonialsSection() {
  const { testimonials } = portfolioContent;

  return (
    <Section id="testimonials" className="bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-center">{testimonials.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 border border-border shadow-soft hover:shadow-lg transition-shadow flex flex-col"
            >
              <Quote size={32} className="text-primary/30 mb-4" />
              <p className="text-muted-foreground mb-6 flex-grow italic">
                "{testimonial.quote}"
              </p>
              <div className="pt-4 border-t border-border">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
