'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { ProductSummary } from '@/lib/Schemas/productSummary';
import ModiWeekCard from '../Card/ModiWeekCard';

interface IProductsProps {
    data: ProductSummary[];
}

const ModiWeekSlider = ({data} : IProductsProps) => {
    return (
        <div className='h-fit'>
            <Swiper 
                slidesPerView={2} 
                spaceBetween={16}
                breakpoints={{
                    1024: { slidesPerView: 4, spaceBetween: 24},
                    720: { slidesPerView: 3, spaceBetween: 24},
                }} 
                className="pb-12">
                {data?.map((item, id) => (
                    <SwiperSlide key={item.id}>
                            <ModiWeekCard product={item} id={id}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ModiWeekSlider