'use client';

import { useState, useEffect } from 'react';

// ASCII art patterns that glitch/corrupt
const ASCII_PATTERNS = [
  `
   ___
  /   \\
 |  O  |
  \\___/
   | |
  `,
  `
    _
   ( )
    U
   |||
  `,
  `
  .---.
  |   |
  '---'
    |
  `,
  `
   /\\
  /__\\
  |  |
  ~~~~
  `,
  `
  (  )
   ||
   ||
  ~~~~
  `
];

const GLITCH_CHARS = ['#', '@', '%', '&', '$', '!', '*', '^', '~', '?', '/', '\\', '|', '-', '_', '+', '='];

function corruptText(text: string, intensity: number): string {
  return text.split('').map(char => {
    if (char === ' ' || char === '\n') return char;
    if (Math.random() < intensity) {
      return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
    }
    return char;
  }).join('');
}

interface GlitchyAsciiProps {
  style?: React.CSSProperties;
}

export default function GlitchyAscii({ style }: GlitchyAsciiProps) {
  const [ascii, setAscii] = useState('');
  const [patternIndex, setPatternIndex] = useState(0);
  const [corruption, setCorruption] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [hue, setHue] = useState(0);
  
  useEffect(() => {
    // Main glitch loop
    const glitchInterval = setInterval(() => {
      const newCorruption = Math.random() * 0.5; // 0-50% corruption
      setCorruption(newCorruption);
      setAscii(corruptText(ASCII_PATTERNS[patternIndex], newCorruption));
      
      // Random position shift
      setOffsetX((Math.random() - 0.5) * 10);
      setOffsetY((Math.random() - 0.5) * 5);
      
      // Random hue shift
      setHue(Math.random() * 360);
    }, 100);
    
    // Pattern change loop (slower)
    const patternInterval = setInterval(() => {
      setPatternIndex(Math.floor(Math.random() * ASCII_PATTERNS.length));
    }, 2000);
    
    // Initial
    setAscii(ASCII_PATTERNS[0]);
    
    return () => {
      clearInterval(glitchInterval);
      clearInterval(patternInterval);
    };
  }, [patternIndex]);
  
  return (
    <pre
      style={{
        display: 'inline-block',
        fontFamily: 'VT323, monospace',
        fontSize: '12px',
        lineHeight: '1',
        color: `hsl(${hue}, 100%, 50%)`,
        textShadow: `
          ${-offsetX}px 0 #ff00ff,
          ${offsetX}px 0 #00ffff,
          0 0 5px currentColor
        `,
        transform: `translate(${offsetX}px, ${offsetY}px)`,
        margin: '0 8px',
        verticalAlign: 'middle',
        userSelect: 'none',
        ...style
      }}
    >
      {ascii}
    </pre>
  );
}
