import axios from 'axios';
import CardGroup from '../components/Cards/CardGroup';
import { CardProps } from '../interfaces/cards'
import { GetServerSideProps } from 'next';

export default function Home({data}) {

  const cardItems: CardProps[] = [
    {
      img: 'https://images.unsplash.com/photo-1476041026529-411f6ae1de3e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8b3V0ZG9vcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      header: 'the views',
      body: 'how beautifulhow beautifulhow beautifulhow beautifulhow beautifulhow beautifulhow beautiful'
    },
    {
      img: 'https://images.unsplash.com/photo-1476041026529-411f6ae1de3e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8b3V0ZG9vcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      header: 'the views',
      body: 'how beautifulhow beautifulhow beautifulhow beautifulhow beautifulhow beautifulhow beautiful'
    },
    {
      img: 'https://images.unsplash.com/photo-1476041026529-411f6ae1de3e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8b3V0ZG9vcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      header: 'the views',
      body: 'how beautifulhow beautifulhow beautifulhow beautifulhow beautifulhow beautifulhow beautifulhow beautifulhow beautifulhow beautifulhow beautifulhow beautifulhow beautifulhow beautiful'
    },
  ]



  return (
    <div className="flex flex-col space-y-64">

      <div className="flex items-center justify-center object-cover rounded-lg bg-the-willy bg-no-repeat bg-center  h-screen ">
        <h1 className="text-6xl text-lightblue-900 dark:text-blue-200 " >This Is SharpTec</h1>
      </div>
      

      <CardGroup items={cardItems} />
      <div className="flex items-center justify-center ">
        <h1 className="text-6xl text-lightblue-900  dark:text-blue-200">This Is SharpTec</h1>
      </div>
      <div className="flex items-center justify-center ">
        <h1 className="text-6xl text-lightblue-900 dark:text-blue-200">This Is SharpTec</h1>
      </div>
      <div className="flex items-center justify-center  ">
        <h1 className="text-6xl text-lightblue-900 dark:text-blue-200">This Is SharpTec</h1>
      </div>
      <div className="flex items-center justify-center  ">
          <h1 id="learnmore" className="text-6xl text-lightblue-900 dark:text-blue-200">This Is SharpTec</h1>
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