import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const experiences = [
  {
    title: 'Bank of America Investment Banking on Forage',
    company: 'Bank of America',
    duration: 'April 2025',
    description: 'Identified an ideal acquisition target for a client based on a SWOT analysis and assessment of their strategic criteria. Constructed a DCF model to calculate the implied equity and share value of the acquisition target. Completed a sensitivity analysis to illustrate how the target\'s valuation would change as variables change. Created a company profile summarizing all key information about the target.',
    technologies: ['SWOT Analysis', 'DCF Modelling', 'Sensitivity Analysis', 'Financial Valuation']
  },
  {
    title: 'Marketing Assistant Work Experience',
    company: 'Kwanda',
    duration: '2024 - 2024',
    description: 'Supported marketing campaigns through content creation, social media management, and market research. Assisted in developing brand messaging strategies, coordinated promotional events, and analysed campaign performance metrics.',
    technologies: ['Social Media Marketing', 'Content Creation', 'Market Research', 'Campaign Analytics']
  },
  {
    title: 'Proofreader',
    company: 'Skoolmaths',
    duration: '2019 - 2022',
    description: 'Proofread digital lessons and worksheets made by Skoolmaths, and produced constructive feedback; corrected typography, suggested colour schemes etc.',
    technologies: ['Typography', 'Content Review', 'Quality Assurance']
  }
];

export function Experience() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="experience" className="py-20 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold portfolio-text-primary mb-16 text-center">Experience</h2>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="card-hover bg-white rounded-2xl p-8 shadow-lg border border-portfolio-subtle"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold portfolio-text-primary">{experience.title}</h3>
                    <p className="portfolio-accent font-medium">{experience.company}</p>
                  </div>
                  <span className="portfolio-text-secondary font-medium mt-2 md:mt-0">{experience.duration}</span>
                </div>
                <p className="portfolio-text-secondary leading-relaxed mb-4">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-portfolio-secondary portfolio-text-secondary rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
