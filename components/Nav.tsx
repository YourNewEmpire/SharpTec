import React from 'react';
import Link from 'next/link';
import { useState } from 'react'

import { useTheme } from 'next-themes'


type listItem = {
      id: number,
      text: string,
      link: string
}


export const Nav = () => {
      const [active, setActive] = useState(false);
      const { theme, setTheme } = useTheme()


      //nav items for map
      const listItems: listItem[] = [
            {
                  id: 1,
                  text: 'Home',
                  link: ''
            },
            {
                  id: 2,
                  text: 'Contact',
                  link: 'contact'
            },

      ]


      const handleClick = () => {
            setActive(!active);
      };


      return (
            <>
                  <nav className='flex items-center flex-wrap dark:bg-darkblue-200 bg-lightblue-700 px-12 py-4 shadow-lg'>
                        <Link href='/'>
                              <a className='inline-flex items-center p-2 mr-4 hover:shadow-lg rounded-lg transition duration-500 ease-in-out transform  hover:scale-105  antialiased' >
                           
                                    <span className='text-3xl text-gray-100 font-bold uppercase tracking-wide'>
                                          SharpTec
                                    </span>
                              </a>

                        </Link>
                        <button
                              className=""
                              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        >
                     Dark theme
                        </button>

                        <button
                              className=' inline-flex p-3 rounded-lg lg:hidden text-white ml-auto hover:bg-darkblue-600  transition duration-500 ease-in-out hover:text-white outline-none'
                              onClick={handleClick}
                        >
                              <svg
                                    className='w-6 h-6'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'
                              >
                                    <path
                                          strokeLinecap='round'
                                          strokeLinejoin='round'
                                          strokeWidth={2}
                                          d='M4 6h16M4 12h16M4 18h16'
                                    />
                              </svg>
                        </button>


                        <div
                              className={`${active ? '' : 'hidden'
                                    }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                        >
                              <div className='g:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'  >
                                    {listItems.map((listItem, index) =>
                                          <Link key={index} href={`/` + listItem.link}>
                                                <a className=' subpixel-antialiased text-xl text-gray-100 lg:inline-flex lg:w-auto w-full mx-3 px-6 py-4 rounded-lg font-bold items-center justify-center hover:bg-darkblue-500 hover:text-gray-900 hover:shadow-lg  rounded transition duration-500 ease-in-out '>
                                                      {listItem.text}
                                                </a>
                                          </Link>
                                    )}

                              </div>
                        </div>
                  </nav>
            </>
      );
};


export default Nav;



