
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Send, MessageCircle, HelpCircle, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1500);
  };

  const contactInfos = [
    { icon: <MapPin className="text-blue-500" />, label: t('contact.infoAddressLabel'), value: t('contact.info.address') },
    { icon: <Phone className="text-blue-500" />, label: t('contact.infoPhoneLabel'), value: t('contact.info.phone') },
    { icon: <Mail className="text-blue-500" />, label: t('contact.infoEmailLabel'), value: t('contact.info.email') },
    { icon: <Clock className="text-blue-500" />, label: t('contact.infoHoursLabel'), value: t('contact.info.hours') },
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-slate-900 text-white py-20 mb-[-100px]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
            {t('contact.title')} <span className="text-blue-500">{t('contact.titleAccent')}</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Content Card */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Column: Info */}
          <div className="lg:w-2/5 bg-slate-900 p-12 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
                <MessageCircle size={28} className="text-blue-500" />
                {t('contact.infoSection')}
              </h2>

              <div className="space-y-8 mb-12">
                {contactInfos.map((info, idx) => (
                  <div key={idx} className="flex gap-5 group">
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">{info.label}</p>
                      <p className="font-medium text-slate-100">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 mb-10">
                <div className="flex items-center gap-3 mb-3 text-green-400">
                  <ShieldCheck size={20} />
                  <span className="font-bold text-sm uppercase tracking-wider">{t('contact.info.emergency')}</span>
                </div>
                <p className="text-slate-400 text-sm">{t('contact.emergencyHelp')}</p>
              </div>

              {/* Socials shortcut */}
              <div className="flex gap-4">
                <a href="#" className="flex-1 py-3 px-4 bg-slate-800 hover:bg-slate-700 text-center rounded-xl text-sm font-bold transition-all">{t('contact.whatsapp')}</a>
                <a href="#" className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-center rounded-xl text-sm font-bold transition-all">{t('contact.skype')}</a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:w-3/5 p-8 md:p-16">
            {isSent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send size={40} />
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">{t('contact.form.success')}</h3>
                <p className="text-slate-500 mb-8">{t('contact.successMessage')}</p>
                <button 
                  onClick={() => setIsSent(false)}
                  className="px-10 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-colors"
                >
                  {t('contact.anotherMessage')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">{t('contact.form.name')}</label>
                    <input required type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder={t('contact.placeholderName')} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">{t('contact.form.email')}</label>
                    <input required type="email" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder={t('contact.placeholderEmail')} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">{t('contact.form.phone')}</label>
                    <input required type="tel" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" placeholder={t('contact.placeholderPhone')} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">{t('contact.form.subject')}</label>
                    <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all appearance-none cursor-pointer">
                      <option>{t('contact.form.subjects.buy')}</option>
                      <option>{t('contact.form.subjects.sell')}</option>
                      <option>{t('contact.form.subjects.import')}</option>
                      <option>{t('contact.form.subjects.sav')}</option>
                      <option>{t('contact.form.subjects.other')}</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">{t('contact.form.message')}</label>
                  <textarea required rows={5} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none" placeholder={t('contact.placeholderDetailsMessage')}></textarea>
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-[1.25rem] font-black text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-600/20 disabled:opacity-70 group"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  {isSubmitting ? "Envoi en cours..." : t('contact.form.submit')}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Preview Section */}
        <section className="mt-20 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <HelpCircle size={32} className="text-blue-600" />
            <h2 className="text-3xl font-black uppercase tracking-tighter">{t('contact.faq.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/50 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-slate-900">{t('contact.faq.q1')}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{t('contact.faq.a1')}</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200/50 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-slate-900">{t('contact.faq.q2')}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{t('contact.faq.a2')}</p>
            </div>
          </div>
        </section>
      </div>

      {/* Map Placeholder */}
      <section className="mt-20 h-[400px] w-full relative grayscale hover:grayscale-0 transition-all duration-1000">
        <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-50"
            alt="Map"
          />
          <div className="absolute z-10 bg-white p-4 rounded-2xl shadow-xl flex flex-col items-center gap-2 max-w-xs text-center">
            <MapPin size={32} className="text-blue-600" />
            <p className="font-bold text-sm">{t('contact.mapTitle')}</p>
            <p className="text-xs text-slate-500">{t('contact.mapAddress')}</p>
            <button className="mt-2 text-blue-600 font-bold text-xs hover:underline">{t('contact.openMap')}</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
