import { type BeerSizes } from './types';
import { PRICES_RANGE } from './consts';


export function getPriceForSize(size: BeerSizes): number {
  return Math.round((Math.random() * (PRICES_RANGE[size].max - PRICES_RANGE[size].min) + PRICES_RANGE[size].min) * 100)/100
}