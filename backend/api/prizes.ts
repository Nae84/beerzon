import { Router } from 'express';
import { type BeerShop } from '../lib/types';
import { getPriceForSize } from '../lib/utils';
import { SHOP_NAMES } from '../lib/consts';

export const prizesRouter = Router()

prizesRouter.get('/', (req, res) => {

  const { ammountShops } : { ammountShops?: any } = req.query

  try {

    const shopPrizes: BeerShop[] = []

    for (let i = 0; i < ammountShops; i++) {

      shopPrizes.push({
        id: i + 1,
        name: SHOP_NAMES[i],
        prices: {
          "1L": getPriceForSize("1L"),
          "3L": getPriceForSize("3L"),
          "5L": getPriceForSize("5L"),
          "15L": getPriceForSize("15L"),
        }
      })
    }

    return res.status(200).json({ data: shopPrizes })

  } catch (error) {
    return res.status(400).json({ error })
  }

  return res.status(200).json({ data: [] })
})