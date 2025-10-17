import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.fyora.title'),
      subtitle: t('projects.fyora.subtitle'),
      description: t('projects.fyora.description'),
      technologies: ["Python", "TensorFlow", "React Native", "Node.js", "PostgreSQL"],
      category: t('projects.fyora.category'),
      icon: "🎯",
      links: {
        github: "https://github.com/tavares-fiap/fyora-app.git",
        demo: "https://youtu.be/BcfXcRSczAA"
      }
    },
    {
      title: t('projects.global.title'),
      subtitle: t('projects.global.subtitle'),
      description: t('projects.global.description'),
      technologies: ["Azure", "Terraform", "Windows Server", "DNS", "Virtual Machines"],
      category: t('projects.global.category'),
      icon: "⚡",
      links: {
        github: "https://github.com/Breqsz/Global-Front-RepTeste.git",
        demo: "https://www.youtube.com/watch?v=TQAb8NNog9M"
      }
    },
    {
      title: t('projects.devsecops.title'),
      subtitle: t('projects.devsecops.subtitle'),
      description: t('projects.devsecops.description'),
      technologies: ["Node.js", "Docker", "SQLite", "Jenkins", "OWASP ZAP"],
      category: t('projects.devsecops.category'),
      icon: "🔒",
      links: {
        github: "https://github.com",
        demo: "https://www.youtube.com/watch?v=2Jv0O22Dglo"
      }
    },
    {
      title: t('projects.portfolio3d.title'),
      subtitle: t('projects.portfolio3d.subtitle'),
      description: t('projects.portfolio3d.description'),
      technologies: ["Unreal Engine 5", "C++", "Blueprint", "Niagara", "Lumen"],
      category: t('projects.portfolio3d.category'),
      icon: "🎮",
      links: {
        github: "https://github.com",
        demo: "https://youtu.be/lj-duEsnKv8"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Space_Grotesk']">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t('projects.title')}
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 group"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{project.icon}</div>
                    <div>
                      <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-slate-400">{project.subtitle}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-blue-500/30 text-blue-300 text-xs">
                    {project.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-slate-700/50 text-slate-300 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                    onClick={() => window.open(project.links.github, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                    {t('projects.code')}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 flex items-center gap-2"
                    onClick={() => window.open(project.links.demo, '_blank')}
                  >
                    <Play className="w-4 h-4" />
                    {t('projects.demo')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-3"
            onClick={() => window.open('https://github.com/Breqsz', '_blank')}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            {t('projects.viewAll')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;