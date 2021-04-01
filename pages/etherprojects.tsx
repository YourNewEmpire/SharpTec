import axios from 'axios';
import CardGroup from '../components/Cards/CardGroup';

import Link from 'next/link';

export default function EtherProj({ data }) {




      return (
            <div className="flex flex-col space-y-64">

                  <div className="flex flex-col my-16 space-y-32 items-center justify-center  ">
                        <Link href="/ethorb">
                              <a className="lg:text-6xl text-lightblue-900 dark:text-blue-200 
                               hover:shadow-lg rounded-lg transition duration-300 ease-in-out transform  hover:scale-110 
                               " >
                                    Eth Orb - Guess market movements.
                               </a>
                        </Link>
                        <Link href="/ethorb">
                              <a className="lg:text-6xl text-lightblue-900 dark:text-blue-200  
                              hover:shadow-lg rounded-lg transition duration-300 ease-in-out transform  hover:scale-110
                               " >
                                    Eth Orb - Guess market movements.
                               </a>
                        </Link>
                  </div>



            </div>
      );

}
/*
export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = axios.get(process.env.HOST_PROD + "/api/fetcheth")

  return {
    props: data
  }
}
*/