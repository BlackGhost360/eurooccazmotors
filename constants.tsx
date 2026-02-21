
import { Car, ServiceItem } from './types';
import car1 from './src/images/car1.jpg?url';
import car2 from './src/images/car2.jpg?url';
import car3 from './src/images/car3.jpg?url';
import car4 from './src/images/car4.jpg?url';
import car5 from './src/images/car5.jpg?url';
import car6 from './src/images/car6.jpg?url';
import car7 from './src/images/car7.jpg?url';
import car8 from './src/images/car8.jpg?url';
import car9 from './src/images/car9.jpg?url';
import car10 from './src/images/car10.jpg?url';
import car11 from './src/images/car11.jpg?url';
import car12 from './src/images/car12.jpg?url';
import car13 from './src/images/car13.jpg?url';
import car14 from './src/images/car14.jpg?url';
import car15 from './src/images/car15.jpg?url';
import car16 from './src/images/car16.jpg?url';
import car17 from './src/images/car17.jpg?url';
import car18 from './src/images/car18.jpg?url';
import car19 from './src/images/car19.jpg?url';
import car20 from './src/images/car20.jpg?url';
import car21 from './src/images/car21.jpg?url';
import car22 from './src/images/car22.jpg?url';
import car23 from './src/images/car23.jpg?url';
import car24 from './src/images/car24.jpg?url';
import car25 from './src/images/car25.jpg?url';
import car26 from './src/images/car26.jpg?url';
import car27 from './src/images/car27.jpg?url';
import car28 from './src/images/car28.jpg?url';
import car29 from './src/images/car29.jpg?url';
import car30 from './src/images/car30.jpg?url';
import car31 from './src/images/car31.jpg?url';
import car32 from './src/images/car32.jpg?url';
import car33 from './src/images/car33.jpg?url';
import car34 from './src/images/car34.jpg?url';
import car35 from './src/images/car35.jpg?url';
import car36 from './src/images/car36.jpg?url';
import car37 from './src/images/car37.jpg?url';
import car38 from './src/images/car38.jpg?url';
import car39 from './src/images/car39.jpg?url';
import car40 from './src/images/car40.jpg?url';
import car41 from './src/images/car41.jpg?url';
import car42 from './src/images/car42.jpg?url';
import car43 from './src/images/car43.jpg?url';
import car44 from './src/images/car44.jpg?url';
import car45 from './src/images/car45.jpg?url';
import car46 from './src/images/car46.jpg?url';
import car47 from './src/images/car47.jpg?url';
import car48 from './src/images/car48.jpg?url';
import car49 from './src/images/car49.jpg?url';
import car50 from './src/images/car50.jpg?url';
import car51 from './src/images/car51.jpg?url';
import car52 from './src/images/car52.jpg?url';
import car53 from './src/images/car53.jpg?url';
import car54 from './src/images/car54.jpg?url';
import car55 from './src/images/car55.jpg?url';
import car56 from './src/images/car56.jpg?url';
import car57 from './src/images/car57.jpg?url';
import car58 from './src/images/car58.jpg?url';
import car59 from './src/images/car59.jpg?url';
import car60 from './src/images/car60.jpg?url';
import car61 from './src/images/car61.jpg?url';
import car62 from './src/images/car62.jpg?url';
import car63 from './src/images/car63.jpg?url';
import car64 from './src/images/car64.jpg?url';
import car65 from './src/images/car65.jpg?url';
import car66 from './src/images/car66.jpg?url';
import car67 from './src/images/car67.jpg?url';
import car68 from './src/images/car68.jpg?url';
import car69 from './src/images/car69.jpg?url';
import car70 from './src/images/car70.jpg?url';
import car71 from './src/images/car71.jpg?url';
import car72 from './src/images/car72.jpg?url';
import car73 from './src/images/car73.jpg?url';
import car74 from './src/images/car74.jpg?url';
import car75 from './src/images/car75.jpg?url';
import car76 from './src/images/car76.jpg?url';
import car77 from './src/images/car77.jpg?url';
import car78 from './src/images/car78.jpg?url';
import car79 from './src/images/car79.jpg?url';
import car80 from './src/images/car80.jpg?url';
import car81 from './src/images/car81.jpg?url';
import car82 from './src/images/car82.jpg?url';
import car83 from './src/images/car83.jpg?url';
import car84 from './src/images/car84.jpg?url';
import car85 from './src/images/car85.jpg?url';
import car86 from './src/images/car86.jpg?url';
import car87 from './src/images/car87.jpg?url';
import car88 from './src/images/car88.jpg?url';
import car89 from './src/images/car89.jpg?url';
import car90 from './src/images/car90.jpg?url';
import car91 from './src/images/car91.jpg?url';
import car92 from './src/images/car92.jpg?url';
import car93 from './src/images/car93.jpg?url';
import car94 from './src/images/car94.jpg?url';
import car95 from './src/images/car95.jpg?url';
import car96 from './src/images/car96.jpg?url';
import car97 from './src/images/car97.jpg?url';
import car98 from './src/images/car98.jpg?url';
import car99 from './src/images/car99.jpg?url';
import car100 from './src/images/car100.jpg?url';
import car101 from './src/images/homeBanner.avif?url';


import service1 from './src/images/service1.avif?url';
import service2 from './src/images/service2.avif?url';
import service3 from './src/images/service3.avif?url';
import service4 from './src/images/service4.jfif?url';


// ============================================================
// CARS.ts — Prix corrigés d'après les tarifs de marché 2023/2024
// Sources : L'Argus, Caradisiac, constructeurs officiels, AutoScout24
// ============================================================

export const CARS: Car[] = [
  // --- EUROPE PREMIUM ---
  {
    id: '1',
    brand: 'Porsche',
    model: '911 Carrera S',
    year: 2023,
    price: 134000,    // WAS: 145000 | Tarif neuf France ~128-135k€ (PDK, sans options majeures)
    mileage: 12000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car1,
    featured: true,
    category: 'Sportive'
  },
  {
    id: '2',
    brand: 'Audi',
    model: 'RS6 Avant',
    year: 2022,
    price: 120000,    // WAS: 115000 | RS6 Avant C8 ~118-125k€ neuf (légère hausse depuis 2022)
    mileage: 25000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car2,
    featured: false,
    category: 'Berline'
  },
  {
    id: '3',
    brand: 'BMW',
    model: 'iX xDrive50',
    year: 2024,
    price: 110000,    // WAS: 98000 | BMW iX xDrive50 ~108-115k€ catalogue France 2024
    mileage: 5000,
    fuel: 'Electrique',
    transmission: 'Automatique',
    image: car3,
    featured: false,
    category: 'SUV'
  },
  {
    id: '15',
    brand: 'Ferrari',
    model: 'Roma Spider',
    year: 2024,
    price: 260000,    // WAS: 245000 | Ferrari Roma Spider ~255-270k€ (Roma coupé ~220k€, Spider +~40k€)
    mileage: 500,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car4,
    featured: true,
    category: 'Sportive'
  },

  // --- AMÉRIQUE ---
  {
    id: '4',
    brand: 'Mercedes-Benz',
    model: 'Classe G 63 AMG',
    year: 2021,
    price: 195000,    // WAS: 210000 | G63 AMG ~180-200k€ neuf France; 2021 occasion ~190-200k€
    mileage: 38000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car5,
    featured: false,
    category: 'SUV'
  },
  {
    id: '7',
    brand: 'Ford',
    model: 'Mustang Mach-1',
    year: 2022,
    price: 65000,     // WAS: 68000 | Mustang Mach-1 ~60-68k€ en France
    mileage: 18000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car6,
    featured: true,
    category: 'Sportive'
  },
  {
    id: '8',
    brand: 'Cadillac',
    model: 'Escalade V-Series',
    year: 2023,
    price: 175000,    // WAS: 185000 | Escalade V-Series ~165-180k€ en Europe
    mileage: 9500,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car7,
    featured: false,
    category: 'SUV'
  },
  {
    id: '9',
    brand: 'Chevrolet',
    model: 'Corvette C8',
    year: 2023,
    price: 95000,     // WAS: 105000 | Corvette C8 ~90-100k€ en Europe (importée)
    mileage: 4200,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car8,
    featured: false,
    category: 'Sportive'
  },

  // --- CHINE (NEW TRENDS) ---
  {
    id: '10',
    brand: 'BYD',
    model: 'Seal Excellence',
    year: 2024,
    price: 44990,     // WAS: 49500 | BYD Seal Excellence ~44-47k€ en Europe
    mileage: 1200,
    fuel: 'Electrique',
    transmission: 'Automatique',
    image: car9,
    featured: false,
    category: 'Berline'
  },
  {
    id: '11',
    brand: 'NIO',
    model: 'ET7 Luxury',
    year: 2024,
    price: 69000,     // WAS: 72000 | NIO ET7 ~65-72k€ selon version
    mileage: 3500,
    fuel: 'Electrique',
    transmission: 'Automatique',
    image: car10,
    featured: false,
    category: 'Berline'
  },
  {
    id: '12',
    brand: 'Zeekr',
    model: '001 Privilege',
    year: 2023,
    price: 58000,     // WAS: 64000 | Zeekr 001 ~50-60k€ en Europe
    mileage: 8000,
    fuel: 'Electrique',
    transmission: 'Automatique',
    image: car11,
    featured: false,
    category: 'SUV'
  },

  // --- EUROPE MOYENNE GAMME / ACCESSIBLE ---
  {
    id: '5',
    brand: 'Tesla',
    model: 'Model 3 Performance',
    year: 2023,
    price: 54990,     // WAS: 52000 | Tesla Model 3 Performance 2023 ~53-57k€
    mileage: 15000,
    fuel: 'Electrique',
    transmission: 'Automatique',
    image: car12,
    featured: false,
    category: 'Berline'
  },
  {
    id: '13',
    brand: 'Renault',
    model: 'Megane E-Tech',
    year: 2023,
    price: 37500,     // WAS: 36000 | Mégane E-Tech EV60 220ch ~36-40k€
    mileage: 11000,
    fuel: 'Electrique',
    transmission: 'Automatique',
    image: car13,
    featured: false,
    category: 'Berline'
  },
  {
    id: '6',
    brand: 'Volkswagen',
    model: 'Golf GTI Clubsport',
    year: 2022,
    price: 43500,     // WAS: 41000 | Golf GTI Clubsport ~42-46k€ catalogue France
    mileage: 22000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car14,
    featured: false,
    category: 'Citadine'
  },
  {
    id: '14',
    brand: 'Volvo',
    model: 'XC60 Recharge',
    year: 2022,
    price: 62000,     // WAS: 58000 | XC60 Recharge T8 ~60-65k€
    mileage: 32000,
    fuel: 'Hybride',
    transmission: 'Automatique',
    image: car15,
    featured: false,
    category: 'SUV'
  },
  {
    id: '16',
    brand: 'Peugeot',
    model: '3008 GT Pack',
    year: 2023,
    price: 41000,     // WAS: 39500 | 3008 GT Pack ~40-43k€ selon motorisation
    mileage: 14000,
    fuel: 'Hybride',
    transmission: 'Automatique',
    image: car16,
    featured: false,
    category: 'SUV'
  },
  {
    id: '17',
    brand: 'Toyota',
    model: 'Land Cruiser 300',
    year: 2024,
    price: 98000,     // WAS: 112000 | Land Cruiser 300 ~90-105k€ selon finition
    mileage: 1000,
    fuel: 'Diesel',
    transmission: 'Automatique',
    image: car17,
    featured: false,
    category: 'SUV'
  },
  {
    id: '18',
    brand: 'Honda',
    model: 'Civic Type R',
    year: 2023,
    price: 46500,     // WAS: 54000 | Civic Type R FL5 ~43-48k€ en France
    mileage: 6000,
    fuel: 'Essence',
    transmission: 'Manuelle',
    image: car18,
    featured: false,
    category: 'Sportive'
  },
  {
    id: '19',
    brand: 'Fiat',
    model: '500e La Prima',
    year: 2024,
    price: 34500,     // WAS: 32000 | Fiat 500e La Prima ~33-36k€
    mileage: 2500,
    fuel: 'Electrique',
    transmission: 'Automatique',
    image: car19,
    featured: false,
    category: 'Citadine'
  },
  {
    id: '20',
    brand: 'Jaguar',
    model: 'F-Type R',
    year: 2022,
    price: 110000,    // WAS: 89000 | F-Type R (575ch) ~105-120k€ en France
    mileage: 15500,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car20,
    featured: true,
    category: 'Sportive'
  },
  {
    id: '21',
    brand: 'Dacia',
    model: 'Sandero Stepway',
    year: 2023,
    price: 17500,     // WAS: 16500 | Sandero Stepway ~17-19k€ bien équipée
    mileage: 18000,
    fuel: 'Essence',
    transmission: 'Manuelle',
    image: car21,
    featured: false,
    category: 'Citadine'
  },
  {
    id: '22',
    brand: 'Hyundai',
    model: 'i10',
    year: 2022,
    price: 14500,     // WAS: 13900 | Hyundai i10 ~14-16k€
    mileage: 22000,
    fuel: 'Essence',
    transmission: 'Manuelle',
    image: car22,
    featured: false,
    category: 'Citadine'
  },
  {
    id: '23',
    brand: 'Suzuki',
    model: 'Swift Sport',
    year: 2023,
    price: 25500,     // WAS: 24500 | Swift Sport ~25-27k€
    mileage: 8000,
    fuel: 'Essence',
    transmission: 'Manuelle',
    image: car23,
    featured: false,
    category: 'Citadine'
  },
  {
    id: '24',
    brand: 'Kia',
    model: 'Picanto GT-Line',
    year: 2023,
    price: 16900,     // WAS: 17200 | Picanto GT-Line ~16-18k€ CORRECT
    mileage: 12000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car24,
    featured: false,
    category: 'Citadine'
  },
  {
    id: '25',
    brand: 'Opel',
    model: 'Corsa Electric',
    year: 2023,
    price: 30500,     // WAS: 28500 | Corsa Electric ~29-33k€ selon finition
    mileage: 9500,
    fuel: 'Electrique',
    transmission: 'Automatique',
    image: car25,
    featured: false,
    category: 'Citadine'
  },
  {
    id: '26',
    brand: 'Seat',
    model: 'Ibiza FR',
    year: 2022,
    price: 21000,     // WAS: 19800 | Ibiza FR ~20-23k€
    mileage: 16000,
    fuel: 'Essence',
    transmission: 'Manuelle',
    image: car26,
    featured: false,
    category: 'Citadine'
  },
  {
    id: '27',
    brand: 'Mazda',
    model: 'MX-5 Miata',
    year: 2023,
    price: 30500,     // WAS: 32000 | MX-5 ~28-32k€ selon version (légère surévaluation)
    mileage: 5000,
    fuel: 'Essence',
    transmission: 'Manuelle',
    image: car27,
    featured: false,
    category: 'Sportive'
  },
  {
    id: '28',
    brand: 'Mini',
    model: 'Cooper S',
    year: 2022,
    price: 36000,     // WAS: 34500 | Mini Cooper S ~35-38k€
    mileage: 14000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car28,
    featured: false,
    category: 'Citadine'
  },
  {
    id: '29',
    brand: 'Skoda',
    model: 'Fabia Monte Carlo',
    year: 2023,
    price: 22500,     // WAS: 21500 | Fabia Monte Carlo ~22-24k€
    mileage: 11000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car29,
    featured: false,
    category: 'Citadine'
  },
  {
    id: '30',
    brand: 'Toyota',
    model: 'Yaris GR Sport',
    year: 2023,
    price: 26500,     // WAS: 26000 | Yaris GR Sport ~25-28k€ CORRECT
    mileage: 7500,
    fuel: 'Hybride',
    transmission: 'Automatique',
    image: car30,
    featured: false,
    category: 'Citadine'
  },

  // ========== BERLINES MOYENNE GAMME ==========
  {
    id: '31',
    brand: 'BMW',
    model: '320i M Sport',
    year: 2022,
    price: 45000,     // WAS: 42000 | BMW 320i M Sport ~44-48k€
    mileage: 28000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car31,
    featured: false,
    category: 'Berline'
  },
  {
    id: '32',
    brand: 'Mercedes-Benz',
    model: 'Classe C 200',
    year: 2023,
    price: 50000,     // WAS: 48500 | Classe C 200 ~48-53k€ CORRECT
    mileage: 15000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car32,
    featured: false,
    category: 'Berline'
  },
  {
    id: '33',
    brand: 'Audi',
    model: 'A4 S Line',
    year: 2022,
    price: 46000,     // WAS: 44000 | A4 S Line TDI ~44-48k€ CORRECT
    mileage: 24000,
    fuel: 'Diesel',
    transmission: 'Automatique',
    image: car33,
    featured: false,
    category: 'Berline'
  },
  {
    id: '34',
    brand: 'Alfa Romeo',
    model: 'Giulia Veloce',
    year: 2023,
    price: 55000,     // WAS: 52000 | Giulia Veloce ~53-58k€
    mileage: 9000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car34,
    featured: false,
    category: 'Berline'
  },
  {
    id: '35',
    brand: 'Lexus',
    model: 'IS 300h',
    year: 2023,
    price: 48000,     // WAS: 46500 | Lexus IS 300h ~46-50k€ CORRECT
    mileage: 12000,
    fuel: 'Hybride',
    transmission: 'Automatique',
    image: car35,
    featured: false,
    category: 'Berline'
  },
  {
    id: '36',
    brand: 'Genesis',
    model: 'G70 Sport',
    year: 2023,
    price: 48000,     // WAS: 49000 | Genesis G70 ~46-50k€ CORRECT
    mileage: 8000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car36,
    featured: false,
    category: 'Berline'
  },
  {
    id: '37',
    brand: 'Volvo',
    model: 'S60 T8 Recharge',
    year: 2023,
    price: 60000,     // WAS: 56000 | S60 T8 ~58-63k€
    mileage: 10000,
    fuel: 'Hybride',
    transmission: 'Automatique',
    image: car37,
    featured: false,
    category: 'Berline'
  },
  {
    id: '38',
    brand: 'Peugeot',
    model: '508 GT',
    year: 2022,
    price: 40000,     // WAS: 38000 | 508 GT Diesel ~39-43k€
    mileage: 19000,
    fuel: 'Diesel',
    transmission: 'Automatique',
    image: car38,
    featured: false,
    category: 'Berline'
  },
  {
    id: '39',
    brand: 'Mazda',
    model: '6 Signature',
    year: 2022,
    price: 36500,     // WAS: 35500 | Mazda 6 Signature ~35-38k€ CORRECT
    mileage: 21000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car39,
    featured: false,
    category: 'Berline'
  },
  {
    id: '40',
    brand: 'Honda',
    model: 'Accord Sport',
    year: 2023,
    price: 39000,     // WAS: 37000 | Honda Accord (rare en EU) ~38-42k€
    mileage: 13000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car40,
    featured: false,
    category: 'Berline'
  },
  {
    id: '41',
    brand: 'Volkswagen',
    model: 'Passat R-Line',
    year: 2022,
    price: 42000,     // WAS: 39500 | Passat R-Line TDI ~40-44k€
    mileage: 25000,
    fuel: 'Diesel',
    transmission: 'Automatique',
    image: car41,
    featured: false,
    category: 'Berline'
  },
  {
    id: '42',
    brand: 'Infiniti',
    model: 'Q50 Red Sport',
    year: 2022,
    price: 48000,     // WAS: 45000 | Q50 Red Sport ~46-52k€ (importé)
    mileage: 17000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car42,
    featured: false,
    category: 'Berline'
  },
  {
    id: '43',
    brand: 'Acura',
    model: 'TLX A-Spec',
    year: 2023,
    price: 48000,     // WAS: 47000 | Acura TLX ~46-52k€ (importé)
    mileage: 11000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car43,
    featured: false,
    category: 'Berline'
  },
  {
    id: '44',
    brand: 'Subaru',
    model: 'WRX STI',
    year: 2022,
    price: 43000,     // WAS: 41000 | WRX STI ~42-46k€ (importé)
    mileage: 14500,
    fuel: 'Essence',
    transmission: 'Manuelle',
    image: car44,
    featured: false,
    category: 'Berline'
  },
  {
    id: '45',
    brand: 'DS',
    model: 'DS 9 Performance Line',
    year: 2023,
    price: 56000,     // WAS: 54000 | DS 9 E-Tense 360 ~55-60k€
    mileage: 8500,
    fuel: 'Hybride',
    transmission: 'Automatique',
    image: car45,
    featured: false,
    category: 'Berline'
  },

  // ========== SUV MOYENNE GAMME ==========
  {
    id: '46',
    brand: 'Nissan',
    model: 'X-Trail e-Power',
    year: 2023,
    price: 45000,     // WAS: 43000 | X-Trail e-Power ~44-47k€
    mileage: 12000,
    fuel: 'Hybride',
    transmission: 'Automatique',
    image: car46,
    featured: false,
    category: 'SUV'
  },
  {
    id: '47',
    brand: 'Mazda',
    model: 'CX-5 Signature',
    year: 2023,
    price: 43000,     // WAS: 41500 | CX-5 Signature ~42-45k€ CORRECT
    mileage: 9000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car47,
    featured: false,
    category: 'SUV'
  },
  {
    id: '48',
    brand: 'Hyundai',
    model: 'Tucson N Line',
    year: 2023,
    price: 40000,     // WAS: 38000 | Tucson N Line hybride ~39-42k€
    mileage: 14000,
    fuel: 'Hybride',
    transmission: 'Automatique',
    image: car48,
    featured: false,
    category: 'SUV'
  },
  {
    id: '49',
    brand: 'Kia',
    model: 'Sportage GT-Line',
    year: 2023,
    price: 41000,     // WAS: 39500 | Sportage GT-Line hybride ~40-43k€
    mileage: 11000,
    fuel: 'Hybride',
    transmission: 'Automatique',
    image: car49,
    featured: false,
    category: 'SUV'
  },
  {
    id: '50',
    brand: 'Ford',
    model: 'Explorer ST',
    year: 2022,
    price: 68000,     // WAS: 62000 | Explorer ST PHEV ~65-72k€ en Europe
    mileage: 18000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car50,
    featured: false,
    category: 'SUV'
  },
  {
    id: '51',
    brand: 'Jeep',
    model: 'Grand Cherokee L',
    year: 2023,
    price: 72000,     // WAS: 68000 | Grand Cherokee L ~70-76k€ en Europe
    mileage: 8500,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car51,
    featured: false,
    category: 'SUV'
  },
  {
    id: '52',
    brand: 'Land Rover',
    model: 'Discovery Sport',
    year: 2023,
    price: 58000,     // WAS: 55000 | Discovery Sport D200 ~56-62k€
    mileage: 13000,
    fuel: 'Diesel',
    transmission: 'Automatique',
    image: car52,
    featured: false,
    category: 'SUV'
  },
  {
    id: '53',
    brand: 'Mitsubishi',
    model: 'Outlander PHEV',
    year: 2023,
    price: 49000,     // WAS: 47000 | Outlander PHEV ~48-52k€
    mileage: 7000,
    fuel: 'Hybride',
    transmission: 'Automatique',
    image: car53,
    featured: false,
    category: 'SUV'
  },
  {
    id: '54',
    brand: 'Subaru',
    model: 'Outback Wilderness',
    year: 2023,
    price: 46000,     // WAS: 44000 | Outback Wilderness ~44-48k€
    mileage: 10000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car54,
    featured: false,
    category: 'SUV'
  },
  {
    id: '55',
    brand: 'Lexus',
    model: 'NX 350h',
    year: 2023,
    price: 55000,     // WAS: 52000 | NX 350h ~54-58k€
    mileage: 9500,
    fuel: 'Hybride',
    transmission: 'Automatique',
    image: car55,
    featured: false,
    category: 'SUV'
  },
  {
    id: '56',
    brand: 'Acura',
    model: 'MDX A-Spec',
    year: 2023,
    price: 62000,     // WAS: 58000 | MDX A-Spec ~60-66k€ (importé)
    mileage: 6000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car56,
    featured: false,
    category: 'SUV'
  },
  {
    id: '57',
    brand: 'Genesis',
    model: 'GV70 Sport',
    year: 2023,
    price: 56000,     // WAS: 54000 | GV70 Sport ~54-58k€
    mileage: 8000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car57,
    featured: true,
    category: 'SUV'
  },

  // ========== SUV & BERLINES HAUTE GAMME ==========
  {
    id: '58',
    brand: 'BMW',
    model: 'X7 M60i',
    year: 2023,
    price: 155000,    // WAS: 135000 | X7 M60i ~148-165k€ (SOUS-ÉVALUÉ dans le fichier original)
    mileage: 12000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car58,
    featured: true,
    category: 'SUV'
  },
  {
    id: '59',
    brand: 'Mercedes-Benz',
    model: 'GLS 580',
    year: 2023,
    price: 155000,    // WAS: 145000 | GLS 580 ~150-165k€ (SOUS-ÉVALUÉ)
    mileage: 8000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car59,
    featured: false,
    category: 'SUV'
  },
  {
    id: '60',
    brand: 'Audi',
    model: 'Q8 e-tron',
    year: 2024,
    price: 105000,    // WAS: 98000 | Audi Q8 e-tron ~100-110k€
    mileage: 3000,
    fuel: 'Electrique',
    transmission: 'Automatique',
    image: car60,
    featured: false,
    category: 'SUV'
  },
  {
    id: '61',
    brand: 'Range Rover',
    model: 'Autobiography',
    year: 2023,
    price: 195000,    // WAS: 168000 | Range Rover Autobiography ~180-210k€ (SOUS-ÉVALUÉ)
    mileage: 9000,
    fuel: 'Diesel',
    transmission: 'Automatique',
    image: car61,
    featured: false,
    category: 'SUV'
  },
  {
    id: '62',
    brand: 'Bentley',
    model: 'Bentayga V8',
    year: 2023,
    price: 220000,    // WAS: 245000 | Bentayga V8 ~195-225k€ de base (SURÉVALUÉ)
    mileage: 5000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car62,
    featured: true,
    category: 'SUV'
  },
  {
    id: '63',
    brand: 'Maserati',
    model: 'Levante Modena',
    year: 2023,
    price: 100000,    // WAS: 95000 | Levante Modena ~98-108k€
    mileage: 11000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car63,
    featured: false,
    category: 'SUV'
  },
  {
    id: '64',
    brand: 'Porsche',
    model: 'Cayenne Turbo S',
    year: 2023,
    price: 185000,    // WAS: 185000 | Cayenne Turbo S ~175-200k€ CORRECT
    mileage: 7500,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car64,
    featured: true,
    category: 'SUV'
  },
  {
    id: '65',
    brand: 'Mercedes-Benz',
    model: 'S 500 4Matic',
    year: 2023,
    price: 150000,    // WAS: 142000 | S500 4Matic ~145-160k€
    mileage: 10000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car65,
    featured: false,
    category: 'Berline'
  },
  {
    id: '66',
    brand: 'BMW',
    model: '750i xDrive',
    year: 2023,
    price: 145000,    // WAS: 138000 | 760i ~140-155k€ (750i remplacé par 760i)
    mileage: 8500,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car66,
    featured: false,
    category: 'Berline'
  },
  {
    id: '67',
    brand: 'Audi',
    model: 'A8 L 60 TFSI e',
    year: 2023,
    price: 130000,    // WAS: 125000 | A8 L 60 TFSI e ~125-135k€ CORRECT
    mileage: 11000,
    fuel: 'Hybride',
    transmission: 'Automatique',
    image: car67,
    featured: false,
    category: 'Berline'
  },

  // ========== VOITURES SPORTIVES & SUPERCARS ==========
  {
    id: '68',
    brand: 'Lamborghini',
    model: 'Huracán EVO',
    year: 2022,
    price: 220000,    // WAS: 285000 | Huracán EVO ~200-225k€ (SURÉVALUÉ dans le fichier)
    mileage: 4500,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car68,
    featured: false,
    category: 'Sportive'
  },
  {
    id: '69',
    brand: 'McLaren',
    model: '720S Spider',
    year: 2023,
    price: 310000,    // WAS: 325000 | McLaren 720S Spider ~290-320k€
    mileage: 2800,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car69,
    featured: true,
    category: 'Sportive'
  },
  {
    id: '70',
    brand: 'Aston Martin',
    model: 'DB11 V8',
    year: 2022,
    price: 185000,    // WAS: 195000 | DB11 V8 ~175-195k€ CORRECT
    mileage: 8000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car70,
    featured: true,
    category: 'Sportive'
  },
  {
    id: '71',
    brand: 'Nissan',
    model: 'GT-R Nismo',
    year: 2023,
    price: 195000,    // WAS: 185000 | GT-R Nismo ~190-210k€ (SOUS-ÉVALUÉ)
    mileage: 3500,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car71,
    featured: false,
    category: 'Sportive'
  },
  {
    id: '72',
    brand: 'Lotus',
    model: 'Emira V6',
    year: 2024,
    price: 90000,     // WAS: 92000 | Lotus Emira V6 ~87-95k€ CORRECT
    mileage: 1500,
    fuel: 'Essence',
    transmission: 'Manuelle',
    image: car72,
    featured: true,
    category: 'Sportive'
  },
  {
    id: '73',
    brand: 'Alpine',
    model: 'A110 S',
    year: 2023,
    price: 72000,     // WAS: 74000 | Alpine A110 S ~70-75k€ CORRECT
    mileage: 6000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car73,
    featured: false,
    category: 'Sportive'
  },
  {
    id: '74',
    brand: 'Toyota',
    model: 'Supra GR 3.0',
    year: 2023,
    price: 65000,     // WAS: 62000 | Supra GR 3.0 ~63-68k€
    mileage: 8500,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car74,
    featured: false,
    category: 'Sportive'
  },
  {
    id: '75',
    brand: 'Dodge',
    model: 'Challenger SRT Hellcat',
    year: 2023,
    price: 90000,     // WAS: 85000 | Hellcat ~85-95k€ en Europe (importé)
    mileage: 5000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car75,
    featured: false,
    category: 'Sportive'
  },

  // ========== CAMIONS & PICK-UP ==========
  {
    id: '76',
    brand: 'Ford',
    model: 'F-150 Raptor',
    year: 2023,
    price: 85000,     // WAS: 78000 | F-150 Raptor ~80-90k€ en Europe (importé)
    mileage: 12000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car76,
    featured: false,
    category: 'Pick-up'
  },
  {
    id: '77',
    brand: 'RAM',
    model: '1500 TRX',
    year: 2023,
    price: 105000,    // WAS: 95000 | RAM 1500 TRX ~100-115k€ en Europe (importé)
    mileage: 8000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car77,
    featured: true,
    category: 'Pick-up'
  },
  {
    id: '78',
    brand: 'Chevrolet',
    model: 'Silverado ZR2',
    year: 2023,
    price: 78000,     // WAS: 72000 | Silverado ZR2 ~75-82k€ (importé)
    mileage: 15000,
    fuel: 'Diesel',
    transmission: 'Automatique',
    image: car78,
    featured: false,
    category: 'Pick-up'
  },
  {
    id: '79',
    brand: 'Toyota',
    model: 'Hilux GR Sport',
    year: 2024,
    price: 55000,     // WAS: 52000 | Hilux GR Sport ~53-58k€
    mileage: 5000,
    fuel: 'Diesel',
    transmission: 'Automatique',
    image: car79,
    featured: false,
    category: 'Pick-up'
  },
  {
    id: '80',
    brand: 'Nissan',
    model: 'Navara Pro-4X',
    year: 2023,
    price: 47000,     // WAS: 46000 | Navara Pro-4X ~45-48k€ CORRECT
    mileage: 18000,
    fuel: 'Diesel',
    transmission: 'Automatique',
    image: car80,
    featured: false,
    category: 'Pick-up'
  },
  {
    id: '81',
    brand: 'Isuzu',
    model: 'D-Max V-Cross',
    year: 2023,
    price: 44000,     // WAS: 42000 | D-Max V-Cross ~43-46k€
    mileage: 22000,
    fuel: 'Diesel',
    transmission: 'Automatique',
    image: car81,
    featured: false,
    category: 'Pick-up'
  },
  {
    id: '82',
    brand: 'Mitsubishi',
    model: 'L200 Triton',
    year: 2023,
    price: 38000,     // WAS: 39500 | L200 Triton ~37-40k€ CORRECT
    mileage: 25000,
    fuel: 'Diesel',
    transmission: 'Manuelle',
    image: car82,
    featured: false,
    category: 'Pick-up'
  },
  {
    id: '83',
    brand: 'GMC',
    model: 'Sierra Denali',
    year: 2023,
    price: 90000,     // WAS: 82000 | GMC Sierra Denali ~85-95k€ (importé)
    mileage: 11000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car83,
    featured: false,
    category: 'Pick-up'
  },

  // ========== VÉHICULES ÉLECTRIQUES CHINOIS ==========
  {
    id: '84',
    brand: 'Xpeng',
    model: 'P7 Wing',
    year: 2024,
    price: 55000,     // WAS: 58000 | Xpeng P7 ~52-58k€ en Europe
    mileage: 4000,
    fuel: 'Electrique',
    transmission: 'Automatique',
    image: car84,
    featured: false,
    category: 'Berline'
  },
  {
    id: '85',
    brand: 'Li Auto',
    model: 'L9 Max',
    year: 2024,
    price: 72000,     // WAS: 68000 | Li Auto L9 ~70-76k€ en Europe
    mileage: 2500,
    fuel: 'Hybride',
    transmission: 'Automatique',
    image: car85,
    featured: false,
    category: 'SUV'
  },
  {
    id: '86',
    brand: 'BYD',
    model: 'Han EV',
    year: 2023,
    price: 48000,     // WAS: 52000 | BYD Han EV ~46-52k€ en Europe
    mileage: 8000,
    fuel: 'Electrique',
    transmission: 'Automatique',
    image: car86,
    featured: false,
    category: 'Berline'
  },
  {
    id: '87',
    brand: 'Geely',
    model: 'Geometry G6',
    year: 2024,
    price: 36000,     // WAS: 38000 | Geely/Geometry G6 ~34-38k€
    mileage: 5500,
    fuel: 'Electrique',
    transmission: 'Automatique',
    image: car87,
    featured: false,
    category: 'Berline'
  },
  {
    id: '88',
    brand: 'MG',
    model: 'MG4 Electric',
    year: 2024,
    price: 29990,     // WAS: 32000 | MG4 Electric ~28-33k€ (SURÉVALUÉ)
    mileage: 6000,
    fuel: 'Electrique',
    transmission: 'Automatique',
    image: car88,
    featured: false,
    category: 'Citadine'
  },
  {
    id: '89',
    brand: 'Aiways',
    model: 'U5 Premium',
    year: 2023,
    price: 38000,     // WAS: 41000 | Aiways U5 ~36-40k€
    mileage: 12000,
    fuel: 'Electrique',
    transmission: 'Automatique',
    image: car89,
    featured: false,
    category: 'SUV'
  },
  {
    id: '90',
    brand: 'Hongqi',
    model: 'E-HS9 Flagship',
    year: 2024,
    price: 85000,     // WAS: 95000 | Hongqi E-HS9 ~80-90k€ en Europe (SURÉVALUÉ)
    mileage: 3000,
    fuel: 'Electrique',
    transmission: 'Automatique',
    image: car90,
    featured: false,
    category: 'SUV'
  },

  // ========== UTILITAIRES & VANS ==========
  {
    id: '91',
    brand: 'Mercedes-Benz',
    model: 'Sprinter 316 CDI',
    year: 2023,
    price: 52000,     // WAS: 48000 | Sprinter 316 CDI ~50-55k€ selon équipement
    mileage: 35000,
    fuel: 'Diesel',
    transmission: 'Automatique',
    image: car91,
    featured: false,
    category: 'Utilitaire'
  },
  {
    id: '92',
    brand: 'Volkswagen',
    model: 'Transporter T6.1',
    year: 2023,
    price: 44000,     // WAS: 42000 | Transporter T6.1 ~42-46k€
    mileage: 28000,
    fuel: 'Diesel',
    transmission: 'Manuelle',
    image: car92,
    featured: false,
    category: 'Utilitaire'
  },
  {
    id: '93',
    brand: 'Ford',
    model: 'Transit Custom Sport',
    year: 2023,
    price: 42000,     // WAS: 39500 | Transit Custom Sport ~40-44k€
    mileage: 32000,
    fuel: 'Diesel',
    transmission: 'Automatique',
    image: car93,
    featured: false,
    category: 'Utilitaire'
  },
  {
    id: '94',
    brand: 'Renault',
    model: 'Master Z.E. Electric',
    year: 2024,
    price: 58000,     // WAS: 56000 | Master Z.E. ~55-60k€
    mileage: 8000,
    fuel: 'Electrique',
    transmission: 'Automatique',
    image: car94,
    featured: false,
    category: 'Utilitaire'
  },
  {
    id: '95',
    brand: 'Peugeot',
    model: 'Expert Premium',
    year: 2023,
    price: 40000,     // WAS: 38000 | Expert Premium ~39-42k€
    mileage: 26000,
    fuel: 'Diesel',
    transmission: 'Automatique',
    image: car95,
    featured: false,
    category: 'Utilitaire'
  },

  // ========== VOITURES DE COLLECTION / CLASSIQUES ==========
  {
    id: '96',
    brand: 'Porsche',
    model: '911 964 Carrera',
    year: 1992,
    price: 95000,     // WAS: 125000 | 911 964 Carrera occasion ~80-110k€ selon état (SURÉVALUÉ)
    mileage: 68000,
    fuel: 'Essence',
    transmission: 'Manuelle',
    image: car96,
    featured: true,
    category: 'Collection'
  },
  {
    id: '97',
    brand: 'Mercedes-Benz',
    model: '300 SL Roadster',
    year: 1989,
    price: 42000,     // WAS: 95000 | 300 SL (R107) 1989 ~35-55k€ (LE PRIX ÉTAIT TRÈS SURÉVALUÉ — à ne pas confondre avec le 300 SL W198 Gullwing à +1M€)
    mileage: 72000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car97,
    featured: true,
    category: 'Collection'
  },
  {
    id: '98',
    brand: 'BMW',
    model: 'E30 M3',
    year: 1990,
    price: 75000,     // WAS: 78000 | BMW E30 M3 ~65-90k€ selon état CORRECT
    mileage: 85000,
    fuel: 'Essence',
    transmission: 'Manuelle',
    image: car98,
    featured: false,
    category: 'Collection'
  },
  {
    id: '99',
    brand: 'Jaguar',
    model: 'E-Type Series 3',
    year: 1973,
    price: 80000,     // WAS: 115000 | E-Type S3 V12 ~70-100k€ (SURÉVALUÉ — les 115k+ sont pour les exemplaires d'exception)
    mileage: 45000,
    fuel: 'Essence',
    transmission: 'Manuelle',
    image: car99,
    featured: false,
    category: 'Collection'
  },
  {
    id: '100',
    brand: 'Toyota',
    model: 'Supra MK4 Turbo',
    year: 1998,
    price: 80000,     // WAS: 135000 | Supra MK4 Turbo ~70-100k€ bon état (TRÈS SURÉVALUÉ)
    mileage: 52000,
    fuel: 'Essence',
    transmission: 'Manuelle',
    image: car100,
    featured: false,
    category: 'Collection'
  },
  {
    id: '101',
    brand: 'Chevrolet',
    model: 'Camaro',            // NOTE: Faute de frappe corrigée ("Camero" → "Camaro")
    year: 2023,
    price: 75000,     // WAS: 145000 | Camaro 2023 ~60-80k€ en Europe (importé) — PRIX ORIGINAL ABERRANT
    mileage: 15000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car101,
    featured: true,
    category: 'Collection'   // NOTE: devrait être 'Sportive' plutôt que 'Collection' pour un 2023
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'Importation Europe',
    description: 'Nous gérons tout le processus d’importation depuis l’Allemagne, l’Italie ou l’Espagne.',
    icon: 'Globe'
  },
  {
    id: 2,
    title: 'Véhicules Certifiés',
    description: 'Chaque voiture passe un contrôle technique rigoureux de 150 points avant la vente.',
    icon: 'ShieldCheck'
  },
  {
    id: 3,
    title: 'Garantie 24 Mois',
    description: 'Roulez en toute sérénité avec notre garantie premium couvrant pièces et main d’œuvre.',
    icon: 'Award'
  },
  {
    id: 4,
    title: 'Livraison à Domicile',
    description: 'Nous livrons votre nouvelle voiture partout en Europe sous 7 jours ouvrés.',
    icon: 'Truck'
  }
];

export const STEPS = [
  { number: '01', title: 'Sélection', description: 'Choisissez parmi notre catalogue de véhicules premium certifiés.' },
  { number: '02', title: 'Réservation', description: 'Réservez votre véhicule en ligne avec un acompte sécurisé.' },
  { number: '03', title: 'Inspection', description: 'Notre équipe vérifie l\'état complet du véhicule avant livraison.' },
  { number: '04', title: 'Livraison', description: 'Recevez les clés de votre nouvelle voiture à votre porte.' }
];
