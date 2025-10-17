import Image from 'next/image'
import React from 'react'
import WButton from '../shared/WButton'

const HeroSection = () => {
    return (
        <div className='relative w-full h-[550px] lg:h-[600px]'>
            <Image 
                src="/images/hero-section.png"
                fill
                objectFit='cover'
                style={{ objectPosition: "26% top" }}
                className='z-2 lg:object-top'
                alt=""/>
            <div className='absolute inset-0 flex flex-col items-start justify-end gap-7 max-w-page mx-auto z-10 mb-5 pl-5 lg:mb-25'>
                <p className='text-black text-xl italic lg:text-4xl z-10'>Elegance in simplicity,<br></br> Earth’s harmony</p>
                <WButton url='/' text='New In' />
            </div>
        </div>
    )
}

export default HeroSection