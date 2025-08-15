import { ReactNode } from 'react';

interface CardProps {
  href?: string;
  children: ReactNode;
}

export default function Card({ href, children }: CardProps) {
  return (
    <a href={href}>
      <div className="cursor-pointer !text-prose w-full p-3 rounded shadow-sm transition bg-panel hover:bg-panel-light">
        {children}
      </div>
    </a>
  );
}
