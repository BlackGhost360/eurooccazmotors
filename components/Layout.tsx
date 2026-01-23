
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Info, Shield, Facebook, Instagram, Twitter, Linkedin, Globe, MapPin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '../src/images/logo.png?url';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const isNavbarSolid = !isHomePage || isScrolled;

  const navLinks = [
    { name: t('nav.home'), path: '/', icon: <Info size={18} /> },
    { name: t('nav.cars'), path: '/cars', icon: <Info size={18} /> },
    { name: t('nav.services'), path: '/services', icon: <Shield size={18} /> },
    { name: t('nav.contact'), path: '/contact', icon: <Phone size={18} /> },
  ];

  const languages = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isNavbarSolid ? 'glass-effect shadow-md py-3' : 'bg-transparent py-5 text-white'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="EuroOccazMotors Logo" 
              className={`h-12 md:h-14 w-auto transition-all duration-300 group-hover:scale-105 ${!isNavbarSolid ? 'brightness-0 invert' : ''}`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`font-semibold text-sm transition-all hover:text-blue-600 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full ${
                  location.pathname === link.path 
                  ? 'text-blue-600 after:w-full' 
                  : isNavbarSolid ? 'text-slate-700' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Language Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full border transition-all ${isNavbarSolid ? 'border-slate-200 text-slate-700 hover:bg-slate-50' : 'border-white/20 text-white hover:bg-white/10'}`}
              >
                <Globe size={16} />
                <span>{i18n.language.toUpperCase()}</span>
              </button>
              
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 text-slate-900 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full flex items-center gap-3 px-5 py-3 text-sm hover:bg-blue-50 transition-colors ${i18n.language === lang.code ? 'text-blue-600 font-bold bg-blue-50/50' : ''}`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/reservation" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-full text-sm font-black uppercase tracking-wider transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-blue-600/20"
            >
              <Calendar size={16} />
              {t('nav.book')}
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
             <button 
                onClick={() => changeLanguage(i18n.language === 'fr' ? 'en' : i18n.language === 'en' ? 'it' : 'fr')}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${isNavbarSolid ? 'border-slate-300 text-slate-900' : 'border-white/30 text-white'}`}
              >
                {i18n.language.toUpperCase()}
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${isNavbarSolid ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 w-full h-screen bg-white z-[60] flex flex-col animate-in slide-in-from-right duration-300">
            <div className="container mx-auto px-4 flex justify-between items-center h-20 border-b">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <img src={logo} alt="Logo" className="h-10 w-auto" />
              </Link>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-slate-900 bg-slate-100 rounded-lg">
                <X size={28} />
              </button>
            </div>
            
            <nav className="flex-grow flex flex-col p-8 gap-6 overflow-y-auto">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-5 p-4 rounded-2xl text-xl font-black uppercase tracking-tighter transition-all ${
                    location.pathname === link.path ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <span className={location.pathname === link.path ? 'text-white' : 'text-blue-600'}>{link.icon}</span>
                  {link.name}
                </Link>
              ))}
              
              <div className="mt-4 pt-8 border-t flex flex-col gap-4">
                <span className="text-xs font-black uppercase tracking-widest text-slate-400">{t('common.lang')}</span>
                <div className="grid grid-cols-3 gap-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`flex flex-col items-center gap-1 p-4 rounded-2xl border-2 transition-all ${i18n.language === lang.code ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-100 text-slate-600'}`}
                    >
                      <span className="text-2xl">{lang.flag}</span>
                      <span className="text-[10px] font-bold uppercase">{lang.code}</span>
                    </button>
                  ))}
                </div>
              </div>

              <Link 
                to="/reservation" 
                onClick={() => setIsMenuOpen(false)}
                className="mt-auto bg-slate-900 text-white p-6 rounded-2xl text-center text-lg font-black uppercase tracking-widest shadow-xl shadow-slate-900/20"
              >
                {t('nav.book')}
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="space-y-6">
              <Link to="/" className="inline-block">
                <img src={logo} alt="Logo" className="h-16 w-auto brightness-0 invert" />
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                {t('footer.desc')}
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 transition-all"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 transition-all"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 transition-all"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 transition-all"><Linkedin size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-8 text-blue-500">Navigation</h4>
              <ul className="space-y-4 text-slate-400 text-sm font-medium">
                <li><Link to="/" className="hover:text-white transition-colors">{t('nav.home')}</Link></li>
                <li><Link to="/cars" className="hover:text-white transition-colors">{t('nav.cars')}</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">{t('nav.services')}</Link></li>
                <li><Link to="/reservation" className="hover:text-white transition-colors">{t('nav.book')}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-8 text-blue-500">{t('nav.contact')}</h4>
              <ul className="space-y-6 text-slate-400 text-sm">
                <li className="flex items-start gap-4">
                  <MapPin className="text-slate-600 mt-1 flex-shrink-0" size={18} />
                  <span>12 Avenue des Champs-Élysées, Paris, France</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="text-slate-600 flex-shrink-0" size={18} />
                  <span>+33 1 23 45 67 89</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="text-slate-600 flex-shrink-0" size={18} />
                  <span>contact@eurooccazmotors.eu</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-8 text-blue-500">{t('footer.newsletter')}</h4>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{t('footer.newsletterDesc')}</p>
              <form className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder={t('footer.emailPlaceholder')} 
                  className="bg-slate-800 border-none rounded-xl px-5 py-3 text-sm w-full focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
                <button className="bg-blue-600 px-5 py-3 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-blue-700 transition-all">{t('footer.subscribe')}</button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] font-bold uppercase tracking-widest gap-6">
            <p>© 2026 EuroOccazMotors. {t('footer.rights')}</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">{t('footer.legal')}</a>
              <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-white transition-colors">{t('footer.cookies')}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
