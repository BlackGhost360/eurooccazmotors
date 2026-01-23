
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Reservation from './pages/Reservation';
import Contact from './pages/Contact';
import GeminiAssistant from './components/GeminiAssistant';
import { useTranslation } from 'react-i18next';
import Service1 from './src/images/service1.avif?url';
import Service2 from './src/images/service2.avif?url';
import Service3 from './src/images/service3.avif?url';
import Service4 from './src/images/service4.jfif?url';

// Internal components using translations
const Services: React.FC = () => {
  const { t } = useTranslation();
  
  const servicesData = [
    { title: t('services.items.import.title'), desc: t('services.items.import.desc'), img: Service1 },
    { title: t('services.items.guarantee.title'), desc: t('services.items.guarantee.desc'), img: Service2 },
    { title: t('services.items.finance.title'), desc: t('services.items.finance.desc'), img: Service3 },
    { title: t('services.items.logistics.title'), desc: t('services.items.logistics.desc'), img: Service4 }
  ];

  return (
    <div className="pt-32 pb-20 container mx-auto px-4">
      <h1 className="text-5xl font-black mb-12 uppercase tracking-tighter text-center">
        {t('services.title').split(' ')[0]} <span className="text-blue-600">{t('services.title').split(' ')[1]}</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {servicesData.map((s, i) => (
          <div key={i} className="group relative overflow-hidden rounded-[2rem] h-80">
            <img src={s.img} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" alt={s.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent flex flex-col justify-end p-10">
              <h3 className="text-white text-2xl font-bold mb-2">{s.title}</h3>
              <p className="text-slate-300 text-sm">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <GeminiAssistant />
    </Router>
  );
};

export default App;
