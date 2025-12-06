import { motion } from 'motion/react';
import { TechCardIphone } from '../components/tech-card-iphone';
import { SKILLS } from '../lib/constants';
import { fadeInUp, staggerContainer } from '../lib/animations';
import { Code2, Cpu, Palette, Wrench, Layers } from 'lucide-react';
import { useState } from 'react';

type CategoryType = 'all' | 'frontend' | 'backend' | 'design' | 'tools';

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');

  const categories = [
    {
      id: 'all' as CategoryType,
      name: 'Todas',
      subtitle: 'Todo el stack tecnológico',
      icon: Layers,
      skills: SKILLS,
      accent: 'from-white/20 to-gray-400/20'
    },
    {
      id: 'frontend' as CategoryType,
      name: 'Frontend',
      subtitle: 'Interfaces modernas y experiencias de usuario',
      icon: Code2,
      skills: SKILLS.filter(skill => skill.category === 'frontend'),
      accent: 'from-blue-500/20 to-purple-500/20'
    },
    {
      id: 'backend' as CategoryType, 
      name: 'Backend', 
      subtitle: 'Arquitecturas robustas y APIs escalables',
      icon: Cpu,
      skills: SKILLS.filter(skill => skill.category === 'backend'),
      accent: 'from-green-500/20 to-teal-500/20'
    },
    {
      id: 'design' as CategoryType,
      name: 'UI/UX',
      subtitle: 'Sistemas de diseño y prototipado digital',
      icon: Palette,
      skills: SKILLS.filter(skill => skill.category === 'design'),
      accent: 'from-pink-500/20 to-rose-500/20'
    },
    {
      id: 'tools' as CategoryType,
      name: 'Tools',
      subtitle: 'DevOps, control de versiones y optimización',
      icon: Wrench,
      skills: SKILLS.filter(skill => skill.category === 'tools'),
      accent: 'from-orange-500/20 to-yellow-500/20'
    }
  ];

  const activeCategory = categories.find(cat => cat.id === selectedCategory) || categories[0];

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-20 relative"
        >
          {/* Floating elements */}
          <motion.div
            className="absolute -top-10 left-1/4 w-2 h-2 bg-white/40 rounded-full"
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute -top-6 right-1/3 w-1 h-1 bg-white/60 rounded-full"
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
          />

          <motion.div
            className="inline-block mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <h2 className="apple-title text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Tecnologías
            </h2>
            <h2 className="apple-title text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-gray-400 via-gray-200 to-white bg-clip-text text-transparent mt-2">
              & Herramientas
            </h2>
          </motion.div>
          
          <motion.p 
            className="apple-body text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Stack tecnológico moderno enfocado en desarrollo fullstack
            <br />
            <span className="text-gray-500">con arquitectura escalable y experiencias excepcionales</span>
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => {
              const isActive = selectedCategory === category.id;
              const Icon = category.icon;
              
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    relative group px-6 py-3 rounded-xl transition-all duration-300
                    ${isActive 
                      ? 'bg-white text-black' 
                      : 'bg-black/40 text-gray-400 hover:text-white border border-gray-800/50 hover:border-gray-700/70'
                    }
                  `}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-black' : 'text-gray-400 group-hover:text-white'}`} />
                    <span className="text-sm">{category.name}</span>
                  </div>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-white rounded-xl -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Active Category Display */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          {/* Category Header */}
          <motion.div 
            className="flex items-center justify-center mb-12 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-64 h-px bg-gradient-to-r ${activeCategory.accent} opacity-50`} />
            </div>
            
            <div className="relative bg-black/60 backdrop-blur-xl border border-gray-800/50 rounded-2xl px-8 py-4 flex items-center gap-4">
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-gray-900/80 to-black/60 border border-gray-700/50 rounded-xl flex items-center justify-center"
                whileHover={{ rotateY: 180, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <activeCategory.icon className="w-5 h-5 text-white" />
              </motion.div>
              
              <div className="text-center">
                <h3 className="apple-subtitle text-xl text-white">
                  {activeCategory.name}
                </h3>
                <p className="apple-body text-gray-500 text-sm mt-1">
                  {activeCategory.subtitle}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {activeCategory.skills.map((skill, index) => (
              <motion.div 
                key={skill.id} 
                variants={fadeInUp}
                layout
              >
                <TechCardIphone 
                  skill={skill} 
                  index={index} 
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="mt-24 relative"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 rounded-3xl blur-3xl" />
          
          <div className="relative bg-black/40 backdrop-blur-xl border border-gray-800/30 rounded-3xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Proyectos', value: '15+', delay: 0 },
                { label: 'Tecnologías', value: '12+', delay: 0.1 },
                { label: 'Horas de código', value: '500+', delay: 0.2 },
                { label: 'Commits', value: '200+', delay: 0.3 },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center group cursor-pointer"
                  whileHover={{ 
                    scale: 1.05,
                    y: -4
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  // @ts-ignore
                  transition={{ 
                    duration: 0.6, 
                    delay: stat.delay,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <motion.div 
                    className="apple-title text-3xl md:text-4xl text-white mb-2 group-hover:text-gray-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="apple-body text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Background Elements */}
      <motion.div
        className="absolute top-1/4 left-0 w-px h-40 bg-gradient-to-b from-transparent via-white/20 to-transparent"
        animate={{ opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-px h-32 bg-gradient-to-t from-transparent via-white/20 to-transparent"
        animate={{ opacity: [0.8, 0.2, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8
          }}
        />
      ))}
    </section>
  );
}