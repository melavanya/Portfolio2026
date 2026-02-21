import { Section } from './Section';
import { portfolioContent } from '../lib/portfolioContent';

export function SkillsSection() {
  const { skills } = portfolioContent;

  return (
    <Section id="skills" className="bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-center">{skills.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.categories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 border border-border shadow-soft hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-primary/10 text-primary rounded-md text-sm font-medium border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
