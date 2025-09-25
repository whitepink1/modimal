import Link from 'next/link'
import React from 'react'
import SwiperSlider from '../shared/SwiperSlider'
import { ProductProps } from '@/lib/props'

const bestSellers : ProductProps[] = [
    {id: 15, date: new Date(),image: '/images/15.png', name: 'Easy in short', colors: ['black', 'green'], type: 'Turn it up short', price: 130},
    {id: 25, date: new Date(),image: '/images/25.png', name: 'Easy shirt', colors: ['green', 'pink'], type: 'Turn it up shirt', price: 199},
]

const BestSellers = () => {
    return (
        <div className='flex flex-col w-full px-5 max-w-page mx-auto'>
            <div className='w-full flex justify-between items-end'>
                <h3 className='text-black h3'>Best Sellers</h3>
                <Link href="" className='button-sm text-primary-600'>View All</Link>
            </div>
            <SwiperSlider data={bestSellers} />
        </div>
    )
}

export default BestSellers