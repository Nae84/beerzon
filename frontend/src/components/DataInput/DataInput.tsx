import { useState , useContext, useEffect} from 'react';
import { BottlesContext } from '../../context/bottles';
import { LitersAmmount } from '../../lib/types';

const MAX_LITERS = 1000
const MIN_LITERS = 1

export const DataInput = () => {   

  const {bottles, setBottles} = useContext(BottlesContext)
  const [litres, setLitres] = useState(1)
  const [dateToShow, setDateToShow] = useState<LitersAmmount>({} as LitersAmmount)


  useEffect(() => {
    const dateToShow = calculateBottles(litres)
    setDateToShow(dateToShow)

    if (dateToShow)setBottles(dateToShow)

  }, [litres])

  const divideUnits = (total: number) => {
    const _15 = Math.floor(total / 15)
    const _5 = Math.floor((total - _15*15) / 5)
    const _3 = Math.floor((total - _15*15 - _5*5) / 3)
    const _1 = total - _15*15 - _5*5 - _3*3
    return {
      "15L": _15,
      "5L": _5,
      "3L": _3,
      "1L": _1
    }
  }
  
  const calculateBottles = (total: number) => {
    const units = divideUnits(total)
    return {
      "1L": units["1L"],
      "3L": units["3L"],
      "5L": units["5L"],
      "15L": units["15L"]
    } as LitersAmmount
  }

  const onChangeLiters = (e: React.ChangeEvent<HTMLInputElement>) => {

    const value = Number(e.target.value)
    
    if (value < MIN_LITERS) setLitres(MIN_LITERS) 
    if (value > MAX_LITERS) setLitres(MAX_LITERS)
    if (value >= MIN_LITERS && value <= MAX_LITERS) setLitres(Number(e.target.value))
  }

  return (
    <div className="flex flex-col gap-2 mt-4 border-1 border p-4 rounded-lg">
      <div className='flex flex-row border-b border-b-gray-200 pb-2'>
        <label className='basis-3/4' htmlFor="liters">Ammount of liters </label>
        <input 
          className='border-2 text-center rounded w-20' 
          onChange={onChangeLiters} 
          type="number"
          value={litres}
          id="liters" name="liters" min={MIN_LITERS} max={MAX_LITERS} step="1" />
      </div>
      
      <section className='flex flex-col gap-1 p-2'>
        <p className='font-bold underline'>Units to buy</p>
        { dateToShow["1L"] > 0 && <p>{`${dateToShow["1L"]} units of 1 liters`}</p>}
        { dateToShow["3L"] > 0 && <p>{`${dateToShow["3L"]} units of 3 liters`}</p>}
        { dateToShow["5L"] > 0 && <p>{`${dateToShow["5L"]} units of 5 liters`}</p>}
        { dateToShow["15L"] > 0 && <p>{`${dateToShow["15L"]} units of 15 liters`}</p>}
      </section>
      {/* <p>{JSON.stringify(dateToShow)}</p> */}
    </div>
    
  )
}      