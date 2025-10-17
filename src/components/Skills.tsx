import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Cloud, Palette, Database, Shield, Wrench } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.languages'),
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: ["Python", "JavaScript", "TypeScript", "C#", "SQL", "PowerShell"]
    },
    {
      title: t('skills.cloudInfra'),
      icon: <Cloud className="w-6 h-6" />,
      color: "from-cyan-500 to-teal-500",
      skills: ["Azure", "Terraform", "Docker", "Kubernetes", "Node-RED", "Windows Server"]
    },
    {
      title: t('skills.frontend'),
      icon: <Palette className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"]
    },
    {
      title: t('skills.aiData'),
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: ["Machine Learning", "TensorFlow", "SQLite", "PostgreSQL", "Vision APIs", "Data Analysis"]
    },
    {
      title: t('skills.security'),
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-orange-500",
      skills: ["DevSecOps", "Digital Forensics", "OWASP", "Jenkins", "CI/CD", "Security Auditing"]
    },
    {
      title: t('skills.tools'),
      icon: <Wrench className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      skills: ["Git", "VS Code", "Unreal Engine", "Figma", "Postman", "Azure DevOps"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Space_Grotesk']">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t('skills.title')}
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 transform hover:scale-105 group"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <span className="group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </span>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 transition-colors text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            {t('skills.proficiency')}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">90%</span>
              </div>
              <h4 className="font-semibold text-white mb-2">{t('skills.expert')}</h4>
              <p className="text-sm text-slate-400">Python, Azure, DevSecOps</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">80%</span>
              </div>
              <h4 className="font-semibold text-white mb-2">{t('skills.advanced')}</h4>
              <p className="text-sm text-slate-400">React, Terraform, Machine Learning</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">70%</span>
              </div>
              <h4 className="font-semibold text-white mb-2">{t('skills.proficient')}</h4>
              <p className="text-sm text-slate-400">Unreal Engine, C#, Kubernetes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;