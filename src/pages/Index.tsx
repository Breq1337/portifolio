import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Timeline from '@/components/Timeline';
import Contact from '@/components/Contact';

export default function Index() {
  const { t } = useLanguage();

  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add intersection observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 font-['Inter']">
      {/* Navigation - Fixed header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-white font-['Space_Grotesk']">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                GRB
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <a 
                href="#about" 
                className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                {t('nav.about')}
              </a>
              <a 
                href="#projects" 
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                {t('nav.projects')}
              </a>
              <a 
                href="#skills" 
                className="text-slate-300 hover:text-purple-400 transition-colors duration-300 font-medium"
              >
                {t('nav.skills')}
              </a>
              <a 
                href="#timeline" 
                className="text-slate-300 hover:text-green-400 transition-colors duration-300 font-medium"
              >
                {t('nav.timeline')}
              </a>
              <a 
                href="#contact" 
                className="text-slate-300 hover:text-pink-400 transition-colors duration-300 font-medium"
              >
                {t('nav.contact')}
              </a>
              <LanguageToggle />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-3">
              <LanguageToggle />
              <button className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}