import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: 'default' | 'surface' | 'raised';
}

export function Section({ id, children, className = '', background = 'default' }: SectionProps) {
  const bgClasses = {
    default: 'bg-background',
    surface: 'bg-surface',
    raised: 'bg-surface-raised',
  };

  return (
    <section 
      id={id} 
      className={`py-20 md:py-28 ${bgClasses[background]} ${className}`}
    >
      {children}
    </section>
  );
}
