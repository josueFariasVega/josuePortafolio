import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Send, 
  MessageCircle,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { CONTACT_INFO } from '../lib/constants';
import { fadeInUp, fadeInLeft, fadeInRight } from '../lib/animations';
import { useState } from 'react';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: CONTACT_INFO.github,
      icon: <Github className="w-5 h-5" />,
      description: 'Código y proyectos'
    },
    {
      name: 'LinkedIn',
      url: CONTACT_INFO.linkedin,
      icon: <Linkedin className="w-5 h-5" />,
      description: 'Red profesional'
    },
    {
      name: 'Email',
      url: `mailto:${CONTACT_INFO.email}`,
      icon: <Mail className="w-5 h-5" />,
      description: 'Contacto directo'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="futuristic-title text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Conectemos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Siempre interesado en nuevos proyectos, oportunidades de colaboración o simplemente una conversación sobre tecnología
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={fadeInLeft.hidden}
            whileInView={fadeInLeft.visible}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/40 border-gray-800/50 backdrop-blur-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-white" />
                <h3 className="text-2xl text-white">Envíame un mensaje</h3>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">
                      Nombre
                    </label>
                    <Input 
                      placeholder="Tu nombre"
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">
                      Email
                    </label>
                    <Input 
                      type="email"
                      placeholder="tu.email@ejemplo.com"
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">
                    Asunto
                  </label>
                  <Input 
                    placeholder="¿En qué puedo ayudarte?"
                    className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
                
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">
                    Mensaje
                  </label>
                  <Textarea 
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                    rows={5}
                    className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-white text-black hover:bg-gray-200"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensaje
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={fadeInRight.hidden}
            whileInView={fadeInRight.visible}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Quick Contact */}
            <Card className="bg-black/40 border-gray-800/50 backdrop-blur-sm p-6">
              <h3 className="text-xl text-white mb-4">Contacto Rápido</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <div className="flex-1">
                    <span className="text-gray-300">{CONTACT_INFO.email}</span>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={copyEmail}
                    className="border-gray-700 text-gray-300 hover:border-gray-600"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{CONTACT_INFO.location}</span>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="bg-black/40 border-gray-800/50 backdrop-blur-sm p-6">
              <h3 className="text-xl text-white mb-4">Redes Sociales</h3>
              
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg border border-gray-800/50 hover:border-gray-600/50 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-gray-700/50 transition-colors">
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-white">{social.name}</div>
                      <div className="text-sm text-gray-400">{social.description}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <Card className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-500/30 backdrop-blur-sm p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <h3 className="text-xl text-white">Disponibilidad</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Actualmente disponible para proyectos freelance y oportunidades laborales
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  Tiempo completo
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                  Proyectos
                </Badge>
                <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                  Colaboraciones
                </Badge>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={fadeInUp.hidden}
          whileInView={fadeInUp.visible}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">
            ¿Prefieres una conversación más directa?
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-600 text-white hover:border-gray-400"
            onClick={() => window.open(`mailto:${CONTACT_INFO.email}`, '_blank')}
          >
            <Mail className="w-5 h-5 mr-2" />
            Enviar Email Directo
          </Button>
        </motion.div>
      </div>

      {/* Background Tech Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"
          animate={{
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"
          animate={{
            scaleX: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>
    </section>
  );
}