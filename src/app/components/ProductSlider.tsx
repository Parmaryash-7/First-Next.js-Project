'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
// import 


type Image = {
    image: string;
};

const images: Image[] = [
    { image: 'images/7.png' },
    { image: 'images/7.png' },
    { image: 'images/7.png' },
    { image: 'images/7.png' },
    { image: 'images/7.png' },
    // { image: 'images/7.png' },
];

export default function FullPageSwiper() {
    const [currentSlide, setCurrentSlide] = useState(1);
    const swiperRef = useRef<SwiperType | null>(null);

    const [navReady, setNavReady] = useState(false);
    useEffect(() => {
        setNavReady(true);
    }, []);

    return (
        <div style={{ height: '100svh', position: 'relative', background: '#000', overflow: 'hidden' }}>
            {navReady && (
                <Swiper
                    modules={[Navigation, Keyboard, Autoplay]}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
                    keyboard={{ enabled: true }}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    {images.map((img, id) => (
                        <SwiperSlide key={id}>
                            <img
                                src={img.image}
                                alt={`Slide ${id + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100vh',
                                    objectFit: 'cover',
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

            <div className="swiper-details">
                <div className="inner-flex">
                    <h2>
                        Innovation with Integrity
                    </h2>
                    <div className="flex-row">
                        <span className="material-symbols-outlined arrow">
                            arrow_downward_alt
                        </span>
                        <p>Scroll to learn more</p>
                    </div>
                </div>
                <div className="custom-navigation">
                    <div className="flex-row alc">
                    <span>{currentSlide.toString().padStart(2, '0')}</span>
                    <div className="progress-bar">
                        <div
                            className="progress"
                            style={{ width: `${(currentSlide / images.length) * 100}%` }}
                        ></div>
                    </div>
                    <span>{images.length.toString().padStart(2, '0')}</span>
                    <button className="swiper-button-prev-custom">
                        <span className="material-symbols-outlined">keyboard_arrow_left</span>
                    </button>
                    <button className="swiper-button-next-custom">
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
                </div>
            </div>
        </div >
    );
}
