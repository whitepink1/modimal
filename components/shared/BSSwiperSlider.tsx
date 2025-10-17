'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ProductCard from '../Card/ProductCard';
import { ProductSummary } from '@/lib/Schemas/productSummary';

interface IProductsProps {
    data: ProductSummary[];
}

const SwiperSlider = ({data} : IProductsProps) => {
    return (
        <div className='h-fit'>
            <Swiper 
                slidesPerView={2} 
                spaceBetween={16}
                pagination={{ dynamicBullets: true}} 
                modules={[Pagination]}
                breakpoints={{
                    1024: { slidesPerView: 3, spaceBetween: 24},
                }} 
                className="pb-12">
                {data?.map((item) => (
                    <SwiperSlide key={item.id}>
                            <ProductCard product={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SwiperSlider