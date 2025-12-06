import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useState, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Skill } from '../types';

interface TechCardHoverProps {
  skill: Skill;
  index: number;
}

export function TechCardHover({ skill, index }: TechCardHoverProps) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Mouse tracking for subtle 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['2deg', '-2deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-2deg', '2deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      className="group relative cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Subtle glow effect */}
      <motion.div
        className="absolute -inset-0.5 bg-white/5 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={isHovered ? { scale: [1, 1.02, 1] } : { scale: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Main card */}
      <div className="relative h-32 bg-black/40 border border-gray-800/50 rounded-lg backdrop-blur-sm overflow-hidden group-hover:border-gray-600/70 transition-all duration-300">
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Grid pattern */}
            <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="border-r border-b border-gray-500/20 last:border-r-0" />
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-4 h-full flex flex-col justify-between z-10">
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-900/80 border border-gray-700/50 rounded-md overflow-hidden flex items-center justify-center group-hover:border-gray-600/70 transition-colors duration-300">
              <ImageWithFallback 
                src={skill.icon} 
                alt={skill.name}
                className="w-6 h-6 object-cover rounded-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-white text-sm font-medium group-hover:text-gray-100 transition-colors duration-300">
                {skill.name}
              </h3>
              <p className="text-gray-500 text-xs uppercase tracking-wide">
                {skill.category}
              </p>
            </div>
          </div>

          {/* Progress section */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-xs">Nivel</span>
              <span className="text-gray-400 text-xs">{skill.level}%</span>
            </div>
            
            {/* Progress bar */}
            <div className="h-1 bg-gray-800/80 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-gray-500 to-white rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>

        {/* Corner accents - minimal */}
        <div className="absolute top-2 left-2 w-2 h-2 border-l border-t border-gray-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-2 right-2 w-2 h-2 border-r border-t border-gray-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-2 left-2 w-2 h-2 border-l border-b border-gray-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-gray-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Scanning line effect */}
        <motion.div
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
          animate={isHovered ? { x: ['-100%', '100%'] } : { x: '-100%' }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}