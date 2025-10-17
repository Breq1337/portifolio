import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:guirochabianchini@gmail.com?subject=${subject}&body=${body}`;
  };

 const downloadCV = () => {
  const link = document.createElement('a');
  link.href = '/cv_breq.pdf';
  link.download = 'Curriculo_Guilherme_Breq.pdf';
  link.click();
};

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Space_Grotesk']">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t('contact.title')}
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Mail className="w-6 h-6 text-blue-400" />
                  {t('contact.getInTouch')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-blue-600/20 text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium">{t('contact.email')}</p>
                    <p className="text-slate-400">guirochabianchini@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-cyan-600/20 text-cyan-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium">{t('contact.phone')}</p>
                    <p className="text-slate-400">+55 (34)  9919-4509</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-purple-600/20 text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium">{t('contact.location')}</p>
                    <p className="text-slate-400">{t('contact.locationValue')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links & CV */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-white">{t('contact.connectDownload')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    variant="outline" 
                    className="border-blue-500/30 text-blue-400 hover:bg-blue-400 hover:text-slate-900 flex items-center gap-2"
                    onClick={() => window.open('https://github.com/Breqsz', '_blank')}
                  >
                    <Github className="w-4 h-4" />
                    {t('contact.github')}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 flex items-center gap-2"
                    onClick={() => window.open('https://www.linkedin.com/in/guilhermebreq/', '_blank')}
                  >
                    <Linkedin className="w-4 h-4" />
                    {t('contact.linkedin')}
                  </Button>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white flex items-center gap-2"
                  onClick={downloadCV}
                >
                  <Download className="w-4 h-4" />
                  {t('contact.downloadCV')}
                </Button>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-500/30">
                    {t('contact.availableWork')}
                  </Badge>
                </div>
                <p className="text-slate-300 text-sm">
                  {t('contact.availability')}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-3">
                <Send className="w-6 h-6 text-cyan-400" />
                {t('contact.sendMessage')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {t('contact.nameRequired')}
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400"
                      placeholder={t('contact.namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {t('contact.emailRequired')}
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400"
                      placeholder={t('contact.emailPlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {t('contact.subject')}
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400"
                    placeholder={t('contact.subjectPlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {t('contact.messageRequired')}
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400 resize-none"
                    placeholder={t('contact.messagePlaceholder')}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 text-lg font-medium"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {t('contact.send')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400">
            {t('contact.footer')}
          </p>
          <div className="flex justify-center items-center gap-4 mt-4">
            <span className="text-slate-500 text-sm">{t('contact.poweredBy')}</span>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-blue-500/30 text-blue-400 text-xs">
                React
              </Badge>
              <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 text-xs">
                Tailwind
              </Badge>
              <Badge variant="outline" className="border-purple-500/30 text-purple-400 text-xs">
                TypeScript
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;