
import React, { useState, useMemo, useEffect } from 'react';
import { Search, SlidersHorizontal, Grid, List, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { CARS } from '../constants';
import CarCard from '../components/CarCard';
import { useTranslation } from 'react-i18next';
import { useMetaTags } from '../hooks/useMetaTags';

const ITEMS_PER_PAGE = 10;

const Cars: React.FC = () => {
  const { t } = useTranslation();
  const [filterBrand, setFilterBrand] = useState('All');
  const [filterType, setFilterType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState(350000);
  const [currentPage, setCurrentPage] = useState(1);

  // Meta tags SEO
  useMetaTags({
    title: t('seo.cars.title'),
    description: t('seo.cars.description'),
    keywords: t('seo.cars.keywords'),
    ogImage: 'https://eurooccazmotors.com/og-cars.jpg',
    ogType: 'website'
  });

  const brands = useMemo(() => ['All', ...new Set(CARS.map(c => c.brand))].sort(), []);
  const types = useMemo(() => ['All', ...new Set(CARS.map(c => c.category))].sort(), []);

  // Filter Logic
  const filteredCars = useMemo(() => {
    return CARS.filter(car => {
      const matchBrand = filterBrand === 'All' || car.brand === filterBrand;
      const matchType = filterType === 'All' || car.category === filterType;
      const matchSearch = car.model.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          car.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchPrice = car.price <= maxPrice;
      return matchBrand && matchType && matchSearch && matchPrice;
    });
  }, [filterBrand, filterType, searchQuery, maxPrice]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);
  const currentCars = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCars.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredCars, currentPage]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filterBrand, filterType, searchQuery, maxPrice]);

  const resetFilters = () => {
    setFilterBrand('All');
    setFilterType('All');
    setSearchQuery('');
    setMaxPrice(250000);
    setCurrentPage(1);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-24 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[160px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
            {t('cars.title').split(' ')[0]} <span className="text-blue-500">{t('cars.title').split(' ')[1] || 'Stock'}</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">{t('cars.subtitle')}</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar Filters */}
          <aside className="lg:w-1/4">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 sticky top-28">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-black text-xl flex items-center gap-3 uppercase tracking-tighter">
                  <SlidersHorizontal size={22} className="text-blue-600" />
                  {t('cars.filters')}
                </h3>
                <button 
                  onClick={resetFilters} 
                  className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                  title={t('cars.reset')}
                >
                  <RotateCcw size={20} />
                </button>
              </div>

              {/* Search Field */}
              <div className="mb-8">
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3">{t('cars.search')}</label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text" 
                    placeholder={`${t('cars.brand')} / ${t('cars.title').split(' ')[1]}...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Brands Select */}
              <div className="mb-8">
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3">{t('cars.brand')}</label>
                <select 
                  className="w-full p-3 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer transition-all"
                  value={filterBrand}
                  onChange={(e) => setFilterBrand(e.target.value)}
                >
                  {brands.map(b => <option key={b} value={b}>{b === 'All' ? t('cars.all') : b}</option>)}
                </select>
              </div>

              {/* Categories Select */}
              <div className="mb-8">
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3">{t('cars.category')}</label>
                <select 
                  className="w-full p-3 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer transition-all"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                >
                  {types.map(tKey => (
                    <option key={tKey} value={tKey}>
                      {tKey === 'All' ? t('cars.all') : t(`cars.categories.${tKey}`, { defaultValue: tKey })}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Slider */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">{t('cars.priceMax')}</label>
                  <span className="text-blue-600 font-black text-sm">{maxPrice.toLocaleString()} €</span>
                </div>
                <input 
                  type="range" 
                  min="20000" 
                  max="300000" 
                  step="5000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600 mb-2"
                />
                <div className="flex justify-between text-[10px] font-bold text-slate-300">
                  <span>20k €</span>
                  <span>300k €</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Results Grid */}
          <div className="lg:w-3/4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
              <div className="bg-white px-6 py-2 rounded-full border border-slate-100 shadow-sm">
                <p className="text-slate-500 text-sm">
                  <span className="font-black text-slate-900">{filteredCars.length}</span> {t('cars.found')}
                </p>
              </div>
              <div className="flex gap-3 bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm">
                <button className="p-2.5 bg-slate-900 text-white rounded-xl shadow-lg"><Grid size={20} /></button>
                <button className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-all"><List size={20} /></button>
              </div>
            </div>

            {currentCars.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  {currentCars.map(car => (
                    <CarCard key={car.id} car={car} />
                  ))}
                </div>

                {/* Pagination Controls */}
{totalPages > 1 && (
  <div className="flex flex-wrap justify-center items-center gap-3">

    <button 
      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
      disabled={currentPage === 1}
      className="p-3 sm:p-4 bg-white border border-slate-100 rounded-2xl text-slate-600 hover:text-blue-600 hover:shadow-md disabled:opacity-30 disabled:hover:text-slate-600 transition-all"
    >
      <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
    </button>
    
    <div className="flex flex-wrap justify-center items-center gap-2 max-w-full">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl font-bold sm:font-black text-sm sm:text-base transition-all ${
            currentPage === i + 1 
            ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
            : 'bg-white border border-slate-100 text-slate-400 hover:border-blue-200 hover:text-blue-600'
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>

    <button 
      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
      disabled={currentPage === totalPages}
      className="p-3 sm:p-4 bg-white border border-slate-100 rounded-2xl text-slate-600 hover:text-blue-600 hover:shadow-md disabled:opacity-30 disabled:hover:text-slate-600 transition-all"
    >
      <ChevronRight size={20} className="sm:w-6 sm:h-6" />
    </button>

              </div>
            )}

              </>
            ) : (
              <div className="bg-white p-24 rounded-[3rem] text-center border border-slate-100 shadow-sm">
                <div className="bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 text-slate-200">
                  <Search size={48} />
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">{t('cars.noResults')}</h3>
                <p className="text-slate-500 mb-10 max-w-sm mx-auto">{t('cars.noResultsSub')}</p>
                <button 
                  onClick={resetFilters}
                  className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/10"
                >
                  {t('cars.reset')}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
