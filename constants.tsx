
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

/**
 * CARS.ts — Prix d'occasion corrigés
 * Sources : lacentrale.fr, leboncoin.fr, leparking.fr, autoscout24.fr
 * Données relevées en février 2026 — prix marché occasion France
 *
 * Légende des changements :
 *   [=]  Prix maintenu (déjà correct ou dans la fourchette)
 *   [↑]  Prix augmenté (était sous-évalué)
 *   [↓]  Prix diminué (était surévalué)
 */

export const CARS: Car[] = [

  // ─────────────────────────────────────────────
  //  EUROPE PREMIUM
  // ─────────────────────────────────────────────
  {
    id: '1',
    brand: 'Porsche',
    model: '911 Carrera S',
    year: 2023,
    price: 165000,    // WAS: 134000 | [↑] 992.1 Carrera S 2023 ~12 000km → 155–175k€ (leboncoin/lacentrale)
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
    price: 108000,    // WAS: 120000 | [↓] RS6 Avant C8 2022 ~25 000km → 100–115k€ (leparking.fr ~111k€)
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
    price: 79000,     // WAS: 110000 | [↓] BMW iX xDrive50 2024 ~5 000km → 75–85k€ (leparking.fr ~78–80k€)
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
    price: 330000,    // WAS: 260000 | [↑] Ferrari Roma Spider 2024 ~500km → 310–350k€ (lacentrale ~340k€)
    mileage: 500,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car4,
    featured: true,
    category: 'Sportive'
  },
  {
    id: '59',
    brand: 'Mercedes-Benz',
    model: 'GLS 580',
    year: 2023,
    price: 130000,    // WAS: 155000 | [↓] GLS 580 2023 ~8 000km → 120–145k€ (Allemagne ~110k€, France majoré)
    mileage: 8000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car59,
    featured: true,
    category: 'SUV'
  },

  // ─────────────────────────────────────────────
  //  AMÉRIQUE / COLLECTION
  // ─────────────────────────────────────────────
  {
    id: '4',
    brand: 'Mercedes-Benz',
    model: '300 SL Roadster',
    year: 1989,
    price: 42000,     // [=] R107 1989 ~72 000km → 35–52k€ CORRECT
    mileage: 72000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car97,
    featured: false,
    category: 'Collection'
  },
  {
    id: '7',
    brand: 'Porsche',
    model: '911 964 Carrera',
    year: 1992,
    price: 90000,     // WAS: 95000 | [↓] 911 964 Carrera 1992 ~68 000km → 75–100k€ (fourchette large selon état)
    mileage: 68000,
    fuel: 'Essence',
    transmission: 'Manuelle',
    image: car96,
    featured: false,
    category: 'Collection'
  },
  {
    id: '8',
    brand: 'Bentley',
    model: 'Bentayga V8',
    year: 2023,
    price: 215000,    // WAS: 220000 | [↑] Bentayga V8 2023 ~5 000km → 200–230k€ (lacentrale ~205–229k€)
    mileage: 5000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car62,
    featured: false,
    category: 'SUV'
  },
  {
    id: '9',
    brand: 'BMW',
    model: 'X7 M60i',
    year: 2023,
    price: 155000,    // [=] X7 M60i 2023 ~12 000km → 148–165k€ CORRECT
    mileage: 12000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car58,
    featured: false,
    category: 'SUV'
  },

  // ─────────────────────────────────────────────
  //  CHINE (NEW TRENDS)
  // ─────────────────────────────────────────────
  {
    id: '10',
    brand: 'BYD',
    model: 'Seal Excellence',
    year: 2024,
    price: 38000,     // WAS: 44990 | [↓] BYD Seal Excellence 2024 ~1 200km → 35–40k€ (forte décote VE chinois)
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
    price: 58000,     // WAS: 69000 | [↓] NIO ET7 2024 ~3 500km → 55–65k€ (forte décote VE premium chinois)
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
    price: 48000,     // WAS: 58000 | [↓] Zeekr 001 2023 ~8 000km → 44–52k€ (décote importante VE chinois)
    mileage: 8000,
    fuel: 'Electrique',
    transmission: 'Automatique',
    image: car11,
    featured: false,
    category: 'SUV'
  },

  // ─────────────────────────────────────────────
  //  EUROPE MOYENNE GAMME / ACCESSIBLE
  // ─────────────────────────────────────────────
  {
    id: '5',
    brand: 'Tesla',
    model: 'Model 3 Performance',
    year: 2023,
    price: 45000,     // WAS: 54990 | [↓] Model 3 Perf. 2023 ~15 000km → 42–48k€ (forte décote VE)
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
    price: 28000,     // WAS: 37500 | [↓] Mégane E-Tech 2023 ~11 000km → 25–31k€ (forte décote VE)
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
    price: 37000,     // WAS: 43500 | [↓] Golf GTI Clubsport 2022 ~22 000km → 34–40k€
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
    price: 48000,     // WAS: 62000 | [↓] XC60 Recharge T8 2022 ~32 000km → 44–52k€
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
    price: 34000,     // WAS: 41000 | [↓] 3008 GT Pack hybride 2023 ~14 000km → 31–37k€
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
    price: 95000,     // WAS: 98000 | [↓] Land Cruiser 300 2024 ~1 000km → 90–100k€ CORRECT
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
    price: 42000,     // WAS: 46500 | [↓] Civic Type R FL5 2023 ~6 000km → 39–45k€
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
    price: 24000,     // WAS: 34500 | [↓] Fiat 500e La Prima 2024 ~2 500km → 21–26k€ (forte décote VE)
    mileage: 2500,
    fuel: 'Electrique',
    transmission: 'Automatique',
    image: car19,
    featured: false,
    category: 'Citadine'
  },
  {
    id: '57',
    brand: 'Genesis',
    model: 'GV70 Sport',
    year: 2023,
    price: 46000,     // WAS: 56000 | [↓] GV70 Sport 2023 ~8 000km → 42–50k€
    mileage: 8000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car57,
    featured: true,
    category: 'SUV'
  },
  {
    id: '21',
    brand: 'Dacia',
    model: 'Sandero Stepway',
    year: 2023,
    price: 15000,     // WAS: 17500 | [↓] Sandero Stepway 2023 ~18 000km → 13–17k€
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
    price: 12500,     // WAS: 14500 | [↓] Hyundai i10 2022 ~22 000km → 11–14k€
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
    price: 22000,     // WAS: 25500 | [↓] Swift Sport 2023 ~8 000km → 20–24k€
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
    price: 14500,     // WAS: 16900 | [↓] Picanto GT-Line 2023 ~12 000km → 13–16k€
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
    price: 20000,     // WAS: 30500 | [↓] Corsa Electric 2023 ~9 500km → 17–22k€ (forte décote VE)
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
    price: 18000,     // WAS: 21000 | [↓] Ibiza FR 2022 ~16 000km → 16–20k€
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
    price: 28000,     // WAS: 30500 | [↓] MX-5 2023 ~5 000km → 26–31k€
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
    price: 29000,     // WAS: 36000 | [↓] Mini Cooper S 2022 ~14 000km → 26–32k€
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
    price: 19000,     // WAS: 22500 | [↓] Fabia Monte Carlo 2023 ~11 000km → 17–21k€
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
    price: 22500,     // WAS: 26500 | [↓] Yaris GR Sport hybride 2023 ~7 500km → 20–25k€
    mileage: 7500,
    fuel: 'Hybride',
    transmission: 'Automatique',
    image: car30,
    featured: false,
    category: 'Citadine'
  },

  // ─────────────────────────────────────────────
  //  BERLINES MOYENNE GAMME
  // ─────────────────────────────────────────────
  {
    id: '31',
    brand: 'BMW',
    model: '320i M Sport',
    year: 2022,
    price: 38000,     // WAS: 45000 | [↓] BMW 320i M Sport 2022 ~28 000km → 34–42k€
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
    price: 42000,     // WAS: 50000 | [↓] Classe C200 2023 ~15 000km → 38–46k€
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
    price: 38000,     // WAS: 46000 | [↓] A4 S Line TDI 2022 ~24 000km → 34–42k€
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
    price: 45000,     // WAS: 55000 | [↓] Giulia Veloce 2023 ~9 000km → 42–48k€
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
    price: 40000,     // WAS: 48000 | [↓] Lexus IS 300h 2023 ~12 000km → 37–43k€
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
    price: 38000,     // WAS: 48000 | [↓] Genesis G70 2023 ~8 000km → 35–42k€ (forte décote)
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
    price: 50000,     // WAS: 60000 | [↓] S60 T8 Recharge 2023 ~10 000km → 46–55k€
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
    price: 32000,     // WAS: 40000 | [↓] 508 GT Diesel 2022 ~19 000km → 29–35k€
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
    price: 30000,     // WAS: 36500 | [↓] Mazda 6 Signature 2022 ~21 000km → 27–33k€
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
    price: 33000,     // WAS: 39000 | [↓] Honda Accord 2023 ~13 000km → 30–36k€ (rare en EU)
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
    price: 34000,     // WAS: 42000 | [↓] Passat R-Line TDI 2022 ~25 000km → 30–38k€
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
    price: 38000,     // WAS: 48000 | [↓] Q50 Red Sport 2022 ~17 000km → 34–42k€ (importé)
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
    price: 38000,     // WAS: 48000 | [↓] Acura TLX 2023 ~11 000km → 34–42k€ (importé, rare)
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
    price: 38000,     // WAS: 43000 | [↓] WRX STI 2022 ~14 500km → 34–42k€ (importé)
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
    price: 42000,     // WAS: 56000 | [↓] DS 9 E-Tense 2023 ~8 500km → 38–46k€ (forte décote DS)
    mileage: 8500,
    fuel: 'Hybride',
    transmission: 'Automatique',
    image: car45,
    featured: false,
    category: 'Berline'
  },

  // ─────────────────────────────────────────────
  //  SUV MOYENNE GAMME
  // ─────────────────────────────────────────────
  {
    id: '46',
    brand: 'Nissan',
    model: 'X-Trail e-Power',
    year: 2023,
    price: 36000,     // WAS: 45000 | [↓] X-Trail e-Power 2023 ~12 000km → 33–39k€
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
    price: 36000,     // WAS: 43000 | [↓] CX-5 Signature 2023 ~9 000km → 33–39k€
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
    price: 32000,     // WAS: 40000 | [↓] Tucson N Line hybride 2023 ~14 000km → 28–35k€
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
    price: 33000,     // WAS: 41000 | [↓] Sportage GT-Line hybride 2023 ~11 000km → 30–36k€
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
    price: 55000,     // WAS: 68000 | [↓] Explorer ST PHEV 2022 ~18 000km → 50–60k€
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
    price: 60000,     // WAS: 72000 | [↓] Grand Cherokee L 2023 ~8 500km → 55–65k€
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
    price: 48000,     // WAS: 58000 | [↓] Discovery Sport D200 2023 ~13 000km → 44–52k€
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
    price: 40000,     // WAS: 49000 | [↓] Outlander PHEV 2023 ~7 000km → 36–44k€
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
    price: 38000,     // WAS: 46000 | [↓] Outback Wilderness 2023 ~10 000km → 34–42k€
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
    price: 46000,     // WAS: 55000 | [↓] NX 350h 2023 ~9 500km → 42–50k€
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
    price: 50000,     // WAS: 62000 | [↓] MDX A-Spec 2023 ~6 000km → 46–54k€ (importé)
    mileage: 6000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car56,
    featured: false,
    category: 'SUV'
  },
  {
    id: '20',
    brand: 'Jaguar',
    model: 'F-Type R',
    year: 2022,
    price: 90000,     // WAS: 110000 | [↓] F-Type R 575ch 2022 ~15 500km → 85–95k€
    mileage: 15500,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car20,
    featured: true,
    category: 'Sportive'
  },

  // ─────────────────────────────────────────────
  //  SUV & BERLINES HAUTE GAMME
  // ─────────────────────────────────────────────
  {
    id: '58',
    brand: 'Chevrolet',
    model: 'Corvette C8',
    year: 2023,
    price: 90000,     // [=] Corvette C8 2023 ~4 200km → 85–95k€ CORRECT
    mileage: 4200,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car8,
    featured: true,
    category: 'Sportive'
  },
  {
    id: '60',
    brand: 'Audi',
    model: 'Q8 e-tron',
    year: 2024,
    price: 80000,     // WAS: 105000 | [↓] Q8 e-tron 2024 ~3 000km → 75–85k€ (forte décote VE)
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
    price: 185000,    // WAS: 195000 | [↓] Range Rover Autobiography 2023 ~9 000km → 175–200k€ (diesel)
    mileage: 9000,
    fuel: 'Diesel',
    transmission: 'Automatique',
    image: car61,
    featured: false,
    category: 'SUV'
  },
  {
    id: '62',
    brand: 'Cadillac',
    model: 'Escalade V-Series',
    year: 2023,
    price: 160000,    // WAS: 175000 | [↓] Escalade V-Series 2023 ~9 500km → 150–170k€ en Europe
    mileage: 9500,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car7,
    featured: true,
    category: 'SUV'
  },
  {
    id: '63',
    brand: 'Maserati',
    model: 'Levante Modena',
    year: 2023,
    price: 85000,     // WAS: 100000 | [↓] Levante Modena 2023 ~11 000km → 80–92k€ (forte décote Maserati)
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
    price: 185000,    // [=] Cayenne Turbo S 2023 ~7 500km → 175–200k€ CORRECT
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
    price: 140000,    // WAS: 150000 | [↓] S500 4Matic 2023 ~10 000km → 130–150k€
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
    price: 130000,    // WAS: 145000 | [↓] 760i (i7) 2023 ~8 500km → 125–140k€
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
    price: 120000,    // WAS: 130000 | [↓] A8 L 60 TFSI e 2023 ~11 000km → 115–128k€
    mileage: 11000,
    fuel: 'Hybride',
    transmission: 'Automatique',
    image: car67,
    featured: false,
    category: 'Berline'
  },

  // ─────────────────────────────────────────────
  //  VOITURES SPORTIVES & SUPERCARS
  // ─────────────────────────────────────────────
  {
    id: '68',
    brand: 'Lamborghini',
    model: 'Huracán EVO',
    year: 2022,
    price: 210000,    // WAS: 220000 | [↓] Huracán EVO 2022 ~4 500km → 195–225k€ (autoscout24 ~210k€)
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
    price: 310000,    // WAS: 310000 | [=] McLaren 720S Spider 2023 ~2 800km → 290–330k€ CORRECT
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
    price: 175000,    // WAS: 185000 | [↓] DB11 V8 2022 ~8 000km → 165–185k€
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
    price: 195000,    // [=] GT-R Nismo 2023 ~3 500km → 185–210k€ CORRECT
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
    price: 90000,     // WAS: 90000 | [=] Lotus Emira V6 2024 ~1 500km → 87–95k€ CORRECT
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
    price: 68000,     // WAS: 72000 | [↓] Alpine A110 S 2023 ~6 000km → 64–72k€
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
    price: 57000,     // WAS: 65000 | [↓] Supra GR 3.0 2023 ~8 500km → 53–62k€
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
    price: 85000,     // [=] Hellcat 2023 ~5 000km → 80–92k€ en Europe (importé) CORRECT
    mileage: 5000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car75,
    featured: false,
    category: 'Sportive'
  },

  // ─────────────────────────────────────────────
  //  CAMIONS & PICK-UP
  // ─────────────────────────────────────────────
  {
    id: '76',
    brand: 'Ford',
    model: 'F-150 Raptor',
    year: 2023,
    price: 82000,     // WAS: 85000 | [↓] F-150 Raptor 2023 ~12 000km → 78–88k€ (importé)
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
    price: 105000,    // [=] RAM 1500 TRX 2023 ~8 000km → 100–115k€ (importé) CORRECT
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
    price: 76000,     // WAS: 78000 | [↓] Silverado ZR2 2023 ~15 000km → 72–80k€ (importé)
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
    price: 52000,     // WAS: 55000 | [↓] Hilux GR Sport 2024 ~5 000km → 49–55k€
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
    price: 44000,     // WAS: 47000 | [↓] Navara Pro-4X 2023 ~18 000km → 41–47k€ CORRECT
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
    price: 40000,     // WAS: 44000 | [↓] D-Max V-Cross 2023 ~22 000km → 37–43k€
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
    price: 33000,     // WAS: 38000 | [↓] L200 Triton 2023 ~25 000km → 30–36k€
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
    price: 85000,     // WAS: 90000 | [↓] GMC Sierra Denali 2023 ~11 000km → 80–92k€ (importé)
    mileage: 11000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car83,
    featured: false,
    category: 'Pick-up'
  },

  // ─────────────────────────────────────────────
  //  VÉHICULES ÉLECTRIQUES CHINOIS
  // ─────────────────────────────────────────────
  {
    id: '84',
    brand: 'Xpeng',
    model: 'P7 Wing',
    year: 2024,
    price: 45000,     // WAS: 55000 | [↓] Xpeng P7 2024 ~4 000km → 42–48k€ (décote VE chinois)
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
    price: 62000,     // WAS: 72000 | [↓] Li Auto L9 2024 ~2 500km → 58–67k€
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
    price: 38000,     // WAS: 48000 | [↓] BYD Han EV 2023 ~8 000km → 35–42k€ (décote VE chinois)
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
    price: 28000,     // WAS: 36000 | [↓] Geely Geometry G6 2024 ~5 500km → 25–31k€ (décote VE chinois)
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
    price: 22000,     // WAS: 29990 | [↓] MG4 Electric 2024 ~6 000km → 19–24k€ (forte décote VE)
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
    price: 28000,     // WAS: 38000 | [↓] Aiways U5 2023 ~12 000km → 25–32k€ (décote VE + marque peu connue)
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
    price: 70000,     // WAS: 85000 | [↓] Hongqi E-HS9 2024 ~3 000km → 65–75k€ (décote VE + marque peu connue)
    mileage: 3000,
    fuel: 'Electrique',
    transmission: 'Automatique',
    image: car90,
    featured: false,
    category: 'SUV'
  },

  // ─────────────────────────────────────────────
  //  UTILITAIRES & VANS
  // ─────────────────────────────────────────────
  {
    id: '91',
    brand: 'Mercedes-Benz',
    model: 'Sprinter 316 CDI',
    year: 2023,
    price: 48000,     // WAS: 52000 | [↓] Sprinter 316 CDI 2023 ~35 000km → 44–52k€
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
    price: 40000,     // WAS: 44000 | [↓] Transporter T6.1 2023 ~28 000km → 36–44k€
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
    price: 38000,     // WAS: 42000 | [↓] Transit Custom Sport 2023 ~32 000km → 34–42k€
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
    price: 42000,     // WAS: 58000 | [↓] Master Z.E. 2024 ~8 000km → 38–46k€ (décote VE utilitaire)
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
    price: 34000,     // WAS: 40000 | [↓] Expert Premium 2023 ~26 000km → 30–38k€
    mileage: 26000,
    fuel: 'Diesel',
    transmission: 'Automatique',
    image: car95,
    featured: false,
    category: 'Utilitaire'
  },

  // ─────────────────────────────────────────────
  //  VOITURES SPORTIVES / CLASSIQUES
  // ─────────────────────────────────────────────
  {
    id: '96',
    brand: 'Ford',
    model: 'Mustang Mach-1',
    year: 2022,
    price: 55000,     // WAS: 65000 | [↓] Mustang Mach-1 2022 ~18 000km → 50–60k€
    mileage: 18000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car6,
    featured: true,
    category: 'Sportive'
  },
  {
    id: '97',
    brand: 'Mercedes-Benz',
    model: 'Classe G 63 AMG',
    year: 2021,
    price: 190000,    // WAS: 195000 | [↓] G63 AMG 2021 ~38 000km → 183–200k€ (lacentrale ~183–200k€)
    mileage: 38000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car5,
    featured: true,
    category: 'SUV'
  },
  {
    id: '98',
    brand: 'BMW',
    model: 'E30 M3',
    year: 1990,
    price: 75000,     // [=] BMW E30 M3 1990 ~85 000km → 65–90k€ selon état CORRECT
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
    price: 80000,     // [=] E-Type S3 V12 1973 ~45 000km → 70–100k€ CORRECT
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
    price: 75000,     // WAS: 80000 | [↓] Supra MK4 Turbo 1998 ~52 000km → 65–85k€ bon état (leparking ~58–80k€)
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
    model: 'Camaro',
    year: 2023,
    price: 68000,     // WAS: 75000 | [↓] Camaro 2023 ~15 000km → 62–72k€ (importé en Europe)
    mileage: 15000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car101,
    featured: true,
    category: 'Sportive'   // NOTE: Camaro 2023 = Sportive, pas Collection
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
