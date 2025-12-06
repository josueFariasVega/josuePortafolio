import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface TextFlipProps {
  text: string;
  className?: string;
}

export function TextFlip({ text, className = '' }: TextFlipProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentIndex, text]);

  return (
    <div className={`font-mono ${className}`}>
      <AnimatePresence mode="wait">
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ 
              rotateX: 90,
              opacity: 0,
              scale: 0.8
            }}
            animate={
              index < displayText.length
                ? {
                    rotateX: 0,
                    opacity: 1,
                    scale: 1,
                  }
                : {
                    rotateX: 90,
                    opacity: 0,
                    scale: 0.8,
                  }
            }
            transition={{
              duration: 0.4,
              delay: index * 0.05,
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
            style={{
              transformStyle: 'preserve-3d',
              display: 'inline-block',
              transformOrigin: 'center center'
            }}
            className="relative"
          >
            {char === ' ' ? '\u00A0' : char}
            
            {/* Glitch effect overlay */}
            <motion.span
              className="absolute inset-0 text-cyan-400 opacity-0"
              animate={
                index < displayText.length
                  ? {
                      opacity: [0, 0.3, 0],
                      x: [0, 2, -1, 0],
                      y: [0, -1, 1, 0]
                    }
                  : { opacity: 0 }
              }
              transition={{
                duration: 0.1,
                delay: index * 0.05 + 0.2,
                times: [0, 0.1, 1]
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          </motion.span>
        ))}
      </AnimatePresence>
      
      {/* Cursor */}
      <motion.span
        animate={{
          opacity: [1, 0, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
        className="inline-block w-0.5 h-8 bg-white ml-1"
      />
    </div>
  );
}