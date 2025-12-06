"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
  startOnView?: boolean;
}

export function TypingAnimation({
  text,
  duration = 200,
  className = "",
  startOnView = true,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  const shouldStart = startOnView ? isInView : true;

  useEffect(() => {
    if (!shouldStart) return;

    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, text, shouldStart]);

  // Reset when component is not in view
  useEffect(() => {
    if (!shouldStart) {
      setDisplayedText("");
      setI(0);
    }
  }, [shouldStart]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      {shouldStart && i < text.length && (
        <motion.span
          className="inline-block w-0.5 h-[1em] bg-current ml-1"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
}