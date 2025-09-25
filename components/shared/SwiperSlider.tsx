'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { ProductProps } from '@/lib/props';
import ProductCard from '../Card/ProductCard';

interface IProductsProps {
    data: ProductProps[];
}

const SwiperSlider = ({data} : IProductsProps) => {
    console.log(data)
    return (
        <div>
            <Swiper slidesPerView={3} pagination={true} modules={[Pagination]} className="">
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