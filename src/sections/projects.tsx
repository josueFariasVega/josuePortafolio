import { motion } from 'motion/react';
import { ProjectCardSimple } from '../components/project-card-simple';
import { Button } from '../components/ui/button';
import { ArrowRight, Github, Grid, Code2, Rocket } from 'lucide-react';
import { PROJECTS } from '../lib/constants';
import { fadeInUp, staggerContainer } from '../lib/animations';

export function ProjectsSection() {
  const featuredProjects = PROJECTS.filter(project => project.featured);
  const otherProjects = PROJECTS.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header with futuristic design */}
        <motion.div
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 relative"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gray-900/80 border border-gray-700/50 rounded-xl flex items-center justify-center">
              <Grid className="w-6 h-6 text-gray-300" />
            </div>
            <h2 className="futuristic-title text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Proyectos Destacados
            </h2>
            <div className="w-12 h-12 bg-gray-900/80 border border-gray-700/50 rounded-xl flex items-center justify-center">
              <Code2 className="w-6 h-6 text-gray-300" />
            </div>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Portfolio de proyectos que demuestran expertise en desarrollo frontend moderno, 
            UI/UX avanzado y arquitectura de componentes escalables
          </p>
          
          {/* Stats bar */}
          <div className="flex justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Rocket className="w-4 h-4 text-gray-400" />
              <span>{PROJECTS.length} Proyectos</span>
            </div>
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-gray-400" />
              <span>{featuredProjects.length} Destacados</span>
            </div>
          </div>
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`grid gap-8 mb-16 ${
            featuredProjects.length === 1 
              ? 'grid-cols-1 max-w-md mx-auto' 
              : featuredProjects.length === 2 
              ? 'grid-cols-1 lg:grid-cols-2 max-w-4xl mx-auto' 
              : 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'
          }`}
        >
          {featuredProjects.map((project, index) => (
            <ProjectCardSimple key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Other Projects Section */}
        {otherProjects.length > 0 && (
          <motion.div
            initial={fadeInUp.hidden}
            whileInView={fadeInUp.visible}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 justify-center mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent flex-1" />
              <h3 className="futuristic-subtitle text-xl text-white px-4">Otros Proyectos</h3>
              <div className="h-px bg-gradient-to-l from-transparent via-gray-700 to-transparent flex-1" />
            </div>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`grid gap-8 ${
                otherProjects.length === 1 
                  ? 'grid-cols-1 max-w-md mx-auto' 
                  : otherProjects.length === 2 
                  ? 'grid-cols-1 lg:grid-cols-2 max-w-4xl mx-auto' 
                  : otherProjects.length === 3
                  ? 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto'
                  : 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'
              }`}
            >
              {otherProjects.map((project, index) => (
                <ProjectCardSimple key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Call to Action - Redesigned */}
        <motion.div
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80 border border-gray-800/50 rounded-2xl p-8 md:p-12 backdrop-blur-xl overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gray-500/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gray-900/80 border border-gray-700/50 rounded-2xl flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-gray-300" />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl text-white mb-4">
                ¿Listo para <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">colaborar</span>?
              </h3>
              
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Siempre estoy abierto a nuevos desafíos, proyectos innovadores y oportunidades 
                de aprendizaje en el ecosistema frontend
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-white text-black border-0 hover:bg-gray-200 shadow-lg shadow-white/10 px-8 py-3"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Ver más proyectos
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700/50 bg-transparent text-gray-300 hover:border-gray-500/70 hover:text-white hover:bg-white/5 px-8 py-3"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub Profile
                </Button>
              </div>
            </div>

            {/* Corner decorative elements */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gray-600/50" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-gray-600/50" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-gray-600/50" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gray-600/50" />
          </div>
        </motion.div>
      </div>

      {/* Floating Code Blocks */}
      <div className="absolute top-20 left-8 opacity-5 text-gray-500 text-xs font-mono">
        const portfolio = &#123;<br />
        &nbsp;&nbsp;developer: "Junior Frontend",<br />
        &nbsp;&nbsp;passion: "UI/UX Design",<br />
        &nbsp;&nbsp;focus: "User Experience"<br />
        &#125;;
      </div>

      <div className="absolute bottom-20 right-8 opacity-5 text-gray-500 text-xs font-mono">
        function buildAmazingUIs() &#123;<br />
        &nbsp;&nbsp;return React + TypeScript<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ Shadcn/UI<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ creativity;<br />
        &#125;
      </div>
    </section>
  );
}