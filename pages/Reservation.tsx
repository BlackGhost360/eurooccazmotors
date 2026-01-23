
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle, ShieldCheck, CreditCard, Info, Loader2, AlertCircle } from 'lucide-react';
import { CARS } from '../constants';
import { useTranslation } from 'react-i18next';

const Reservation: React.FC = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const selectedCarId = searchParams.get('carId');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const selectedCar = CARS.find(c => c.id === selectedCarId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation: vérifier si une voiture est sélectionnée
    if (!selectedCar) {
      setErrorMessage(t('reservation.summary.noCar'));
      return;
    }
    
    // Réinitialiser le message d'erreur et procéder
    setErrorMessage(null);
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-40 pb-20 flex items-center justify-center px-4">
        <div className="bg-white p-12 rounded-[2rem] shadow-2xl text-center max-w-lg w-full">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={56} />
          </div>
          <h1 className="text-3xl font-black mb-4 uppercase tracking-tighter">{t('reservation.success.title')}</h1>
          <p className="text-slate-500 mb-8">{t('reservation.success.message')}</p>
          <button 
            onClick={() => window.location.hash = '#/'}
            className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-colors"
          >
            {t('reservation.success.backHome')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
              {t('reservation.title')} <span className="text-blue-500">{t('reservation.titleAccent')}</span>
            </h1>
            <p className="text-slate-500">{t('reservation.subtitle')}</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-slate-100">
                {errorMessage && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-4 animate-in slide-in-from-top">
                    <AlertCircle
                      className="text-red-600 flex-shrink-0 mt-0.5"
                      size={20}
                    />
                    <div>
                      <h4 className="font-bold text-red-900 mb-1">Attention</h4>
                      <p className="text-red-700 text-sm">{errorMessage}</p>
                    </div>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700">{t('reservation.form.firstName')}</label>
                    <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Jean" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700">{t('reservation.form.lastName')}</label>
                    <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Dupont" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700">{t('reservation.form.email')}</label>
                    <input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="jean@exemple.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700">{t('reservation.form.phone')}</label>
                    <input required type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="+33 6 00 00 00 00" />
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  <label className="block text-sm font-bold text-slate-700">{t('reservation.form.payment')}</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className="relative flex items-center gap-3 p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                      <input type="radio" name="payment" className="w-4 h-4 text-blue-600" defaultChecked />
                      <div className="flex flex-col">
                        <span className="font-bold text-sm">{t('reservation.form.cash')}</span>
                        <span className="text-xs text-slate-400">{t('reservation.form.cashSub')}</span>
                      </div>
                    </label>
                    <label className="relative flex items-center gap-3 p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                      <input type="radio" name="payment" className="w-4 h-4 text-blue-600" />
                      <div className="flex flex-col">
                        <span className="font-bold text-sm">{t('reservation.form.finance')}</span>
                        <span className="text-xs text-slate-400">{t('reservation.form.financeSub')}</span>
                      </div>
                    </label>
                    <label className="relative flex items-center gap-3 p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                      <input type="radio" name="payment" className="w-4 h-4 text-blue-600" />
                      <div className="flex flex-col">
                        <span className="font-bold text-sm">{t('reservation.form.loa')}</span>
                        <span className="text-xs text-slate-400">{t('reservation.form.loaSub')}</span>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  <label className="block text-sm font-bold text-slate-700">{t('reservation.form.message')}</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none" placeholder={t('reservation.form.messagePlaceholder')}></textarea>
                </div>

                <div className="flex items-start gap-3 mb-10">
                  <input required type="checkbox" id="rgpd" className="mt-1 w-4 h-4" />
                  <label htmlFor="rgpd" className="text-sm text-slate-500">{t('reservation.form.consent')}</label>
                </div>

                

                <button 
                  disabled={isSubmitting || !selectedCar}
                  className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" /> : <ShieldCheck />}
                  {isSubmitting ? t('reservation.form.processing') : t('reservation.form.submit')}
                </button>
              </form>
            </div>

            <div className="lg:w-1/3">
              {selectedCar ? (
                <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl sticky top-28">
                  <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter">{t('reservation.summary.title')}</h3>
                  <img src={selectedCar.image} className="w-full h-48 object-cover rounded-2xl mb-6" alt="Car" />
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-400">{t('reservation.summary.vehicle')}</span>
                      <span className="font-bold">{selectedCar.brand} {selectedCar.model}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-400">{t('reservation.summary.year')}</span>
                      <span className="font-bold">{selectedCar.year}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-400">{t('reservation.summary.mileage')}</span>
                      <span className="font-bold">{selectedCar.mileage.toLocaleString()} km</span>
                    </div>
                    <div className="flex justify-between pt-4">
                      <span className="text-xl font-bold">{t('reservation.summary.total')}</span>
                      <span className="text-2xl font-black text-blue-500">{selectedCar.price.toLocaleString()} €</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-blue-600 text-white p-8 rounded-[2rem] text-center">
                  <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Info size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{t('reservation.summary.noCar')}</h3>
                  <p className="text-blue-100 mb-6">{t('reservation.summary.noCarSub')}</p>
                  <button onClick={() => window.location.hash = '/cars'} className="w-full py-3 bg-white text-blue-600 rounded-xl font-bold">
                    {t('reservation.summary.backToCatalog')}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
