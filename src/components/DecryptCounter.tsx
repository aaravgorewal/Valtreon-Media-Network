import React, { useState, useEffect, useRef } from 'react';

interface DecryptCounterProps {
  value: number;
  format: 'number' | 'currency' | 'percent';
  duration?: number;
  disabled?: boolean;
}

export default function DecryptCounter({
  value,
  format,
  duration = 1500,
  disabled = false
}: DecryptCounterProps) {
  const [displayValue, setDisplayValue] = useState<string>('');
  const [isDecrypting, setIsDecrypting] = useState<boolean>(false);
  const frameRef = useRef<number | null>(null);

  const formatNumber = (num: number): string => {
    if (format === 'currency') {
      return `$${(num / 1000000).toFixed(2)}M`;
    }
    if (format === 'percent') {
      return `${num.toFixed(1)}%`;
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    return num.toLocaleString();
  };

  useEffect(() => {
    if (disabled) {
      setDisplayValue(formatNumber(value));
      return;
    }

    setIsDecrypting(true);
    const startTime = performance.now();
    const finalFormatted = formatNumber(value);

    // Characters to scramble with during decryption (mono characters)
    const chars = '0123456789X$/%[]_#*';

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic: f(t) = 1 - (1-t)^3
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = easeProgress * value;

      if (progress < 1) {
        // Scramble effect
        let scrambled = '';
        const currentFormatted = formatNumber(currentValue);
        
        for (let i = 0; i < finalFormatted.length; i++) {
          const targetChar = finalFormatted[i];
          if (['.', ',', '$', '%', 'M', ' '].includes(targetChar)) {
            scrambled += targetChar;
          } else {
            // High-frequency shift during initial 60% of animation
            if (Math.random() > progress * 1.5) {
              scrambled += chars[Math.floor(Math.random() * chars.length)];
            } else {
              scrambled += targetChar;
            }
          }
        }
        setDisplayValue(scrambled);
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setDisplayValue(finalFormatted);
        setIsDecrypting(false);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [value, format, duration, disabled]);

  return (
    <span 
      id={`decrypt-counter-${value.toString().replace('.', '-')}`}
      className={`font-mono tabular-nums tracking-tight font-medium transition-colors duration-500 ${
        isDecrypting ? 'text-zinc-500' : 'text-zinc-100'
      }`}
      aria-live="polite"
    >
      {displayValue || formatNumber(value)}
    </span>
  );
}
