import Image from 'next/image'
import React from 'react'
import WButton from '../shared/WButton'

const EcoChoice = () => {
    return (
        <div className='relative w-full h-[450px] lg:h-[525px] mt-6 lg:mt-22'>
            <Image 
                src="/images/sustainability.png"
                fill
                objectFit='cover'
                className='z-2 object-bottom lg:object-top'
                alt=""/>
            <div className='absolute max-w-page flex flex-col justify-end items-end gap-3 inset-0 h-full p-5 mx-auto z-3'>
                <p className='max-w-[500px] body-xl text-primary-800'>Stylish sustainability in clothing promotes eco-friendly choices for a greater future</p>
                <WButton url="/" text="Sustainability"/>
            </div>
        </div>
    )
}

export default EcoChoice