import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();
  const [displayText, setDisplayText] = useState('');
  
  const fullText = t('hero.typing');
  
  useEffect(() => {
    setDisplayText(''); // Reset text when language changes
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, [fullText, language]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-['Space_Grotesk'] leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
            {t('hero.subtitle')}
          </p>
          
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105"
            onClick={() => scrollToSection('projects')}
          >
            {t('hero.viewProjects')}
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105"
            onClick={() => scrollToSection('contact')}
          >
            {t('hero.contactMe')}
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-110"
          >
            <Github className="w-6 h-6 text-slate-300 hover:text-white" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin className="w-6 h-6 text-slate-300 hover:text-white" />
          </a>
          <a 
            href="mailto:guilherme@example.com"
            className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-110"
          >
            <Mail className="w-6 h-6 text-slate-300 hover:text-white" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-slate-400" />
      </div>
    </section>
  );
};

export default Hero;