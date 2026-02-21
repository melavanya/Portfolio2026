import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Section({ id, children, className = '', containerClassName = '' }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className={`container mx-auto px-4 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
