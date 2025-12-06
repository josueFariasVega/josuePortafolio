import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useRef } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Eye, Code, Zap } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardAdvancedProps {
  project: Project;
  index: number;
}

export function ProjectCardAdvanced({ project, index }: ProjectCardAdvancedProps) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Mouse tracking for 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-progress':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completado';
      case 'in-progress':
        return 'En desarrollo';
      default:
        return 'Planeado';
    }
  };

  return (
    <motion.div
      ref={ref}
      className="group relative h-[500px] cursor-pointer perspective-1000"
      initial={{ opacity: 0, y: 50 }}
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
        className="absolute -inset-1 bg-white/5 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={isHovered ? { scale: [1, 1.02, 1] } : { scale: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Main card container */}
      <div className="relative h-full bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800/50 rounded-xl overflow-hidden group-hover:border-gray-600/50 transition-all duration-300">
        
        {/* Status indicator */}
        <div className="absolute top-4 right-4 z-20">
          <Badge className={`${getStatusColor(project.status)} text-xs`}>
            {getStatusText(project.status)}
          </Badge>
        </div>

        {/* Project image with overlay */}
        <div className="relative h-48 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full"
          >
            <ImageWithFallback
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Tech pattern overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Scanning line effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent h-0.5 w-full"
            animate={isHovered ? { y: [0, 192, 0] } : { y: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {/* Corner brackets */}
          <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-gray-400/70" />
          <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-gray-400/70" />
          <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-gray-400/70" />
          <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-gray-400/70" />
        </div>

        {/* Content area */}
        <div className="p-6 space-y-4 h-[calc(100%-12rem)] flex flex-col">
          {/* Project title */}
          <div>
            <h3 className="text-xl text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="space-y-2">
            <h4 className="text-gray-300 text-xs uppercase tracking-wide flex items-center gap-2">
              <Code className="w-3 h-3" />
              Stack tecnológico
            </h4>
            <div className="flex flex-wrap gap-1">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs bg-gray-800/50 text-gray-300 border-gray-700/50 hover:border-gray-500/70 hover:text-white transition-colors duration-200"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge
                  variant="outline"
                  className="text-xs bg-gray-800/50 text-gray-400 border-gray-700/50"
                >
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex-1 flex items-end">
            <div className="w-full grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-gray-700/50 text-gray-300 hover:border-gray-500/70 hover:text-white hover:bg-white/5 transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  if (project.githubUrl) {
                    window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                <Github className="w-4 h-4 mr-2" />
                Código
              </Button>
              <Button
                size="sm"
                className="bg-white text-black border-0 hover:bg-gray-200 shadow-lg shadow-white/10 transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  if (project.liveUrl) {
                    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                  }
                }}
                disabled={!project.liveUrl}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Data streams - decorative elements */}
        <div className="absolute left-1 top-1/3 h-16 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute right-1 top-2/3 h-12 w-px bg-gradient-to-b from-transparent via-gray-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Performance indicator */}
        <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Zap className="w-3 h-3" />
            <span>Optimizado</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}