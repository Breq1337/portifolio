import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navigation
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.skills': 'Habilidades',
    'nav.timeline': 'Cronologia',
    'nav.contact': 'Contato',

    // Hero Section
    'hero.typing': "Olá, eu sou Guilherme Rocha Bianchini — Engenheiro de Software e Desenvolvedor",
    'hero.subtitle': 'Estudante de Engenharia de Software na FIAP • Foco em arquitetura e desenvolvimento de software',
    'hero.description': 'Gosto de aprender, resolver problemas e trabalhar em equipe. Tenho uma base sólida em desenvolvimento e interesse em cloud e cibersegurança, e busco um estágio onde eu possa contribuir com ideias, código e dedicação.',
    'hero.viewProjects': 'Ver Projetos',
    'hero.contactMe': 'Fale Comigo',

    // About Section
    'about.title': 'Sobre Mim',
    'about.subtitle': 'Construindo o futuro da segurança digital e infraestrutura em nuvem',
    'about.education': 'Educação',
    'about.degree': 'Engenharia de Software',
    'about.university': 'FIAP São Paulo',
    'about.period': '3º Ano • 2023-2026 • Presencial',
    'about.focusAreas': 'Áreas de Foco',
    'about.cybersecurity': 'Cibersegurança',
    'about.devsecops': 'DevSecOps',
    'about.cloud': 'Infraestrutura em Nuvem',
    'about.unreal': 'Unreal Engine',
    'about.description1': 'Como um estudante apaixonado de Engenharia de Software na FIAP, me especializo em criar soluções seguras e escaláveis que conectam infraestrutura, inteligência artificial e impacto social.',
    'about.description2': 'Minha expertise abrange desde forense digital e cibersegurança até arquiteturas de nuvem de ponta e experiências 3D imersivas. Acredito no poder da tecnologia para resolver problemas do mundo real mantendo os mais altos padrões de segurança.',

    // Projects Section
    'projects.title': 'Projetos em Destaque',
    'projects.subtitle': 'Soluções do mundo real combinando segurança, infraestrutura e inovação',
    'projects.fyora.title': 'Fyora',
    'projects.fyora.subtitle': 'App de Detecção de Jogo Responsável',
    'projects.fyora.description': 'Aplicativo móvel alimentado por IA que detecta e previne comportamentos problemáticos de jogo usando algoritmos de aprendizado de máquina e análise comportamental.',
    'projects.fyora.category': 'IA Ética + Mobile',
    'projects.global.title': 'Global Solutions',
    'projects.global.subtitle': 'Gestão de Cenário de Falha Energética',
    'projects.global.description': 'Solução abrangente de infraestrutura em nuvem para gerenciar falhas na rede elétrica usando serviços Azure, failover DNS automatizado e infraestrutura como código.',
    'projects.global.category': 'Nuvem + Infraestrutura',
    'projects.devsecops.title': 'Pipeline DevSecOps',
    'projects.devsecops.subtitle': 'Segurança e Deploy Automatizados',
    'projects.devsecops.description': 'Pipeline CI/CD completo com verificação de segurança integrada, testes automatizados e anonimização de dados para aplicações Node.js.',
    'projects.devsecops.category': 'DevSecOps + Automação',
    'projects.portfolio3d.title': 'Portfólio 3D',
    'projects.portfolio3d.subtitle': 'Cena Cinemática Unreal Engine',
    'projects.portfolio3d.description': 'Experiência de portfólio 3D imersiva mostrando iluminação avançada, sistemas de partículas e elementos interativos construídos com Unreal Engine 5.',
    'projects.portfolio3d.category': 'Desenvolvimento 3D + Jogos',
    'projects.code': 'Código',
    'projects.demo': 'Demo',
    'projects.viewAll': 'Ver Todos os Projetos no GitHub',

    // Skills Section
    'skills.title': 'Habilidades & Expertise',
    'skills.subtitle': 'Um conjunto abrangente de ferramentas para desenvolvimento moderno de software e segurança',
    'skills.languages': 'Linguagens',
    'skills.cloudInfra': 'Nuvem & Infraestrutura',
    'skills.frontend': 'Desenvolvimento Frontend',
    'skills.aiData': 'IA & Dados',
    'skills.security': 'Segurança & DevOps',
    'skills.tools': 'Ferramentas & Plataformas',
    'skills.proficiency': 'Níveis de Proficiência',
    'skills.expert': 'Especialista',
    'skills.advanced': 'Avançado',
    'skills.proficient': 'Proficiente',

    // Timeline Section
    'timeline.title': 'Educação & Certificações',
    'timeline.subtitle': 'Jornada de aprendizado contínuo e desenvolvimento profissional',
    'timeline.education.title': 'Engenharia de Software',
    'timeline.education.subtitle': 'FIAP - São Paulo',
    'timeline.education.description': 'Bacharelado em Engenharia de Software com foco em cibersegurança, computação em nuvem e práticas modernas de desenvolvimento. Atualmente no 3º ano com excelente desempenho acadêmico.',
    'timeline.azure.title': 'Azure Fundamentals',
    'timeline.azure.subtitle': 'Certificação Microsoft',
    'timeline.azure.description': 'Compreensão abrangente dos serviços de nuvem Azure, segurança, privacidade, conformidade e confiança. Cobre serviços principais do Azure e conceitos gerais de computação em nuvem.',
    'timeline.devops.title': 'DevOps Foundation',
    'timeline.devops.subtitle': 'Certificação Profissional',
    'timeline.devops.description': 'Conhecimento avançado em práticas DevOps, pipelines CI/CD, infraestrutura como código e metodologias de teste automatizado.',
    'timeline.security.title': 'Especialista em Cibersegurança',
    'timeline.security.subtitle': 'Equivalente Security+',
    'timeline.security.description': 'Treinamento especializado em forense digital, teste de penetração, auditoria de segurança e procedimentos de resposta a incidentes.',
    'timeline.unreal.title': 'Desenvolvimento Unreal Engine',
    'timeline.unreal.subtitle': 'Certificação Epic Games',
    'timeline.unreal.description': 'Desenvolvimento 3D avançado, programação blueprint, integração C++ e técnicas de renderização cinemática no Unreal Engine 5.',
    'timeline.inProgress': 'Em Andamento',
    'timeline.completed': 'Concluído',
    'timeline.yearsStudy': 'Anos de Estudo',
    'timeline.certifications': 'Certificações',
    'timeline.projectsCompleted': 'Projetos Concluídos',

    // Contact Section
    'contact.title': 'Vamos Nos Conectar',
    'contact.subtitle': 'Pronto para colaborar no seu próximo projeto ou discutir oportunidades',
    'contact.getInTouch': 'Entre em Contato',
    'contact.email': 'Email',
    'contact.phone': 'Telefone',
    'contact.location': 'Localização',
    'contact.locationValue': 'São Paulo, Brasil',
    'contact.connectDownload': 'Conectar & Baixar',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',
    'contact.downloadCV': 'Baixar CV (PDF)',
    'contact.availableWork': 'Disponível para Trabalho',
    'contact.availability': 'Aberto para estágios, projetos freelance e oportunidades de tempo integral em cibersegurança e desenvolvimento em nuvem.',
    'contact.sendMessage': 'Enviar Mensagem',
    'contact.name': 'Nome',
    'contact.nameRequired': 'Nome *',
    'contact.namePlaceholder': 'Seu nome completo',
    'contact.emailRequired': 'Email *',
    'contact.emailPlaceholder': 'seu.email@exemplo.com',
    'contact.subject': 'Assunto',
    'contact.subjectPlaceholder': 'Sobre o que é?',
    'contact.message': 'Mensagem',
    'contact.messageRequired': 'Mensagem *',
    'contact.messagePlaceholder': 'Conte-me sobre seu projeto ou oportunidade...',
    'contact.send': 'Enviar Mensagem',
    'contact.footer': '© 2025 Guilherme Rocha Bianchini — Construído com paixão e tecnologia.',
    'contact.poweredBy': 'Desenvolvido com',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.timeline': 'Timeline',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.typing': "Hello, I'm Guilherme Rocha Bianchini — Software Engineer and Developer",
    'hero.subtitle': 'Software Engineering Student at FIAP • Cybersecurity & DevSecOps Specialist',
    'hero.description': 'Passionate about building secure, scalable solutions that combine cloud infrastructure, AI innovation, and social impact through cutting-edge technology.',
    'hero.viewProjects': 'View Projects',
    'hero.contactMe': 'Contact Me',

    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Crafting the future of digital security and cloud infrastructure',
    'about.education': 'Education',
    'about.degree': 'Software Engineering',
    'about.university': 'FIAP São Paulo',
    'about.period': '3rd Year • 2023-2026 • On-campus',
    'about.focusAreas': 'Focus Areas',
    'about.cybersecurity': 'Cybersecurity',
    'about.devsecops': 'DevSecOps',
    'about.cloud': 'Cloud Infrastructure',
    'about.unreal': 'Unreal Engine',
    'about.description1': 'As a passionate Software Engineering student at FIAP, I specialize in creating secure, scalable solutions that bridge the gap between infrastructure, artificial intelligence, and social impact.',
    'about.description2': 'My expertise spans from digital forensics and cybersecurity to cutting-edge cloud architectures and immersive 3D experiences. I believe in technology\'s power to solve real-world problems while maintaining the highest security standards.',

    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Real-world solutions combining security, infrastructure, and innovation',
    'projects.fyora.title': 'Fyora',
    'projects.fyora.subtitle': 'Responsible Gambling Detection App',
    'projects.fyora.description': 'AI-powered mobile application that detects and prevents problematic gambling behaviors using machine learning algorithms and behavioral analysis.',
    'projects.fyora.category': 'Ethical AI + Mobile',
    'projects.global.title': 'Global Solutions',
    'projects.global.subtitle': 'Energy Failure Scenario Management',
    'projects.global.description': 'Comprehensive cloud infrastructure solution for managing energy grid failures using Azure services, automated DNS failover, and infrastructure as code.',
    'projects.global.category': 'Cloud + Infrastructure',
    'projects.devsecops.title': 'DevSecOps Pipeline',
    'projects.devsecops.subtitle': 'Automated Security & Deployment',
    'projects.devsecops.description': 'Complete CI/CD pipeline with integrated security scanning, automated testing, and data anonymization for Node.js applications.',
    'projects.devsecops.category': 'DevSecOps + Automation',
    'projects.portfolio3d.title': '3D Portfolio',
    'projects.portfolio3d.subtitle': 'Unreal Engine Cinematic Scene',
    'projects.portfolio3d.description': 'Immersive 3D portfolio experience showcasing advanced lighting, particle systems, and interactive elements built with Unreal Engine 5.',
    'projects.portfolio3d.category': '3D + Game Development',
    'projects.code': 'Code',
    'projects.demo': 'Demo',
    'projects.viewAll': 'View All Projects on GitHub',

    // Skills Section
    'skills.title': 'Skills & Expertise',
    'skills.subtitle': 'A comprehensive toolkit for modern software development and security',
    'skills.languages': 'Languages',
    'skills.cloudInfra': 'Cloud & Infrastructure',
    'skills.frontend': 'Frontend Development',
    'skills.aiData': 'AI & Data',
    'skills.security': 'Security & DevOps',
    'skills.tools': 'Tools & Platforms',
    'skills.proficiency': 'Proficiency Levels',
    'skills.expert': 'Expert',
    'skills.advanced': 'Advanced',
    'skills.proficient': 'Proficient',

    // Timeline Section
    'timeline.title': 'Education & Certifications',
    'timeline.subtitle': 'Continuous learning and professional development journey',
    'timeline.education.title': 'Software Engineering',
    'timeline.education.subtitle': 'FIAP - São Paulo',
    'timeline.education.description': 'Bachelor\'s degree in Software Engineering with focus on cybersecurity, cloud computing, and modern development practices. Currently in 3rd year with excellent academic performance.',
    'timeline.azure.title': 'Azure Fundamentals',
    'timeline.azure.subtitle': 'Microsoft Certification',
    'timeline.azure.description': 'Comprehensive understanding of Azure cloud services, security, privacy, compliance, and trust. Covers core Azure services and general cloud computing concepts.',
    'timeline.devops.title': 'DevOps Foundation',
    'timeline.devops.subtitle': 'Professional Certification',
    'timeline.devops.description': 'Advanced knowledge in DevOps practices, CI/CD pipelines, infrastructure as code, and automated testing methodologies.',
    'timeline.security.title': 'Cybersecurity Specialist',
    'timeline.security.subtitle': 'Security+ Equivalent',
    'timeline.security.description': 'Specialized training in digital forensics, penetration testing, security auditing, and incident response procedures.',
    'timeline.unreal.title': 'Unreal Engine Development',
    'timeline.unreal.subtitle': 'Epic Games Certification',
    'timeline.unreal.description': 'Advanced 3D development, blueprint programming, C++ integration, and cinematic rendering techniques in Unreal Engine 5.',
    'timeline.inProgress': 'In Progress',
    'timeline.completed': 'Completed',
    'timeline.yearsStudy': 'Years of Study',
    'timeline.certifications': 'Certifications',
    'timeline.projectsCompleted': 'Projects Completed',

    // Contact Section
    'contact.title': 'Let\'s Connect',
    'contact.subtitle': 'Ready to collaborate on your next project or discuss opportunities',
    'contact.getInTouch': 'Get in Touch',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.locationValue': 'São Paulo, Brazil',
    'contact.connectDownload': 'Connect & Download',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',
    'contact.downloadCV': 'Download CV (PDF)',
    'contact.availableWork': 'Available for Work',
    'contact.availability': 'Open to internships, freelance projects, and full-time opportunities in cybersecurity and cloud development.',
    'contact.sendMessage': 'Send Message',
    'contact.name': 'Name',
    'contact.nameRequired': 'Name *',
    'contact.namePlaceholder': 'Your full name',
    'contact.emailRequired': 'Email *',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': 'What\'s this about?',
    'contact.message': 'Message',
    'contact.messageRequired': 'Message *',
    'contact.messagePlaceholder': 'Tell me about your project or opportunity...',
    'contact.send': 'Send Message',
    'contact.footer': '© 2025 Guilherme Rocha Bianchini — Built with passion and technology.',
    'contact.poweredBy': 'Powered by',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};