import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id="contact">

        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Prêts à propulser <span className='text-purple'>vos projets</span> vers de nouveaux horizons ?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Contactez moi dès à présent afin que nous puissions collaborer</p>
            <a href="mailto:mananbhrdwj@gmail.com"><MagicButton title={"Let's get in touch"} icon={<FaLocationArrow/>} position={'right'} /></a>
        </div>
        <div className='flex mt-16 md:flex-row flex-column justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2025 Manan</p>
            <div className='flex tiems-center md:gap-3 gap-6'>
            {socialMedia.map((profile) => (
                <a 
                    key={profile.id} 
                    href={profile.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                    <img 
                    src={profile.img} 
                    alt={`icon-${profile.id}`} 
                    width={20} 
                    height={20} 
                    className="z-10"
                    />
                </a>
                ))}

            </div>
        </div>
    </footer>
  )
}

export default Footer