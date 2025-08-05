import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
                alt="Professional headshot" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg portfolio-text-secondary leading-relaxed">
                With over 8 years of experience in software development, I specialize in creating 
                seamless user experiences that bridge the gap between complex functionality and 
                intuitive design. My approach combines technical expertise with creative problem-solving 
                to deliver solutions that exceed expectations.
              </p>
              <p className="text-lg portfolio-text-secondary leading-relaxed">
                I believe in the power of clean code, thoughtful design, and collaborative teamwork. 
                Whether working on enterprise applications or startup MVPs, I bring the same level 
                of dedication and attention to detail to every project.
              </p>
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
