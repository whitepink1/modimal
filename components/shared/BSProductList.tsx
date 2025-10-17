import React from 'react'
import SwiperSlider from './BSSwiperSlider'
import { ProductSummary } from '@/lib/Schemas/productSummary';

const BSProductList = async ({ids} : {ids: number[]}) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products-by-ids?ids=${ids.join(",")}`,
        { next: { revalidate: 86400 } }
    );
    const products: ProductSummary[] = await response.json();
    return (
        <SwiperSlider data={products} />
    )
}

export default BSProductList