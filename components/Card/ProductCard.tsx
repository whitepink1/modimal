import { ProductProps } from '@/lib/props'
import Image from 'next/image'
import React from 'react'

const ProductCard = ({product}: {product: ProductProps}) => {
    return (
        <div className='w-[29vw] h-[390px] flex flex-col items-start justify-between lg:w-[320px] xl:w-[380px] lg:h-[540px]'>
            <div className='relative w-full h-[333px] lg:h-[440px]'>
                <Image
                    src={product.image}
                    fill
                    alt={product.name}
                    className='object-cover'
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
                    <p className='mobile-body-md lg:body-md'>{product.type}</p>
                    <p className='mobile-h4 lg:h6'>${product.price}</p>
                </div>
                <p className='px-3'>{product.colors}</p>
            </div>
        </div>
    )
}

export default ProductCard