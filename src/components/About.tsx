import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Space_Grotesk']">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t('about.title')}
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image/Avatar */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center">
                <div className="w-72 h-72 rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center">
                  <div className="text-6xl font-bold text-blue-400">GRB</div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{t('about.education')}</h3>
                </div>
                <p className="text-slate-300 mb-2">
                  <strong>{t('about.degree')}</strong> - {t('about.university')}
                </p>
                <p className="text-slate-400 text-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {t('about.period')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-semibold text-white">{t('about.focusAreas')}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-500/30">
                    {t('about.cybersecurity')}
                  </Badge>
                  <Badge variant="secondary" className="bg-cyan-600/20 text-cyan-300 border-cyan-500/30">
                    {t('about.devsecops')}
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30">
                    {t('about.cloud')}
                  </Badge>
                  <Badge variant="secondary" className="bg-indigo-600/20 text-indigo-300 border-indigo-500/30">
                    {t('about.unreal')}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-invert">
              <p className="text-slate-300 leading-relaxed">
                {t('about.description1')}
              </p>
              <p className="text-slate-300 leading-relaxed mt-4">
                {t('about.description2')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;