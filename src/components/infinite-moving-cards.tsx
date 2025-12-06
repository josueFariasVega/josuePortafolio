import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Skill } from '../types';

interface InfiniteMovingCardsProps {
  items: Skill[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}

export function InfiniteMovingCards({
  items,
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true,
  className = '',
}: InfiniteMovingCardsProps) {
  const [duplicatedItems, setDuplicatedItems] = useState<Skill[]>([]);

  useEffect(() => {
    // Duplicate items to create seamless loop
    setDuplicatedItems([...items, ...items, ...items]);
  }, [items]);

  const getDuration = () => {
    switch (speed) {
      case 'fast':
        return 20;
      case 'slow':
        return 50;
      default:
        return 35;
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: direction === 'left' ? '-100%' : '100%',
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: getDuration(),
            ease: 'linear',
          },
        }}
        style={{
          width: `${duplicatedItems.length * 280}px`,
        }}
        whileHover={pauseOnHover ? { animationPlayState: 'paused' } : {}}
      >
        {duplicatedItems.map((skill, index) => (
          <motion.div
            key={`${skill.id}-${index}`}
            className="flex-shrink-0 w-64 h-32 relative group cursor-pointer"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Holographic border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-xl blur-sm group-hover:blur-none transition-all duration-300" />
            
            {/* Main card */}
            <div className="relative h-full bg-black/40 border border-gray-800/50 rounded-xl backdrop-blur-sm overflow-hidden group-hover:border-gray-600/50 transition-all duration-300">
              {/* Tech pattern overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-2 left-2 w-8 h-8 border border-gray-500 rotate-45" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-l border-t border-gray-500" />
                <div className="absolute top-1/2 right-4 w-1 h-8 bg-gray-700" />
              </div>

              {/* Content */}
              <div className="relative p-4 h-full flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center text-lg border border-gray-700/50">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-medium">{skill.name}</h3>
                    <p className="text-gray-400 text-xs">{skill.category.toUpperCase()}</p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-xs">Competencia</span>
                    <span className="text-gray-300 text-xs">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>

                {/* Glitch effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  initial={false}
                />
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-cyan-400/50" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-cyan-400/50" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Fade effects on sides */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10" />
    </div>
  );
}