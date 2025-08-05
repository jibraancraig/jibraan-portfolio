import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

import _68762aa9_4db8_4628_86c5_736311d65116 from "@assets/68762aa9-4db8-4628-86c5-736311d65116.jpg";

export function About() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const { scrollToSection } = useSmoothScroll();

  return (
    <section id="about" className="py-20 px-6 bg-portfolio-secondary" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold portfolio-text-primary mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={_68762aa9_4db8_4628_86c5_736311d65116} 
                alt="Professional headshot" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg portfolio-text-secondary leading-relaxed">Motivated and analytical Year 11 student with a strong interest in investment banking, asset management, and accountancy, demonstrated through hands-on virtual finance programs with JPMorgan, BofA, and Standard Chartered.</p>
              <p className="text-lg portfolio-text-secondary leading-relaxed">Ranked top 5% in Maths, building strong foundations in valuation, financial modelling, and macroeconomics. Seeking opportunities to apply these skills in a real-world finance environment.</p>
              <div className="pt-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center portfolio-accent hover:text-blue-600 transition-colors duration-200"
                >
                  Let's work together <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
