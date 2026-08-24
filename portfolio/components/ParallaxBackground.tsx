'use client';

import { useEffect, useState } from 'react';

export default function ParallaxBackground() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setOffset({
        x: scrolled * 0.3,
        y: scrolled * 0.5,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="parallax-bg"
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
    />
  );
}
