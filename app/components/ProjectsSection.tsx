import { ExternalLink, Github } from 'lucide-react';
import { Section } from './Section';
import { portfolioContent } from '../lib/portfolioContent';

export function ProjectsSection() {
  const { projects } = portfolioContent;

  return (
    <Section id="projects" className="bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-center">{projects.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.items.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 border border-border shadow-soft hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
              
              <div className="space-y-3 mb-4">
                <div>
                  <span className="text-sm font-medium text-primary">Role: </span>
                  <span className="text-sm text-muted-foreground">{project.role}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-primary">Impact: </span>
                  <span className="text-sm text-muted-foreground">{project.impact}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto pt-4 border-t border-border">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
