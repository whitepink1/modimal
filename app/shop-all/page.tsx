import WebsitePath from '@/components/shared/WebsitePath';
import ProductsCatalogue from '@/components/Shop-All/ProductsCatalogue';
import ProductsFilter from '@/components/Shop-All/ProductsFilter';
import Image from 'next/image';
import React from 'react'

const Page = () => {
    return (
        <div className='w-full'>
            <WebsitePath />
            <div className='relative w-full h-[480px] lg:h-[650px] mb-8 lg:mb-12'>
                <Image 
                    src="/images/shop_all.png"
                    fill
                    objectFit='cover'
                    className='z-2 object-bottom lg:object-top'
                    alt=""/>
            </div>
            <div className='flex flex-col justify-center items-center gap-6 px-3 max-w-page lg:flex-row mx-auto'>
                <ProductsFilter />
                <ProductsCatalogue />
            </div>
        </div>
    )
}

export default Page;