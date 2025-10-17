import { modiWeek } from '@/lib/data'
import { ProductSummary } from '@/lib/Schemas/productSummary'
import Image from 'next/image'
import React from 'react'

const ModiWeekCard = ({product, id}: {product: ProductSummary, id: number}) => {
    return (
        <div className='w-full '>
            <div className='w-full h-full flex flex-col items-start justify-between '>
                <div className='relative w-full aspect-[2/3]'>
                    <Image
                        src={product.image}
                        fill
                        alt={product.name}
                        className='object-cover aspect-square'
                        objectPosition='top'
                        />
                    <Image
                        src="/icons/empty-like.svg"
                        height={24}
                        width={24}
                        className='absolute top-3 right-3 z-10'
                        alt="Favorite"/>
                </div>
                <div className='w-full mt-5'>
                    <p className='px-3 mobile-h4 lg:h6'>{modiWeek[id]}</p>
                </div>
            </div>
        </div>
    )
}

export default ModiWeekCard