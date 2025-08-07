import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const education = [
  {
    degree: 'GCSEs',
    field: 'Grades Yet to Come',
    school: 'St Matthew Academy',
    year: '2020 - 2025',
    details: 'Subjects: Mathematics, English Literature, English Language, Combined Science, Geography, Film Studies, Spanish'
  },
  {
    degree: 'A-levels',
    field: 'Grades Yet to Come',
    school: 'N/A',
    year: '2025-2027',
    details: 'Subjects: Mathematics, Economics, IT'
  }
];

export function Education() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="education" className="py-20 px-6 bg-portfolio-secondary" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold portfolio-text-primary mb-16 text-center">Education</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="card-hover bg-white rounded-2xl p-8 shadow-lg border border-portfolio-subtle"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold portfolio-text-primary mb-2">{edu.degree}</h3>
                  <p className="portfolio-accent font-medium mb-1">{edu.field}</p>
                  <p className="portfolio-text-secondary">{edu.school}</p>
                  <span className="portfolio-text-secondary text-sm">{edu.year}</span>
                </div>
                <p className="portfolio-text-secondary leading-relaxed">
                  {edu.details}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
