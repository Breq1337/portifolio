import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white flex items-center gap-2"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">
        {language === 'pt' ? 'EN' : 'PT'}
      </span>
    </Button>
  );
};

export default LanguageToggle;