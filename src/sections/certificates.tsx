import { useEffect, useState, useCallback } from 'react';
import { motion } from 'motion/react';
import { Award, ChevronLeft, ChevronRight, ExternalLink, Calendar } from 'lucide-react';
import { CERTIFICATES } from '../lib/constants';
import { fadeInUp } from '../lib/animations';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '../components/ui/carousel';

export function CertificatesSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Update current slide index
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Auto-play functionality
  useEffect(() => {
    if (!api) return;
    
    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section id="certificates" className="py-20 px-4 relative">
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
              <Award className="w-6 h-6 text-gray-300" />
            </div>
            <h2 className="futuristic-title text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Certificaciones
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Formación continua y reconocimientos oficiales que avalan mis conocimientos técnicos
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Background Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-900/20 via-purple-900/10 to-blue-900/20 rounded-3xl blur-2xl opacity-40 -z-10" />
          
          <Carousel 
            setApi={setApi} 
            className="w-full relative"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {CERTIFICATES.map((cert) => (
                <CarouselItem key={cert.id} className="pl-4 md:basis-2/3 lg:basis-3/5">
                  <div className="bg-black/40 border border-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-gray-700/80 flex flex-col h-full">
                    
                    {/* Image Area - Clean, no overlays */}
                    <div className="relative aspect-[16/10] bg-gray-900/30 overflow-hidden border-b border-gray-800/50">
                      <div className="absolute inset-0 p-4 flex items-center justify-center">
                        <div className="relative w-full h-full shadow-lg rounded-lg overflow-hidden transition-transform duration-700 hover:scale-[1.02]">
                          <ImageWithFallback
                            src={cert.imageUrl}
                            alt={cert.title}
                            className="w-full h-full object-contain bg-gray-900" 
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Area - Separated from Image */}
                    <div className="p-6 md:p-8 flex-1 flex flex-col">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div>
                          <Badge variant="outline" className="mb-3 bg-white/5 border-white/10 text-gray-300 hover:bg-white/10">
                            {cert.issuer}
                          </Badge>
                          <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                            {cert.title}
                          </h3>
                        </div>
                        
                        <div className="flex items-center text-gray-400 text-sm font-mono whitespace-nowrap bg-white/5 px-3 py-1.5 rounded-md border border-white/5">
                          <Calendar className="w-3.5 h-3.5 mr-2" />
                          {cert.date}
                        </div>
                      </div>
                      
                      <p className="text-gray-400 text-sm leading-relaxed border-t border-gray-800/50 pt-4 mt-auto">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Controls - Better positioning for mobile/desktop */}
            <div className="flex justify-center items-center gap-4 mt-8 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0 md:right-0 md:justify-between md:pointer-events-none md:mt-0 md:px-4 lg:-mx-16">
              <CarouselPrevious className="static md:pointer-events-auto md:bg-black/80 md:border-gray-700 md:text-white md:hover:bg-white md:hover:text-black transition-all" />
              
              {/* Dots for mobile - Center */}
              <div className="flex gap-2 md:hidden">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index + 1 === current 
                        ? "bg-white w-6" 
                        : "bg-white/20"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <CarouselNext className="static md:pointer-events-auto md:bg-black/80 md:border-gray-700 md:text-white md:hover:bg-white md:hover:text-black transition-all" />
            </div>

            {/* Desktop Dots - Bottom */}
            <div className="hidden md:flex justify-center gap-2 mt-8">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index + 1 === current 
                      ? "bg-white w-8" 
                      : "bg-gray-700 w-2 hover:bg-gray-500"
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
