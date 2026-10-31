import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  type: 'petal' | 'heart' | 'sparkle';
}

export const FloatingEffects: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate gentle background particles
    const items: Particle[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 96 + 2, // 2% to 98%
      size: Math.random() * 12 + 10,
      duration: Math.random() * 10 + 12,
      delay: Math.random() * 10,
      type: i % 3 === 0 ? 'heart' : i % 3 === 1 ? 'petal' : 'sparkle',
    }));
    setParticles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute opacity-0 select-none"
          style={{
            left: `${p.left}%`,
            animation: `petal-fall ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            fontSize: `${p.size}px`,
          }}
        >
          {p.type === 'heart' && <span className="text-[#F4A6B8] drop-shadow-sm">❤️</span>}
          {p.type === 'petal' && <span className="text-[#8B1538] opacity-60">🌸</span>}
          {p.type === 'sparkle' && <span className="text-[#D4AF37] opacity-75">✨</span>}
        </span>
      ))}
    </div>
  );
};
