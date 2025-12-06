import { motion } from 'motion/react';
import { Skill } from '../types';
import { useState } from 'react';

interface TechCardIphoneProps {
  skill: Skill;
  index: number;
}

export function TechCardIphone({ skill, index }: TechCardIphoneProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-white/20 via-gray-400/10 to-white/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm"
        animate={isHovered ? { scale: [1, 1.02, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Main card */}
      <motion.div
        className="relative bg-black/40 backdrop-blur-xl border border-gray-800/30 rounded-2xl p-6 h-full"
        whileHover={{ 
          y: -8,
          scale: 1.02,
          rotateX: 5,
          rotateY: 5,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Floating orb background */}
        <motion.div
          className="absolute top-2 right-2 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl"
          animate={isHovered ? {
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          } : {}}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Tech icon */}
        <div className="relative mb-4 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-900/80 to-black/60 border border-gray-700/50 flex items-center justify-center overflow-hidden"
            whileHover={{ scale: 1.1, rotateY: 10 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {skill.iconUrl && skill.iconUrl !== 'YOUR_REACT_LOGO_URL' && !skill.iconUrl.startsWith('YOUR_') ? (
              <img 
                src={skill.iconUrl} 
                alt={`${skill.name} logo`}
                className="w-10 h-10 object-contain"
              />
            ) : (
              <span className="text-2xl">
                {skill.icon}
              </span>
            )}
          </motion.div>
          
          {/* Scanning line */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent h-0.5 w-full rounded-xl opacity-0 group-hover:opacity-100"
            animate={isHovered ? { x: [-64, 64, -64] } : {}}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Tech name */}
        <h3 className="apple-subtitle text-white text-lg mb-2 text-center">
          {skill.name}
        </h3>

        {/* Description */}
        <p className="apple-body text-gray-400 text-sm text-center mb-4 leading-relaxed">
          {skill.description}
        </p>

        {/* Skill level */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="apple-body text-xs text-gray-500">Nivel</span>
            <span className="apple-body text-xs text-white">{skill.level}%</span>
          </div>
          
          {/* Progress bar */}
          <div className="relative h-1 bg-gray-800/50 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-white to-gray-300 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
            />
            
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              animate={isHovered ? { 
                x: [-32, `${skill.level * 1.5}px`, -32] 
              } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        {/* Category indicator */}
        <motion.div
          className="absolute top-4 left-4 w-2 h-2 bg-white/60 rounded-full"
          animate={isHovered ? {
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6]
          } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        
        {/* Corner accents */}
        <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-gray-600/40" />
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-gray-600/40" />
      </motion.div>
    </motion.div>
  );
}