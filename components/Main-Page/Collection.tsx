import { collectionData } from '@/lib/data'
import Image from 'next/image'
import React from 'react'
import WButton from '../shared/WButton'

const Collection = () => {
    return (
        <div className='w-full max-w-page px-5 mt-5 lg:mt-10 mx-auto'>
            <h3 className='h3 mb-2 lg:mb-6'>Collection</h3>
            <div className='grid-layout gap-y-16 gap-x-6 min-h-[550px] max-lg:mb-15 lg:min-h-[1400px]'>
                {collectionData.map((item) => (
                    <div key={item.name} className={`relative ${item.gridLetter}`}>
                        <Image
                            src={item.img}
                            fill
                            className='object-cover'
                            alt={item.name}/>
                        <WButton url="" text={item.name} addClass='absolute -bottom-10 max-lg:border-1 border-gray-300/65 max-lg:w-full max-lg:translate-x-1/2 right-1/2 lg:bottom-4 lg:right-4'/>
                    </div>
                ))}
            </div> 
        </div>
    )
}

export default Collection