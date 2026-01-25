import React, { useState } from 'react';
import {
  MapPin, Phone, Mail, Clock, ShieldCheck,
  Send, MessageCircle, HelpCircle, Loader2
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useMetaTags } from '../hooks/useMetaTags';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  // Meta tags SEO
  useMetaTags({
    title: t('seo.contact.title'),
    description: t('seo.contact.description'),
    keywords: t('seo.contact.keywords'),
    ogType: 'website'
  });

  const [formData, setFormData] = useState({
    nom_prenom: '',
    email: '',
    telephone: '',
    objet: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorPopup, setErrorPopup] = useState('');


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setErrorPopup('');

  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/send-message`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-API-KEY': import.meta.env.VITE_API_KEY
        },
        body: JSON.stringify(formData)
      }
    );


    const data = await res.json();

    if (!res.ok || !data.success) {
      const error = await res.json();
      console.error(error.message);
      setErrorPopup(t('contact.form.errorSend'));
      setTimeout(() => setErrorPopup(''), 4000);
      return;
    }

    setIsSent(true);
    setFormData({
      nom_prenom: '',
      email: '',
      telephone: '',
      objet: '',
      message: ''
    });

  } catch (error) {
    setErrorPopup(t('contact.form.errorSend'));
    setTimeout(() => setErrorPopup(''), 4000);
  } finally {
    setIsSubmitting(false);
  }
};


  const contactInfos = [
    { icon: <MapPin className="text-blue-500" />, label: t('contact.infoAddressLabel'), value: t('contact.info.address') },
    { icon: <Phone className="text-blue-500" />, label: t('contact.infoPhoneLabel'), value: t('contact.info.phone') },
    { icon: <Mail className="text-blue-500" />, label: t('contact.infoEmailLabel'), value: t('contact.info.email') },
    { icon: <Clock className="text-blue-500" />, label: t('contact.infoHoursLabel'), value: t('contact.info.hours') },
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 mb-[-100px]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
            {t('contact.title')} <span className="text-blue-500">{t('contact.titleAccent')}</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">

          {/* LEFT */}
          <div className="lg:w-2/5 bg-slate-900 p-12 text-white">
            <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
              <MessageCircle size={28} className="text-blue-500" />
              {t('contact.infoSection')}
            </h2>

            <div className="space-y-8 mb-12">
              {contactInfos.map((info, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-bold uppercase mb-1">{info.label}</p>
                    <p className="text-slate-100">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
              <div className="flex items-center gap-3 mb-3 text-green-400">
                <ShieldCheck size={20} />
                <span className="font-bold text-sm uppercase">
                  {t('contact.info.emergency')}
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                {t('contact.emergencyHelp')}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:w-3/5 p-8 md:p-16">
            {isSent ? (
              <div className="text-center py-20">
                <Send size={48} className="mx-auto text-green-600 mb-6" />
                <h3 className="text-3xl font-black mb-4">
                  {t('contact.form.success')}
                </h3>
                <p className="text-slate-500 mb-8">
                  {t('contact.successMessage')}
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="px-10 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600"
                >
                  {t('contact.anotherMessage')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                <input name="nom_prenom" value={formData.nom_prenom} onChange={handleChange}
                  required placeholder={t('contact.placeholderName')}
                  className="w-full p-4 border rounded-2xl" />

                <input name="email" type="email" value={formData.email} onChange={handleChange}
                  required placeholder={t('contact.placeholderEmail')}
                  className="w-full p-4 border rounded-2xl" />

                <input name="telephone" value={formData.telephone} onChange={handleChange}
                  required placeholder={t('contact.placeholderPhone')}
                  className="w-full p-4 border rounded-2xl" />

                <select name="objet" value={formData.objet} onChange={handleChange}
                  required className="w-full p-4 border rounded-2xl">
                  <option value="">{t('contact.form.subject')}</option>
                  <option value="Achat d'un véhicule">{t('contact.form.subjects.buy')}</option>
                  <option value="Reprise de mon véhicule">{t('contact.form.subjects.sell')}</option>
                  <option value="Question sur l'importation">{t('contact.form.subjects.import')}</option>
                  <option value="Autre demande">{t('contact.form.subjects.sav')}</option>
                </select>

                <textarea name="message" value={formData.message} onChange={handleChange}
                  required rows={5}
                  placeholder={t('contact.placeholderDetailsMessage')}
                  className="w-full p-4 border rounded-2xl" />

                {errorPopup && (
                  <div className="animate-in slide-in-from-bottom fade-in duration-300
                                  mb-4 p-4 rounded-2xl border border-red-200
                                  bg-red-50 text-red-700 font-semibold text-sm
                                  flex items-center gap-3 shadow-lg">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    {errorPopup}
                  </div>
                )}


                <button disabled={isSubmitting}
                  className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black flex justify-center gap-3">
                  {isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
                  {isSubmitting ? t('contact.form.submiting') : t('contact.form.submit')}
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
