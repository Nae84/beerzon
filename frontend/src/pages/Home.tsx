import { useEffect, useState, useContext } from 'react';
import Table from '../components/Table/Table';
import { getPrizes } from '../hooks/get-prizes';
import { LoadingContext } from '../context/loading';
import { DataInput } from '../components/DataInput/DataInput';
import { BottlesProvider } from '../context/bottles';
import { type Data } from '../lib/types';

const SECONDS_TO_REFRESH = 30 // seconds to refresh the prizes


function Home () {
  const [countdown, setCountdown] = useState(SECONDS_TO_REFRESH);
  const [data, setData] = useState<Data>([])

  const {setIsLoading} = useContext(LoadingContext);

  useEffect(() => {
    getBeers() // first load

    const countdownInterval = setInterval(() => {
      // Decrease the countdown value every second
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(countdownInterval);
  }, [])

  useEffect(() => {
    // Use setTimeout to reset the countdown after it reaches 0
    if (countdown === 0) {
      getBeers()
      setTimeout(() => {
        setCountdown(SECONDS_TO_REFRESH); // Reset the countdown to SECONDS_TO_REFRESH seconds
      }, 1000); // Delay before resetting (1 seconds)
    }
  }, [countdown]); // Effect re-runs whenever countdown changes

  const getBeers = () => {
    setIsLoading(true)
    getPrizes(10)
      .then(([error, data]) => {
        if (error) {
          return
        }

        if (data) setData(data)
        setIsLoading(false)
    
    }).catch((error) => {
      setIsLoading(false)
      console.log(error)
    })
  }

  const onManualUpdate = () => {
    getBeers()
    setCountdown(SECONDS_TO_REFRESH)
  }

  return (
    <>
      <div className='flex py-5 px-3'>
        <BottlesProvider>
          <section className='w-3/12 mx-auto border-underline text-sm'>
            <DataInput />
            <div className='mt-5 flex flex-col'>
              <button
                onClick={onManualUpdate}
                className="rounded-lg bg-pink-500 py-3 px-6 text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
              >
                manually update prizes
              </button>
              <p className='text-center mt-3'>Prizes will update in {countdown} seconds</p>  
            </div>
          </section>
          <Table data={data} />
        </BottlesProvider>
      </div>
    </>
  )
} 

export default Home;