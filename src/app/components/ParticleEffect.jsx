import { useEffect, useState } from 'react';

export default function ParticleEffect({ isActive, type = 'success' }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (!isActive) return;

    const createParticles = () => {
      const newParticles = [];
      const particleCount = type === 'success' ? 15 : 8;
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: Math.random(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 10 + 5,
          speedX: (Math.random() - 0.5) * 4,
          speedY: Math.random() * -3 - 1,
          color: type === 'success' 
            ? ['#10b981', '#059669', '#34d399', '#6ee7b7'][Math.floor(Math.random() * 4)]
            : ['#ef4444', '#dc2626', '#f87171', '#fca5a5'][Math.floor(Math.random() * 4)],
          emoji: type === 'success' 
            ? ['🎉', '⭐', '✨', '🏆', '🎊'][Math.floor(Math.random() * 5)]
            : ['❌', '💔', '😞', '🤔'][Math.floor(Math.random() * 4)]
        });
      }
      
      setParticles(newParticles);
    };

    createParticles();


    const timeout = setTimeout(() => {
      setParticles([]);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [isActive, type]);

  if (!isActive || particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-confetti"
          style={{
            left: particle.x,
            top: particle.y,
            fontSize: `${particle.size}px`,
            animationDuration: `${2 + Math.random() * 2}s`,
            animationDelay: `${Math.random() * 0.5}s`
          }}
        >
          {particle.emoji}
        </div>
      ))}
    </div>
  );
}
