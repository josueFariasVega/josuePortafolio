import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardSimpleProps {
  project: Project;
  index: number;
}

export function ProjectCardSimple({ project, index }: ProjectCardSimpleProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'in-progress':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
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
      className="group relative overflow-hidden rounded-lg bg-black/40 border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden bg-gray-900/50">
        <ImageWithFallback
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <Badge className={`${getStatusColor(project.status)} text-xs backdrop-blur-sm`}>
            {getStatusText(project.status)}
          </Badge>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl text-white group-hover:text-gray-200 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-xs bg-gray-900/50 text-gray-300 border-gray-700/50 hover:border-gray-600/70 transition-colors"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 5 && (
            <Badge
              variant="outline"
              className="text-xs bg-gray-900/50 text-gray-400 border-gray-700/50"
            >
              +{project.technologies.length - 5}
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 bg-transparent border-gray-700/50 text-gray-300 hover:border-gray-600/70 hover:text-white hover:bg-gray-900/30 transition-all"
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
            className="flex-1 bg-white text-black hover:bg-gray-200 transition-all"
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

      {/* Subtle hover glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}