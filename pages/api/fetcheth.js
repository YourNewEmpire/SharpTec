import axios from 'axios';

export default handler(
      async (req, res) => {
            try {
                  console.log('before the request');
                  const coinData = await axios.get('https://api.coingecko.com/api/v3/coins/ethereum?market_data=true');
                  const price = coinData.data.market_data.current_price.usd;
                  console.log(price);
                  //Set state
                  res.send(price)
                } catch (error) {
                  console.log(error);
                }
      }
);