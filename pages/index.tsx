import Head from 'next/head'
import CardGroup from '../components/Cards/CardGroup'
import { CardProps } from "../interfaces/cards";

export default function Home() {


  const cardItems: CardProps[] = [
    {
      img: 'https://images.unsplash.com/photo-1476041026529-411f6ae1de3e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8b3V0ZG9vcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      header: 'the views',
      body: 'how beautiful'
    },
    {
      img: 'https://images.unsplash.com/photo-1476041026529-411f6ae1de3e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8b3V0ZG9vcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      header: 'the views',
      body: 'how beautiful'
    },
    {
      img: 'https://images.unsplash.com/photo-1476041026529-411f6ae1de3e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8b3V0ZG9vcnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      header: 'the views',
      body: 'how beautiful'
    },
  ]
  /*

  const scaleY1 = useTransform(scale, [0, 1], [0.2, 2]);



return (
  <motion.div
    style={{ scale }}
  >
    <motion.div
      style={{
        scaleY: scrollYProgress
      }}
    />
  </motion.div>
)

  */


  return (
    <>
      <Head>
        <title>SharpTec</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </Head>


      <div id="div1" className="flex items-center justify-center py-64 px-24">
        <h1 className="text-6xl text-lightblue-900">This Is SharpTec</h1>
      </div>
      <CardGroup items={cardItems} />
      <div id="div1" className="flex items-center justify-center py-64 px-24">
        <h1 className="text-6xl text-lightblue-900">This Is SharpTec</h1>
      </div> <div id="div1" className="flex items-center justify-center py-64 px-24">
        <h1 className="text-6xl text-lightblue-900">This Is SharpTec</h1>
      </div> <div id="div1" className="flex items-center justify-center py-64 px-24">
        <h1 className="text-6xl text-lightblue-900">This Is SharpTec</h1>
      </div>

    </>
  );

}
