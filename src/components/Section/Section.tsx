import type { ReactNode } from "react";

interface SectionProps {
    title?: string; // тайтл робимо не обовязковим, деякі секції можуть бути без
    children: ReactNode; //всі елементи, які вставлені між тегами section
}

export default function Section({ title, children }: SectionProps) {
    return (
        <section>
            {title && <h2>{title}</h2>} 
            {children}
        </section>
    )
}