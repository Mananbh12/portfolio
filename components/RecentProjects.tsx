import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import Image from 'next/image'

const RecentProjects = () => {
  return (
    <div className='py-20' id="projects">
        <h1 className='heading'>
            Un aperçu de {''}
            <span className='text-purple'>quelques projets</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {projects.map(({id, title, des, img, iconLists, link}) =>(
                <div key={id} className='sm:h-[41rem] h-[32rem] sm:w-[570px] lg:min-h-[32.5rem] flex items-center justify-center w-[80vw]'>
                    <PinContainer title={link} href={link}>
                        <div className='relative fle items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] lg::h-[30vh] mb-10'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                            <Image 
                                src="/bg.png" 
                                alt="bg-img" 
                                layout="fill"
                                objectFit="cover"
                                />
                            </div>
                            <Image 
                                src={img} 
                                alt={title} 
                                className="z-10 absolute bottom-0"
                                layout="fill"
                                objectFit="contain" // ou "cover" selon le rendu souhaité
                                />
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>
                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>{des}</p>
                        <div className='flex items-center justify-between mt-7 mb-3'>
                            <div className='flex items-center'>
                                {iconLists.map((icon, index)=>(
                                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' 
                                    style={{
                                        transform:`tranlateX(-${5*index*2}px)`}}>
                                        <Image 
                                            src={icon} 
                                            alt="icon" 
                                            className="p-2"
                                            width={40} // Ajuste selon ton besoin
                                            height={40} // Ajuste selon ton besoin
                                            layout="intrinsic"
                                            />
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-center items-center'>
                                <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                                    Check live site
                                    <FaLocationArrow className='ms-3' color="#CBACF9" />
                                </p>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects