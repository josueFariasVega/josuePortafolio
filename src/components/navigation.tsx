import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Github, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../lib/constants';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { href: '#home', label: 'Inicio' },
    { href: '#about', label: 'Sobre mi' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#experience', label: 'Experiencia' },
    { href: '#contact', label: 'Contacto' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-md border-b border-gray-800/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl text-white cursor-pointer"
              onClick={() => scrollToSection('#home')}
            >
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                &lt;Dev/&gt;
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white transition-colors text-sm relative group"
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <Button
                size="sm"
                className="bg-white text-black hover:bg-gray-200"
                onClick={() => scrollToSection('#contact')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contacto
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white hover:bg-gray-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          x: isOpen ? '0%' : '100%'
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed inset-0 z-40 md:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-black/90 backdrop-blur-md border-l border-gray-800">
          <div className="p-6 pt-20">
            <div className="space-y-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-lg text-gray-300 hover:text-white transition-colors py-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-800">
              <div className="flex items-center gap-4">
                <motion.a
                  href={CONTACT_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full border border-gray-700 hover:border-gray-600 text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <Button
                  className="flex-1 bg-white text-black hover:bg-gray-200"
                  onClick={() => scrollToSection('#contact')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contacto
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}