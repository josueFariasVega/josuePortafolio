import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calendar, MapPin, Briefcase, GraduationCap, User } from 'lucide-react';
import { EXPERIENCE } from '../lib/constants';
import { fadeInUp, fadeInLeft } from '../lib/animations';

export function ExperienceSection() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-5 h-5" />;
      case 'education':
        return <GraduationCap className="w-5 h-5" />;
      case 'freelance':
        return <User className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'education':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'freelance':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getTypeName = (type: string) => {
    switch (type) {
      case 'work':
        return 'Trabajo';
      case 'education':
        return 'Educación';
      case 'freelance':
        return 'Freelance';
      default:
        return 'Experiencia';
    }
  };

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="futuristic-title text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Experiencia & Formación
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Mi trayectoria en desarrollo fullstack, desde frontend con React hasta backend robusto con NestJS
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gray-800 via-gray-600 to-gray-800" />

          {/* Experience Items */}
          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={fadeInLeft.hidden}
                whileInView={fadeInLeft.visible}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-white rounded-full border-4 border-gray-900 z-10" />
                
                {/* Timeline connector line */}
                <div className="absolute left-14 top-2 w-6 h-px bg-gray-700" />

                <Card className="bg-black/40 border-gray-800/50 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-300 group">
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className={getTypeColor(exp.type)}>
                            {getIcon(exp.type)}
                            <span className="ml-2">{getTypeName(exp.type)}</span>
                          </Badge>
                        </div>
                        <h3 className="futuristic-subtitle text-xl text-white mb-1">{exp.position}</h3>
                        <h4 className="futuristic-subtitle text-lg text-gray-300 mb-2">{exp.company}</h4>
                      </div>
                      
                      <div className="text-right text-sm text-gray-400">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                            <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs border-gray-700/50 text-gray-300 hover:border-gray-600"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800/0 via-gray-700/5 to-gray-800/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Current Status */}
        <motion.div
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-black/60 via-gray-900/60 to-black/60 border-gray-700/50 backdrop-blur-sm p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <h3 className="futuristic-subtitle text-2xl text-white">Estado Actual</h3>
            </div>
            <p className="text-gray-400 text-lg mb-4">
              Buscando oportunidades como <span className="text-white">Fullstack Developer Junior</span>
            </p>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Especializado en desarrollo frontend (React/Next.js) y backend (NestJS/Node.js), 
              listo para contribuir en proyectos fullstack que requieran soluciones escalables y modernas
            </p>
          </Card>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 left-4 w-32 h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent" />
      <div className="absolute bottom-1/4 right-4 w-32 h-px bg-gradient-to-l from-transparent via-gray-700/50 to-transparent" />
    </section>
  );
}