import { type ApiDataResponse, type Data } from '../lib/types';
import { API_HOST } from '../config';

export const getPrizes = async ( ammountShops: number): Promise<[Error?, Data?]> => {
  try {
    const response = await fetch(`${API_HOST}/prizes?ammountShops=${ammountShops}`)

    if (!response.ok) return [new Error(response.statusText)] 

    const json = await response.json() as ApiDataResponse
    return [undefined, json.data] 
  } catch (error) {
    if (error instanceof Error) {
      return [error]
    }
  }

  return [new Error('Unknown error')]
}