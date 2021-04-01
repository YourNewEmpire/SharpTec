import React, { ReactChild, ReactChildren } from 'react'
import "tailwindcss/tailwind.css";
import Nav from './Nav'
import Head from 'next/head'

interface Props {
      children: ReactChild[] | ReactChildren[] | ReactChild | ReactChildren;
}

export default function Layout({ children }: Props): JSX.Element {

      return (
            <div className="bg-blue-200 dark:bg-lightblue-900 min-h-full">
                  <Head>
                        <title>SharpTec</title>
                        <link rel='icon' href='/favicon.ico' />
                        <link rel="preconnect" href="https://fonts.gstatic.com" />
                        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
                  </Head>
                  <Nav />
                  <div className="mx-auto darkblue justify-center sm:mx-20 lg:mx-20" >
                        {children}
                  </div>
            </div>

      )
}