'use client'
import { images } from '@lib/images'
import { M_img } from '@lib/images'
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@/styles/swslide/style.css'

export default function Slide(){

  return(
    <>
      
        <Swiper
          pagination={{
          type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
        {images.map((img, i)=>{
          return(
            <SwiperSlide className='desk__slide' key={i}><Image src={img.src}/></SwiperSlide>
              )
          })}

        {M_img.map((img, i)=>{
          return(
            <SwiperSlide className='M__slide' key={i}><Image src={img.src}/></SwiperSlide>
              )
          })}   
        </Swiper>
            

      {/* <slide className='desk__slide'>
        <Swiper
          pagination={{
          type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
        {images.map((img, i)=>{
          return(
            <SwiperSlide key={i}><Image src={img.src}/></SwiperSlide>
              )
          })}
        </Swiper>

      </slide>
      <slide className='M__slide'>
        <Swiper
          pagination={{
          type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
        {M_img.map((img, i)=>{
          return(
            <SwiperSlide key={i}><Image src={img.src}/></SwiperSlide>
              )
          })}
        </Swiper>

      </slide> */}
    </>
  );
}