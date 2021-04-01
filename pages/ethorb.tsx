import axios from 'axios';
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'


export default function EthOrb() {
      const dispatch = useDispatch()
      const [eth, setEth] = useState(0)
      useEffect( () => {
            const id = setInterval( async() => {
                  const coinData = await axios.get('https://api.coingecko.com/api/v3/coins/ethereum?market_data=true');
                  const price = coinData.data.market_data.current_price.usd;
                  setEth(price)
            }, 3000);
            return () => clearInterval(id);
      }, [eth])

      return (
            <div className="flex flex-col space-y-64">

                  <div className="flex items-center justify-center ">
                        <h1>{eth}</h1>
                  </div>





            </div>
      );

}

