import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';

import { testimonios } from '../../data'

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Testimonials = () => {
    return (
        <>

            <Swiper
                spaceBetween={5}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    "delay": 5000,
                    "disableOnInteraction": false
                }}
                pagination={{
                    "clickable": true
                }}
                navigation={false} className="mySwiper"
            >

                {
                    testimonios.map(({ img, title, content }, i) => (
                        <SwiperSlide key={i}>
                            <div className='align-self-center'>
                                <div className="testimonio-img mb-3 mx-auto">{img}</div>
                                <p className="text-primary font-weight-bold lead">{title}</p>
                                <div className="testimonio mx-auto text-muted mb-3"><blockquote>{content}</blockquote></div>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>

        </>

    )
}

export default Testimonials
