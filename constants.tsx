
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
import service1 from './src/images/service1.avif?url';
import service2 from './src/images/service2.avif?url';
import service3 from './src/images/service3.avif?url';
import service4 from './src/images/service4.jfif?url';

export const CARS: Car[] = [
  // --- EUROPE PREMIUM (EXISTING + NEW) ---
  {
    id: '1',
    brand: 'Porsche',
    model: '911 Carrera S',
    year: 2023,
    price: 145000,
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
    price: 115000,
    mileage: 25000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car2,
    featured: true,
    category: 'Berline'
  },
  {
    id: '3',
    brand: 'BMW',
    model: 'iX xDrive50',
    year: 2024,
    price: 98000,
    mileage: 5000,
    fuel: 'Electrique',
    transmission: 'Automatique',
    image: car3,
    featured: true,
    category: 'SUV'
  },
  {
    id: '15',
    brand: 'Ferrari',
    model: 'Roma Spider',
    year: 2024,
    price: 245000,
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
    price: 210000,
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
    price: 68000,
    mileage: 18000,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car6,
    featured: false,
    category: 'Sportive'
  },
  {
    id: '8',
    brand: 'Cadillac',
    model: 'Escalade V-Series',
    year: 2023,
    price: 185000,
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
    price: 105000,
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
    price: 49500,
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
    price: 72000,
    mileage: 3500,
    fuel: 'Electrique',
    transmission: 'Automatique',
    image: car10,
    featured: true,
    category: 'Berline'
  },
  {
    id: '12',
    brand: 'Zeekr',
    model: '001 Privilege',
    year: 2023,
    price: 64000,
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
    price: 52000,
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
    price: 36000,
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
    price: 41000,
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
    price: 58000,
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
    price: 39500,
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
    price: 112000,
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
    price: 54000,
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
    price: 32000,
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
    price: 89000,
    mileage: 15500,
    fuel: 'Essence',
    transmission: 'Automatique',
    image: car20,
    featured: false,
    category: 'Sportive'
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
