import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowUp, Github, Linkedin, Mail, Heart, Code, Coffee } from 'lucide-react';
import { PERSONAL_INFO, CONTACT_INFO } from '../lib/constants';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black/60 border-t border-gray-800/50 backdrop-blur-sm">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-2xl text-white cursor-pointer"
              onClick={scrollToTop}
            >
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                &lt;{PERSONAL_INFO.name.split(' ')[0]}/&gt;
              </span>
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {PERSONAL_INFO.subtitle}
            </p>
            <div className="text-xs text-gray-500">
              © {currentYear} {PERSONAL_INFO.name}. Todos los derechos reservados.
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white">Enlaces Rápidos</h3>
            <div className="space-y-2">
              {[
                { href: '#skills', label: 'Tecnologías' },
                { href: '#projects', label: 'Proyectos' },
                { href: '#experience', label: 'Experiencia' },
                { href: '#contact', label: 'Contacto' }
              ].map((link) => (
                <motion.button
                  key={link.href}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-sm text-gray-400 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="text-white">Conectar</h3>
            <div className="space-y-3">
              <motion.a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <Github className="w-4 h-4" />
                GitHub
              </motion.a>
              <motion.a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </motion.a>
              <motion.a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4" />
                Email
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Made with love */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Hecho con</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500" />
              </motion.div>
              <span>usando</span>
              <Code className="w-4 h-4" />
              <span>React & TypeScript</span>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span>Stack:</span>
              <span>React</span>
              <span>•</span>
              <span>TypeScript</span>
              <span>•</span>
              <span>Tailwind CSS</span>
              <span>•</span>
              <span>Shadcn/UI</span>
              <span>•</span>
              <span>Motion</span>
            </div>

            {/* Back to top */}
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-gray-700 text-gray-400 hover:border-gray-600 hover:text-white"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Volver arriba
            </Button>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-1/4 w-px h-16 bg-gradient-to-t from-gray-700/50 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-px h-16 bg-gradient-to-t from-gray-700/50 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
      </div>

      {/* Coffee easter egg */}
      <motion.div
        className="absolute bottom-4 left-4 text-xs text-gray-700 opacity-50"
        whileHover={{ opacity: 1, scale: 1.1 }}
      >
        <div className="flex items-center gap-1">
          <Coffee className="w-3 h-3" />
          <span>Powered by coffee</span>
        </div>
      </motion.div>
    </footer>
  );
}