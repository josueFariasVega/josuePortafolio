import { motion } from "motion/react";
import { Badge } from "../components/ui/badge";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { PERSONAL_INFO, CONTACT_INFO } from "../lib/constants";
import { fadeInUp } from "../lib/animations";
import { TypingAnimation } from "../components/typing-animation";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import profileImage from "figma:asset/32e3a9b0658f54b606429dbb6de88f3eee409bf0.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center relative z-10 bg-[rgba(0,0,0,0)]">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
              <ImageWithFallback
                src={
                  "https://subir-imagen.com/images/2025/09/29/Screenshot-2025-09-29-191236.png"
                }
                alt="Josué Farías - Fullstack Developer"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Animated ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white/30"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white/20"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Status Badge */}
        <motion.div
          initial={fadeInUp.hidden}
          animate={fadeInUp.visible}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            Disponible para trabajar
          </Badge>
        </motion.div>

        {/* Main Heading with Typing Animation Effect */}
        <motion.div
          initial={fadeInUp.hidden}
          animate={fadeInUp.visible}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <TypingAnimation
            text={PERSONAL_INFO.name}
            duration={150}
            startOnView={true}
            className="futuristic-title text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={fadeInUp.hidden}
          animate={fadeInUp.visible}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="futuristic-subtitle text-xl md:text-2xl text-gray-400 mb-4">
            {PERSONAL_INFO.title}
          </div>
          <div className="futuristic-subtitle text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            {PERSONAL_INFO.subtitle}
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={fadeInUp.hidden}
          animate={fadeInUp.visible}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-gray-400 leading-relaxed max-w-2xl mx-auto mb-12"
        >
          Desarrollador enfocado en crear soluciones web
          efectivas y escalables. Encuentro la forma de resolver
          problemas técnicos complejos y transformo ideas en
          aplicaciones funcionales que realmente aportan valor.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={fadeInUp.hidden}
          animate={fadeInUp.visible}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center gap-6 mb-12"
        >
          <motion.a
            href={CONTACT_INFO.github}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href={CONTACT_INFO.linkedin}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href={`mailto:${CONTACT_INFO.email}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-500"
          >
            <span className="text-sm mb-2">
              Scroll para explorar
            </span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {["⚛️", "📘", "🎨", "💨", "▲", "🔧"].map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-10"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Cyberpunk grid corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-gray-700/50" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-gray-700/50" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-gray-700/50" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-gray-700/50" />
    </section>
  );
}