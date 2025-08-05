import { motion } from 'framer-motion';
import { Mail, Linkedin, Store } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'jibraancraig@gmail.com',
    href: 'mailto:jibraancraig@gmail.com'
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: '/in/jibraancraig',
    href: 'https://www.linkedin.com/in/jibraan-craig-451812303/'
  },
  {
    icon: Store,
    title: 'TPT Store',
    value: '/MSELAHUB',
    href: 'https://www.teacherspayteachers.com/store/math-science-ela-hub'
  }
];

export function Contact() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-portfolio-secondary" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold portfolio-text-primary mb-8">Let's Connect</h2>
          <p className="text-xl portfolio-text-secondary mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always open to discussing new opportunities 
            and interesting projects.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                  className="card-hover bg-white rounded-2xl p-8 shadow-lg border border-portfolio-subtle"
                >
                  <div className="w-16 h-16 bg-portfolio-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white w-8 h-8" />
                  </div>
                  <h3 className="font-semibold portfolio-text-primary mb-2">{contact.title}</h3>
                  <a 
                    href={contact.href}
                    className="portfolio-accent hover:text-blue-600 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact.value}
                  </a>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-portfolio-subtle"
          >
            <h3 className="text-2xl font-semibold portfolio-text-primary mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-portfolio-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-portfolio-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-portfolio-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-portfolio-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                required
              />
              <Button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-portfolio-accent text-white rounded-xl hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
