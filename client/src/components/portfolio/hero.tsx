import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

export function Hero() {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl font-bold portfolio-text-primary mb-6 leading-tight">Jibraan Craig</h1>
          <p className="text-xl md:text-2xl portfolio-text-secondary mb-8 font-light leading-relaxed">
            Senior Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg portfolio-text-secondary max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences through innovative design and robust development. 
            Passionate about creating solutions that make a meaningful impact.
          </p>
          <div className="mt-12">
            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center px-8 py-4 bg-portfolio-accent text-white rounded-full hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Explore My Work
              <ArrowDown className="ml-2 w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
