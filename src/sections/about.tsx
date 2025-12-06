import { motion } from 'motion/react';
import { User, Code2, Lightbulb, Target, Calendar, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../lib/constants';
import { fadeInUp, staggerContainer } from '../lib/animations';

export function AboutSection() {
  const stats = [
    { icon: Calendar, label: 'Experiencia', value: '+1 año' },
    { icon: Code2, label: 'Desde', value: '2021' },
    { icon: Target, label: 'Especialidad', value: 'Fullstack' },
    { icon: MapPin, label: 'Ubicación', value: 'Asunción, PY' }
  ];

  const highlights = [
    {
      icon: Lightbulb,
      title: 'Arquitectura Escalable',
      description: 'Diseño sistemas fullstack robustos y escalables, cuidando tanto frontend como backend'
    },
    {
      icon: Target,
      title: 'Enfoque en Resultados',
      description: 'Orientado a entregar productos completos que generen valor real para usuarios y negocio'
    },
    {
      icon: Code2,
      title: 'Código Limpio',
      description: 'Practico mejores prácticas en toda la stack, desde APIs hasta interfaces de usuario'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gray-900/80 border border-gray-700/50 rounded-xl flex items-center justify-center">
              <User className="w-6 h-6 text-gray-300" />
            </div>
            <h2 className="futuristic-title text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Sobre Mi
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Desarrollador fullstack apasionado por crear soluciones digitales completas y arquitecturas escalables
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Description */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute -inset-4 bg-white/5 rounded-lg blur-sm opacity-50" />
              <div className="relative p-6 bg-black/40 border border-gray-800/50 rounded-lg backdrop-blur-sm">
                <h3 className="futuristic-subtitle text-xl text-white mb-4">Mi Historia</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Mi primer contacto en el mundo de las páginas web comenzó en 2021, al iniciar la carrera de Ingeniería 
                  Informática en la universidad. Desde ese momento descubrí mi pasión por crear soluciones digitales 
                  y experiencias web que realmente impacten.
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Durante este tiempo he evolucionado de los conceptos básicos hasta dominar tecnologías modernas como 
                  React, TypeScript y Next.js. Ha sido en el último año donde consolidé mi experiencia práctica, 
                  enfocándome en desarrollar proyectos funcionales que combinan rendimiento, usabilidad y diseño profesional.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Cuando no estoy programando, puedes encontrarme explorando nuevas tecnologías, contribuyendo a 
                  proyectos open source, o disfrutando de una buena taza de café mientras planeo mi próximo proyecto 
                  innovador.
                </p>
                
                {/* Geometric accent */}
                <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-gray-600/50" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-gray-600/50" />
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="p-4 bg-black/40 border border-gray-800/50 rounded-lg backdrop-blur-sm hover:border-gray-600/70 transition-colors duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-gray-900/80 border border-gray-700/50 rounded-md flex items-center justify-center group-hover:border-gray-600/70 transition-colors duration-300">
                        <IconComponent className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="text-white text-lg mb-1">{stat.value}</div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  variants={fadeInUp}
                  className="group relative"
                >
                  {/* Subtle glow effect */}
                  <motion.div
                    className="absolute -inset-0.5 bg-white/5 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  <div className="relative p-6 bg-black/40 border border-gray-800/50 rounded-lg backdrop-blur-sm group-hover:border-gray-600/70 transition-all duration-300">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gray-900/80 border border-gray-700/50 rounded-lg flex items-center justify-center mb-4 group-hover:border-gray-600/70 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <h4 className="futuristic-subtitle text-lg text-white mb-3 group-hover:text-gray-100 transition-colors duration-300">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {highlight.description}
                    </p>

                    {/* Corner accents */}
                    <div className="absolute top-2 left-2 w-2 h-2 border-l border-t border-gray-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-2 right-2 w-2 h-2 border-r border-t border-gray-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 left-2 w-2 h-2 border-l border-b border-gray-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-gray-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"
        />
      </div>
    </section>
  );
}