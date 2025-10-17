import { ProductSummary } from '@/lib/Schemas/productSummary';
import React from 'react'
import ModiWeekSlider from '../shared/ModiWeekSlider';
import { modiWeekIds } from '@/lib/data';

const ModiWeek = async () => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products-by-ids?ids=${modiWeekIds.join(",")}`,
        { next: { revalidate: 86400 } }
    );
    const products: ProductSummary[] = await response.json();
    return (
        <div className='max-w-page px-5 mt-6 lg:mt-22 mx-auto'>
            <h3 className='h3 text-black mb-10'>Modiweek</h3>
            <ModiWeekSlider data={products}/>
        </div>
    )
}

export default ModiWeek