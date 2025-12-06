import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Clock, CheckCircle2, Circle } from 'lucide-react';
import { Project } from '../types';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const getStatusIcon = () => {
    switch (project.status) {
      case 'completed':
        return <CheckCircle2 className="w-4 h-4 text-green-400" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-yellow-400" />;
      default:
        return <Circle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = () => {
    switch (project.status) {
      case 'completed':
        return 'text-green-400 border-green-400/20';
      case 'in-progress':
        return 'text-yellow-400 border-yellow-400/20';
      default:
        return 'text-gray-400 border-gray-400/20';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`group ${project.featured ? 'md:col-span-2' : ''}`}
    >
      <Card className="relative overflow-hidden bg-black/60 border-gray-800/50 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-300 h-full">
        {project.featured && (
          <div className="absolute top-4 left-4 z-10">
            <Badge className="bg-white/10 text-white border-white/20">
              Destacado
            </Badge>
          </div>
        )}

        {/* Image placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-gray-800/50 to-gray-900/50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-700/20 to-gray-800/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl text-gray-600/30">💻</div>
          </div>
          
          {/* Tech grid overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full grid grid-cols-8 grid-rows-8 gap-1 p-4">
              {Array.from({ length: 16 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-white/20 rounded-sm"
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-xl text-white mb-2">{project.title}</h3>
              <div className="flex items-center gap-2">
                {getStatusIcon()}
                <span className={`text-sm capitalize ${getStatusColor()}`}>
                  {project.status === 'in-progress' ? 'En desarrollo' : 
                   project.status === 'completed' ? 'Completado' : 'Planeado'}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            {project.featured ? project.longDescription : project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, i) => (
              <Badge
                key={i}
                variant="outline"
                className="text-xs border-gray-700/50 text-gray-300 hover:border-gray-600"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              size="sm"
              variant="outline"
              className="flex-1 border-gray-700 text-gray-300 hover:border-gray-600 hover:text-white"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              Código
            </Button>
            {project.liveUrl && (
              <Button
                size="sm"
                className="flex-1 bg-white/10 hover:bg-white/20 text-white border-gray-600"
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </Button>
            )}
          </div>
        </div>

        {/* Scan line animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          style={{ width: '100%', height: '2px', top: '50%' }}
          animate={{
            x: [-100, window.innerWidth],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 4,
            ease: 'easeInOut',
          }}
        />
      </Card>
    </motion.div>
  );
}