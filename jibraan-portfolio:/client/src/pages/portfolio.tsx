import { Navigation } from '@/components/portfolio/navigation';
import { Hero } from '@/components/portfolio/hero';
import { About } from '@/components/portfolio/about';
import { Experience } from '@/components/portfolio/experience';
import { Education } from '@/components/portfolio/education';
import { Skills } from '@/components/portfolio/skills';
import { Contact } from '@/components/portfolio/contact';

export default function Portfolio() {
  return (
    <div className="bg-portfolio-primary portfolio-text-primary">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-portfolio-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <p className="portfolio-text-secondary">© 2024 Alex Thompson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
