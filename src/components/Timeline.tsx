import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Award, GraduationCap, FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Timeline = () => {
  const { t } = useLanguage();

  const timelineItems = [
    {
      year: "2023 - 2026",
      title: t('timeline.education.title'),
      subtitle: t('timeline.education.subtitle'),
      description: t('timeline.education.description'),
      type: "education",
      icon: <GraduationCap className="w-5 h-5" />,
      status: t('timeline.inProgress')
    },
    {
      year: "2024",
      title: t('timeline.azure.title'),
      subtitle: t('timeline.azure.subtitle'),
      description: t('timeline.azure.description'),
      type: "certification",
      icon: <FileText className="w-5 h-5" />,
      status: t('timeline.completed')
    },
    {
      year: "2024",
      title: t('timeline.devops.title'),
      subtitle: t('timeline.devops.subtitle'),
      description: t('timeline.devops.description'),
      type: "certification",
      icon: <Award className="w-5 h-5" />,
      status: t('timeline.completed')
    },
    {
      year: "2024",
      title: t('timeline.security.title'),
      subtitle: t('timeline.security.subtitle'),
      description: t('timeline.security.description'),
      type: "certification",
      icon: <FileText className="w-5 h-5" />,
      status: t('timeline.completed')
    },
    {
      year: "2023",
      title: t('timeline.unreal.title'),
      subtitle: t('timeline.unreal.subtitle'),
      description: t('timeline.unreal.description'),
      type: "certification",
      icon: <Award className="w-5 h-5" />,
      status: t('timeline.completed')
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Space_Grotesk']">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t('timeline.title')}
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t('timeline.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500"></div>
            
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Timeline dot */}
                  <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 ${
                    item.type === 'education' 
                      ? 'bg-blue-600 border-blue-400' 
                      : 'bg-cyan-600 border-cyan-400'
                  }`}>
                    {item.icon}
                  </div>
                  
                  {/* Content card */}
                  <Card className="flex-1 bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <Calendar className="w-4 h-4 text-slate-400" />
                            <span className="text-sm text-slate-400 font-medium">{item.year}</span>
                            <Badge 
                              variant={item.status === t('timeline.completed') ? 'default' : 'secondary'}
                              className={
                                item.status === t('timeline.completed')
                                  ? 'bg-green-600/20 text-green-400 border-green-500/30' 
                                  : 'bg-blue-600/20 text-blue-400 border-blue-500/30'
                              }
                            >
                              {item.status}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                          <p className="text-cyan-400 font-medium mb-3">{item.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
            <p className="text-slate-400">{t('timeline.yearsStudy')}</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
            <p className="text-slate-400">{t('timeline.certifications')}</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
            <p className="text-slate-400">{t('timeline.projectsCompleted')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;