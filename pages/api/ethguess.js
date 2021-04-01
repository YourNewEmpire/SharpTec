/*import Web3 from 'web3'
import Web3HttpProvider from 'web3-providers-http'

export default handler(
      async (req, res) => {
            setTimeout(() => {

                  const web3 = new Web3HttpProvider(`https://rpc-mainnet.maticvigil.com/v1/f7178baf2319f5704d765be9c095e1b9c94ceb1f`);
                  console.log('after contract instantiation');
                  Contract.setProvider(web3);
                  console.log('artifact check' + contractInterface.abi)


                  const contract = new Contract(contractInterface.abi, NFT_ADDRESS);

                  await contract.methods.totalSupply().call(function (error, result) {
                        if (error) {
                              console.log(error);
                              res.status(400).end;
                        }
                        else if (result) {
                              res.status(200).json({ currentSupply: result })
                        }
                  });
      
      }, 3000);
      }
);*/