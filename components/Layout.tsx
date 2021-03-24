import React, { ReactChild, ReactChildren } from 'react'
import "tailwindcss/tailwind.css";
import Nav from './Nav'


interface Props {
      children: ReactChild[] | ReactChildren[] | ReactChild | ReactChildren;
}

export default function Layout({ children }: Props): JSX.Element {

      return (
            <div className="bg-darkblue-200 dark:bg-lightblue-900 min-h-full">
                  <Nav />
                  <div className="mx-auto darkblue justify-center sm:mx-20 lg:mx-20" >
                        {children}
                  </div>
            </div>

      )
}