import axios from "axios";

export default goingUp(
      async (req, res) => {
            if (req.method === 'POST') {
                  try {
                        const coinData = await axios.get('https://api.coingecko.com/api/v3/coins/ethereum?market_data=true');
                        const price = coinData.data.market_data.current_price.usd;
                        console.log(price);
                        setTimeout( async () => {
                              const newData = await axios.get('https://api.coingecko.com/api/v3/coins/ethereum?market_data=true');
                              const newPrice = newData.data.market_data.current_price.usd;
                              if(newPrice > price) {
                                    res.json({result: 'you have won' , price: newPrice}).status(200)
                              }
                              else  if (newPrice == price){
                                    res.json({result: 'held price'}).status(201)
                              }
                              else {
                                    res.json({result: 'you were incorrect'}).status(202)
                              }
                        }, 30000);
            
                        

                  } catch (error) {
                        console.log(error);

                  }
            }
            res.status(400)
      }
);