import Link from 'next/link'
import React, { Suspense } from 'react'
import BSProductList from '../shared/BSProductList';
import LoadingListPC from '../shared/LoadingListPC';

const bestSellerIds = [12, 22, 33, 25];

const BestSellers = async () => {
    return (
        <div className='flex flex-col w-full px-5 max-w-page mx-auto mt-5 lg:mt-22'>
            <div className='w-full flex justify-between items-end mb-2 lg:mb-6'>
                <h3 className='text-black h3'>Best Sellers</h3>
                <Link href="" className='button-sm text-primary-600'>View All</Link>
            </div>
            <Suspense fallback={<LoadingListPC />}>
                <BSProductList ids={bestSellerIds}/>
            </Suspense>
        </div>
    )
}

export default BestSellers