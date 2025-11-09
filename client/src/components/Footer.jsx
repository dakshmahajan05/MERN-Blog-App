import React from 'react'
import { assets, footer_data } from '../Assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
        <div className='flex flex-col jusstify-between gap-10 py-10 md:flex-row items-start border-b border-gray-500/30 text-gray-500'>
            <div>
                <img src={assets.logo} className='w-32 sm:w-44 ' alt="" />
                <p className='max-w-[410px] mt-6'>Life koi hero movie nahi be, kabhi upar kabhi neeche. Par kaam karte reh, consistency hi asli baap hai 😈. Social media ke chakkar me mat pad, apna time aur energy ka respect kar. Grow slowly, chill, aur maar dhamaka 💥.</p>
            </div>
            <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5 '>
                {footer_data.map((section,index)=>(
                    <div key={index}>
                        <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>{section.title}</h3>
                        <ul className='text-sm space-y-1'>
                           {section.links.map((link,i)=>(
                            <li key={i}>
                                <a className='hover:underline transition' href="#">{link}</a>
                            </li>
                           ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>Copyright 2025 @ DakshDev - All rights reserved</p>

    </div>
  )
}

export default Footer