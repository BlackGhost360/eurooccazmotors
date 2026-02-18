import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Fuel, Gauge, Settings2, CalendarDays } from 'lucide-react';
import { Car } from '../types';
import { useTranslation } from 'react-i18next';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const { t } = useTranslation();
  const location = useLocation();

  // 🔹 Langue depuis l'URL (SPA-safe)
  const currentLang = location.pathname.split('/')[1] || 'fr';

return (

  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
    
    {/* IMAGE */}
    <div className="relative h-56 sm:h-64 overflow-hidden">
      <img
        src={car.image}
        alt={`${car.brand} ${car.model}`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
        {car.category}
      </div>

      {car.featured && (
        <div className="absolute top-4 right-4 bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
          Premium Choice
        </div>
      )}
    </div>

    {/* CONTENT */}
    <div className="p-4 sm:p-6">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">

        <div className="min-w-0">
          <h3 className="text-lg sm:text-lg font-bold text-slate-900 truncate">
            {car.brand} {car.model}
          </h3>
          <p className="text-slate-500 text-sm">{car.year}</p>
        </div>

        {/* PRICE SECTION */}
        <div className="text-left sm:text-right">
          <p className="text-sm text-slate-400 line-through">
            {(car.price * 1.2).toLocaleString()} €
          </p>
          <p className="text-xl sm:text-2xl font-black text-blue-600">
            {car.price.toLocaleString()} €
          </p>
        </div>

      </div>

      {/* DETAILS */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <Gauge size={16} className="text-blue-500" />
          <span>{car.mileage.toLocaleString()} km</span>
        </div>

        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <Fuel size={16} className="text-blue-500" />
          <span>{car.fuel}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <Settings2 size={16} className="text-blue-500" />
          <span>{car.transmission}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <CalendarDays size={16} className="text-blue-500" />
          <span>{t('common.available')}</span>
        </div>
      </div>

      {/* CTA */}
      <Link
        to={`/${currentLang}/reservation?carId=${car.id}`}
        className="block w-full text-center py-3 bg-slate-900 hover:bg-blue-600 text-white font-bold rounded-xl transition-colors text-sm sm:text-base"
      >
        {t('common.reserve')}
      </Link>

    </div>
  </div>
);

};

export default CarCard;
