
export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: 'Essence' | 'Diesel' | 'Hybride' | 'Electrique';
  transmission: 'Automatique' | 'Manuelle';
  image: string;
  featured: boolean;
  category: 'SUV' | 'Berline' | 'Sportive' | 'Citadine';
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface BookingData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  carId: string;
  paymentMethod: string;
  message: string;
  consent: boolean;
}
