import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
}

export function Section({id, children}: SectionProps) {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-8 p-12 ">
      {children}
    </section>
  );
}
