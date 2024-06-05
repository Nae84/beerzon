export interface LitersAmmount {
  "1L": number
  "3L": number
  "5L": number
  "15L": number
}

export type BeerShop = {
  id: number
  name: string
  prices: LitersAmmount[]
}

export type Data = Array<BeerShop>

export type ApiDataResponse = {
  data: Data
}


export type LoadingState = {
  isLoading: boolean
}