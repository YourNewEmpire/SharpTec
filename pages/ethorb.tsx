import axios from 'axios';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Web3 from 'web3';
import { abi} from '../public/GameItem.json'

//@ts-ignore
async function fetchURIs(user: string){
       
      let usersURIs = []
      let i: number = 0
      const provider = new Web3.providers.HttpProvider(
         '  https://rpc-mumbai.maticvigil.com/v1/f7178baf2319f5704d765be9c095e1b9c94ceb1f'
          );
      const web3 =  new Web3(provider)

      const nftContract = new web3.eth.Contract(
 //@ts-ignore
           abi,
            "0xf79349d03E0A2BfFD5Ea27B512D51Bd84289E72A",
      );
      async function pushURIs(total) {
            for (i = 1; i <= total; i++) {
                  await nftContract.methods.ownerOf(i).call().then(res => {
                        if (res == user) {
                              usersURIs.push(`https://contract-abis.herokuapp.com/api/token/${i}`)
                              console.log(usersURIs)
                        }
                        else {
                              console.log("user is empty")
                        }
                  }
                  )
            }
      };


      await nftContract.methods
            .totalSupply()
            .call().then(res => pushURIs(res))
            .catch(error => console.log(error));

            return usersURIs
}

export default function EthOrb() {
      //@ts-ignore
      const state = useSelector((state) => state.account.value)
      const [uriList, setUris] = useState<string[]>([])
      const dispatch = useDispatch()

      const [eth, setEth] = useState(0)
      useEffect(() => {
            const id = setInterval(async () => {
                  const coinData = await axios.get('https://api.coingecko.com/api/v3/coins/ethereum?market_data=true');
                  const price = coinData.data.market_data.current_price.usd;
                  setEth(price)
            }, 3000);
            return () => clearInterval(id);
      }, [eth])
      useEffect(() => {
            fetchURIs(state).then(URIs => setUris(URIs) )
            return () => {
          
            }
      }, [])
      return (
            <div className="flex flex-col space-y-64">

                  <div className="flex items-center justify-center ">
                        <h1>{eth}</h1>
                        <p className="text-pink-500">{uriList}</p>
                  </div>





            </div>
      );

}
