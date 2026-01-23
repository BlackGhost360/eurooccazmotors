
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Play, Star, CheckCircle2, ArrowRight } from 'lucide-react';
import { CARS, STEPS, SERVICES } from '../constants';
import CarCard from '../components/CarCard';
import { useTranslation } from 'react-i18next';
import BannerBack from '../src/images/homeBanner.avif?url';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={BannerBack} 
            alt="Hero background" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className={`relative z-10 container mx-auto px-4 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Star size={16} className="fill-blue-400" />
            <span>{t('hero.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight max-w-4xl mx-auto uppercase tracking-tighter">
            {t('hero.title')} <span className="text-blue-500">{t('hero.titleAccent')}</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/cars" 
              className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-600/30"
            >
              {t('hero.ctaCatalogue')}
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/services" 
              className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              <Play size={20} fill="white" />
              {t('hero.ctaServices')}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-1 h-12 rounded-full bg-gradient-to-b from-blue-600 to-transparent"></div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{t('home.whyTitle')}</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {SERVICES.map((service, idx) => (
              <div key={service.id} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {idx === 0 ? t('services.items.import.title') : 
                   idx === 1 ? t('services.items.guarantee.title') : 
                   idx === 2 ? t('services.items.finance.title') : 
                   t('services.items.logistics.title')}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {idx === 0 ? t('services.items.import.desc') : 
                   idx === 1 ? t('services.items.guarantee.desc') : 
                   idx === 2 ? t('services.items.finance.desc') : 
                   t('services.items.logistics.desc')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{t('home.recentArrivals')}</h2>
              <p className="text-slate-500">{t('home.recentSubtitle')}</p>
            </div>
            <Link to="/cars" className="flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
              {t('home.viewAll')} <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CARS.filter(c => c.featured).map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[160px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">{t('home.howTitle')}</h2>
            <p className="text-slate-400">{t('home.howSubtitle')}</p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Connecting line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 -z-10"></div>
            
            {STEPS.map((step, idx) => (
              <div key={idx} className="relative group text-center px-4">
                <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center text-4xl font-black text-blue-500 mx-auto mb-8 border-4 border-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {idx === 0 ? t('home.steps.step1.title') :
                   idx === 1 ? t('home.steps.step2.title') :
                   idx === 2 ? t('home.steps.step3.title') :
                   t('home.steps.step4.title')}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {idx === 0 ? t('home.steps.step1.desc') :
                   idx === 1 ? t('home.steps.step2.desc') :
                   idx === 2 ? t('home.steps.step3.desc') :
                   t('home.steps.step4.desc')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-600/40">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 relative z-10 uppercase tracking-tighter">{t('home.ctaTitle')}</h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto relative z-10">
              {t('home.ctaSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <Link to="/reservation" className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform">
                {t('home.ctaBook')}
              </Link>
              <Link to="/contact" className="bg-blue-700 text-white border border-blue-500 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-800 transition-colors">
                {t('home.ctaContact')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
