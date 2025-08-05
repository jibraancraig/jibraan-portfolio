import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Users, Lightbulb, MessageCircle, Settings } from 'lucide-react';

const technicalSkills = [
  { name: 'Excel', percentage: 65 },
  { name: 'Powerpoint', percentage: 90 },
  { name: 'Figma', percentage: 40 },
  { name: 'Canva', percentage: 80 }
];

const professionalSkills = [
  {
    name: 'Leadership',
    description: 'Team Management',
    icon: Users
  },
  {
    name: 'Problem Solving',
    description: 'Creative Solutions',
    icon: Lightbulb
  },
  {
    name: 'Communication',
    description: 'Client Relations',
    icon: MessageCircle
  },
  {
    name: 'Project Management',
    description: 'Agile/Scrum',
    icon: Settings
  }
];

export function Skills() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="skills" className="py-20 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold portfolio-text-primary mb-16 text-center">Skills & Expertise</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold portfolio-text-primary mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium portfolio-text-primary">{skill.name}</span>
                      <span className="portfolio-text-secondary">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-portfolio-secondary rounded-full h-2">
                      <motion.div
                        className="skill-bar h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={isIntersecting ? { width: `${skill.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold portfolio-text-primary mb-8">Professional Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {professionalSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                      className="text-center p-6 bg-portfolio-secondary rounded-xl"
                    >
                      <div className="w-12 h-12 bg-portfolio-accent rounded-full flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="text-white w-6 h-6" />
                      </div>
                      <h4 className="font-semibold portfolio-text-primary mb-1">{skill.name}</h4>
                      <p className="portfolio-text-secondary text-sm">{skill.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
