import { colorClasses } from '@/lib/data'
import { ProductSummary } from '@/lib/Schemas/productSummary'
import Image from 'next/image'
import React from 'react'

const ProductCard = ({product}: {product: ProductSummary}) => {
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
                <div className='w-full flex flex-col justify-center gap-0.5 lg:gap-2'>
                    <p className='px-3 mobile-h4 lg:h6'>{product.name}</p>
                    <div className='w-full flex flex-col justify-center items-start lg:flex-row lg:justify-between px-3'>
                        <p className='mobile-body-md lg:body-md'>{product.type[0].toUpperCase()}{product.type.slice(1)}</p>
                        <p className='mobile-h4 lg:h6'>${product.price.toFixed(2)}</p>
                    </div>
                    <div className='flex justify-star items-center gap-1 px-3'>
                        {product.colors.map((color) => (
                            <div key={color} className={`h-4 w-4 ${colorClasses[color] || ''} rounded-full`}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard