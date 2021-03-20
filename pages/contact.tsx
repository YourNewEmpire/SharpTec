import Head from 'next/head'

export default function Contact() {
  return (
    <>
     <Head>
        <title>SharpTec</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </Head>

      <div id="div1" className="flex items-center justify-center py-64 px-24">
        <h1 className="text-6xl text-darkblue-100">Get in contact</h1>
      </div>

      </>
  );
}
