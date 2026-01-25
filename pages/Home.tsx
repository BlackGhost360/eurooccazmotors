import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Play, Star, CheckCircle2, ArrowRight } from 'lucide-react';
import { CARS, STEPS, SERVICES } from '../constants';
import CarCard from '../components/CarCard';
import { useTranslation } from 'react-i18next';
import { useMetaTags } from '../hooks/useMetaTags';
import BannerBack from '../src/images/homeBanner.avif?url';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  // 🔹 Langue depuis l'URL (SPA-safe)
  const currentLang = location.pathname.split('/')[1] || 'fr';

  // 🔹 SEO Meta Tags
  useMetaTags({
    title: t('seo.home.title'),
    description: t('seo.home.description'),
    keywords: t('seo.home.keywords'),
    ogImage: 'https://eurooccazmotors.com/og-image.jpg',
    ogType: 'website'
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={BannerBack}
            alt="Euro Occaz Motors - Importation automobile"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className={`relative z-10 container mx-auto px-4 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Star size={16} className="fill-blue-400" />
            <span>{t('hero.badge')}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
            {t('hero.title')} <span className="text-blue-500">{t('hero.titleAccent')}</span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={`/${currentLang}/cars`}
              className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg"
            >
              {t('hero.ctaCatalogue')}
              <ChevronRight />
            </Link>

            <Link
              to={`/${currentLang}/services`}
              className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-2xl font-bold text-lg flex items-center justify-center gap-2"
            >
              <Play size={20} fill="white" />
              {t('hero.ctaServices')}
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-5xl font-black mb-16 uppercase tracking-tighter">
            {t('home.whyTitle')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {SERVICES.map((_, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6">
                  <CheckCircle2 size={28} />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {t(`services.items.${['import','guarantee','finance','logistics'][idx]}.title`)}
                </h3>

                <p className="text-slate-500 text-sm">
                  {t(`services.items.${['import','guarantee','finance','logistics'][idx]}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CARS ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter">
                {t('home.recentArrivals')}
              </h2>
              <p className="text-slate-500">{t('home.recentSubtitle')}</p>
            </div>

            <Link
              to={`/${currentLang}/cars`}
              className="flex items-center gap-2 text-blue-600 font-bold"
            >
              {t('home.viewAll')} <ArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CARS.filter(c => c.featured).map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 rounded-[3rem] p-20 text-center shadow-2xl">
            <h2 className="text-5xl font-black text-white mb-8 uppercase tracking-tighter">
              {t('home.ctaTitle')}
            </h2>

            <p className="text-blue-100 mb-12 max-w-2xl mx-auto">
              {t('home.ctaSubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to={`/${currentLang}/reservation`}
                className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl"
              >
                {t('home.ctaBook')}
              </Link>

              <Link
                to={`/${currentLang}/contact`}
                className="bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-xl"
              >
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
