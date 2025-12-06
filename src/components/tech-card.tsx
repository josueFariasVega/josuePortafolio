import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Skill } from '../types';

interface TechCardProps {
  skill: Skill;
  index: number;
}

export function TechCard({ skill, index }: TechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className="group"
    >
      <Card className="relative overflow-hidden bg-black/40 border-gray-800/50 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-300">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/0 via-gray-700/10 to-gray-800/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="p-6 relative">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-900/50 border border-gray-700/50 flex items-center justify-center">
                <ImageWithFallback 
                  src={skill.icon} 
                  alt={skill.name}
                  className="w-8 h-8 object-cover rounded-md opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div>
                <h3 className="text-white">{skill.name}</h3>
                <Badge 
                  variant="outline" 
                  className="text-xs border-gray-700 text-gray-400 mt-1"
                >
                  {skill.category}
                </Badge>
              </div>
            </div>
            
            {/* Level indicator */}
            <div className="text-right">
              <div className="text-sm text-gray-400 mb-1">Nivel</div>
              <div className="text-xl text-white">{skill.level}%</div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-4">
            <Progress 
              value={skill.level} 
              className="h-2 bg-gray-800/50"
            />
          </div>

          {/* Description */}
          <p className="text-sm text-gray-400 leading-relaxed">
            {skill.description}
          </p>

          {/* Tech pattern decoration */}
          <div className="absolute top-2 right-2 w-8 h-8 opacity-10">
            <div className="w-full h-full border border-gray-600 transform rotate-45" />
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-gray-600 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Border animation */}
        <motion.div
          className="absolute inset-0 border border-gray-600/0 group-hover:border-gray-500/50 transition-colors duration-300"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            backgroundSize: '200% 100%',
          }}
          animate={{
            backgroundPosition: ['200% 0%', '-200% 0%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
            repeatDelay: 3,
          }}
        />
      </Card>
    </motion.div>
  );
}