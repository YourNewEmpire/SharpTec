import React from 'react'
import { Childs } from '../../interfaces/childs'
import Image from 'next/image'
import { CardProps } from '../../interfaces/cards'

export default function Card({ img, header, body }: CardProps): JSX.Element {
      return (
            <div className=" 
            grid grid-cols-2
            rounded-lg
            bg-blue-200
            dark:bg-lightblue-900
            p-2
            my-0
            gap-4
            ">
                  <div className="">
                        <img
                              className="rounded-lg object-cover w-full"
                              src={img}
                              alt="Picture of the author"

                        />
                  </div>
                  <div className="">
                        <div className=" py-4" >
                              <p className=" text-6xl text-lightblue-900 dark:text-blue-200">
                                    {header}
                              </p>
                        </div>
                        <div className=" py-4"  >
                              <p className="text-xl text-lightblue-900 dark:text-blue-200">
                              {body}
                              </p>
                        </div>
                  </div>
            </div>
      )
}