import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const education = [
  {
    degree: 'GCSEs',
    field: 'Grades Yet to Come',
    school: 'St Matthew Academy',
    year: '2015 - 2017',
    details: 'Specialized in Human-Computer Interaction and Software Engineering. Thesis focused on improving user experience in complex web applications.'
  },
  {
    degree: 'Bachelor of Science',
    field: 'Software Engineering',
    school: 'UC Berkeley',
    year: '2011 - 2015',
    details: 'Graduated Magna Cum Laude. Active in programming competitions and open-source contributions. President of the Computer Science Society.'
  }
];

const certifications = [
  {
    name: 'AWS Solutions Architect',
    year: '2022',
    icon: '☁️'
  },
  {
    name: 'Google Cloud Professional',
    year: '2021',
    icon: '🌐'
  },
  {
    name: 'Scrum Master',
    year: '2020',
    icon: '📋'
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

          <div className="mt-12">
            <h3 className="text-2xl font-semibold portfolio-text-primary mb-8 text-center">Certifications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-portfolio-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">{cert.icon}</span>
                  </div>
                  <h4 className="font-semibold portfolio-text-primary">{cert.name}</h4>
                  <p className="portfolio-text-secondary text-sm">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
