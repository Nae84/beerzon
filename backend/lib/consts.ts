import { type PriceRange } from './types';

export const SHOP_NAMES = [
  'La Cerveza Del Gato',
  'El Barril de la Vaca',
  'El Pub de la Ribera',
  'El Barril de la Tapas',
  'La Cerveza Pintada',
  'El Barril de la Fiesta',
  'El Pub de la Parrilla',
  'La Cerveza de la Vuelta',
  'El Barril de la Playa',
  'El Pub de la Noche',
];

export const PRICES_RANGE: PriceRange = {
  "1L": {
    min: 3.5,
    max: 4,
  },
  "3L": {
    min: 9,
    max: 10.5,
  },
  "5L": {
    min: 14,
    max: 15,
  },
  "15L": {
    min: 41,
    max: 42,
  },
};