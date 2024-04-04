'use client';

import { serviceData } from '@/data';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SliderServices = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        768: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 3, spaceBetween: 15 },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] md:h-[340px] w-[250px] md:w-[550px]'
    >
      {serviceData.map(({ icon, title, description }, index) => (
        <SwiperSlide key={index}>
          <div className='flex px-6 py-8 h-auto md:h-[290px] rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-secundary border-2'>
            <div className='mb-4 text-4xl text-secundary'>{icon}</div>
            <div>
              <h3 className='mb-4 text-lg'>{title}</h3>
              <p className='text-sm'>{description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderServices;
