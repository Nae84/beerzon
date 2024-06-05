export type BeerSizes = '1L' | '3L' | '5L' | '15L'
export type PriceRange = Record<BeerSizes, { min: number, max: number }>

export type BeerShop = {
  id: number
  name: string,
  prices: Record<BeerSizes, number>,
}

