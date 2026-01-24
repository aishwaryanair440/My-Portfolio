import React from 'react';
import { motion } from 'motion/react';

export function SpiralElement({ className = '', size = 60, color = 'black' }: { className?: string; size?: number; color?: string }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <path
        d="M 50 50 Q 50 30 60 30 Q 70 30 70 40 Q 70 50 60 50 Q 50 50 50 40 Q 50 30 55 25 Q 60 20 70 20 Q 80 20 80 30 Q 80 40 75 45 Q 70 50 60 50"
        fill="none"
        stroke={color}
        strokeWidth="3"
      />
    </motion.svg>
  );
}

export function ZigzagElement({ className = '', color = 'black' }: { className?: string; color?: string }) {
  return (
    <motion.svg
      width="80"
      height="40"
      viewBox="0 0 80 40"
      className={className}
      animate={{
        x: [0, 10, 0],
        y: [0, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <path
        d="M 0 20 L 10 10 L 20 20 L 30 10 L 40 20 L 50 10 L 60 20 L 70 10 L 80 20"
        fill="none"
        stroke={color}
        strokeWidth="3"
      />
    </motion.svg>
  );
}

export function ArrowDoodle({ className = '', color = 'black' }: { className?: string; color?: string }) {
  return (
    <motion.svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      className={className}
      animate={{
        x: [0, 15, 0],
        rotate: [0, 10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <path
        d="M 10 30 L 40 30 M 40 30 L 30 20 M 40 30 L 30 40"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="50" cy="30" r="5" fill={color} />
    </motion.svg>
  );
}

export function StarDoodle({ className = '', size = 50, color = 'black' }: { className?: string; size?: number; color?: string }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      className={className}
      animate={{
        rotate: [0, 180, 360],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <path
        d="M 25 5 L 30 20 L 45 20 L 33 28 L 38 43 L 25 35 L 12 43 L 17 28 L 5 20 L 20 20 Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
      />
    </motion.svg>
  );
}

export function ScribbleCircle({ className = '', size = 60, color = 'black' }: { className?: string; size?: number; color?: string }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      animate={{
        rotate: [0, -360],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <circle cx="50" cy="50" r="30" fill="none" stroke={color} strokeWidth="3" />
      <circle cx="50" cy="50" r="25" fill="none" stroke={color} strokeWidth="2" opacity="0.6" />
      <circle cx="50" cy="50" r="35" fill="none" stroke={color} strokeWidth="2" opacity="0.4" />
    </motion.svg>
  );
}

export function DottedLine({ className = '', color = 'black' }: { className?: string; color?: string }) {
  return (
    <motion.svg
      width="120"
      height="20"
      viewBox="0 0 120 20"
      className={className}
      animate={{
        strokeDashoffset: [0, -20],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <line
        x1="0"
        y1="10"
        x2="120"
        y2="10"
        stroke={color}
        strokeWidth="3"
        strokeDasharray="5 5"
      />
    </motion.svg>
  );
}

export function CrossDoodle({ className = '', size = 40, color = 'black' }: { className?: string; size?: number; color?: string }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={className}
      animate={{
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <line x1="5" y1="5" x2="35" y2="35" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="35" y1="5" x2="5" y2="35" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </motion.svg>
  );
}

export function WavyLine({ className = '', color = 'black' }: { className?: string; color?: string }) {
  return (
    <motion.svg
      width="100"
      height="30"
      viewBox="0 0 100 30"
      className={className}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <path
        d="M 0 15 Q 12.5 5, 25 15 T 50 15 T 75 15 T 100 15"
        fill="none"
        stroke={color}
        strokeWidth="3"
      />
    </motion.svg>
  );
}
