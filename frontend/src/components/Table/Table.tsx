import { useState, useContext, useEffect } from "react";
import { BottlesContext } from '../../context/bottles';
import { Data, BeerShop } from '../../lib/types';
import PropTypes from 'prop-types';


function Table( {data} : {data: Data}) {
  const {bottles} = useContext(BottlesContext)

  const [bestShopPrize, setBestShopPrize] = useState<{shopName: string, shopPrize: number, id: number} | null>(null)

  useEffect(() => {
    setBestShopPrize(null)  
  }, [bottles, data])

  const getTotal = (shop: BeerShop) =>  {
    const {prices} = shop

    const shopPrize = Math.round(Object.keys(prices).reduce((acc, key) => {
      return acc + (prices[key] * bottles[key])
    }, 0)*100)/100

    if (!bestShopPrize || bestShopPrize.shopPrize > shopPrize) setBestShopPrize(
      {
        shopName: shop.name,
        shopPrize,
        id: shop.id,
      }
    )
  
    return shopPrize;
  }

  return ( 
    <div className='w-8/12 mx-auto'>
      <div className='w-full py-7 px-3 border border-gray-200 rounded-md shadow mb-2'>
        <div className='relative overflow-x-auto'>
          <table className='w-full text-sm text-left text-gray-500'>
            <thead className='text-xs text-gray-700'>
                  <tr className='border-b-2'>
                    <th
                      scope='col'
                      className='px-6 py-3 w-9/12'>
                      Shop Name
                    </th>
                    {
                      ['1L', '3L', '5L', '15L'].map((size, index) => {
                        return (
                          <th
                            key={`${size}-${index}-th`}
                            scope='col'
                            className='px-6 py-3 w-1/12 text-center'>
                            {size}
                          </th>
                        )
                      })
                    }
                    <th
                      scope='col'
                      className='px-6 py-3 w-1/12 text-center'
                    >
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data && data.map((shop, index) => {
                      return (
                        <tr
                          key={`${shop.name}-${index}-tr`}
                          className={`${shop.id === bestShopPrize?.id ? 'bg-green-100' : 'bg-white'}  border-b`}>
                            <td
                              className='px-6 py-4 font-semibold text-gray-900 whitespace-nowrap'>
                              {shop.name}
                            </td>
                            {
                              Object.entries(shop.prices).map(([key, price], index) => {
                                return (
                                  <td
                                    key={`${key}-${index}-td`}
                                    className='px-6 py-4 text-gray-900 whitespace-nowrap text-right'>
                                    {price} €
                                  </td>
                                ) 
                              })
                            }
                            <td className='px-6 py-4 text-gray-900 whitespace-nowrap text-right'>
                              {getTotal(shop)} €
                            </td>
                        </tr> 
                      )
                    })        
                  }
                </tbody>
          </table>
        </div>
      </div>
      <p className='text-sm text-right pr-2 text-xs'>
        {bestShopPrize && `Best shop: ${bestShopPrize.shopName} with ${bestShopPrize.shopPrize} €`}
      </p>
    </div>
    
  )
}

export default Table;

Table.propTypes = {
  data: PropTypes.array.isRequired
} 

