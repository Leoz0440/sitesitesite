import { useRef, useState, useEffect } from 'react';
import { useCountUp } from '../../hooks/useCountUp';

const stats = [
  { value: 30, suffix: '+', label: 'Anos Experiência' },
  { value: 2000, suffix: '+', label: 'Projetos' },
  { value: 98, suffix: '%', label: 'Satisfação' },
  { value: 500, suffix: '+', label: 'Clientes' },
];

function StatItem({ value, suffix, label, shouldStart }: {
  value: number;
  suffix: string;
  label: string;
  shouldStart: boolean;
}) {
  const count = useCountUp(value, 2000, shouldStart);
  return (
    <div className="flex flex-col items-center text-center px-4">
      <span className="text-3xl md:text-4xl font-bold text-gold font-serif">
        {count}{suffix}
      </span>
      <span className="text-white/80 text-sm mt-1 font-medium">{label}</span>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="max-w-4xl mx-auto">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-4 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              <StatItem {...stat} shouldStart={started} />
              {i < stats.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-gold/40 ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
