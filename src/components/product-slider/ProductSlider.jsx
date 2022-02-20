import arrow from '../../assets/arrow.svg';
import React, {useState, useEffect, useRef} from "react";
import slideImg from '../../../src/pages/product-page/assets/slider-img.jpg';
import Thumb01 from '../../../src/pages/product-page/assets/slider-thumb-01.jpg';
import Thumb02 from '../../../src/pages/product-page/assets/slider-thumb-02.jpg';
import Thumb03 from '../../../src/pages/product-page/assets/slider-thumb-03.jpg';
import Thumb04 from '../../../src/pages/product-page/assets/slider-thumb-04.jpg';
import './product-slider.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import {Controller, Navigation} from "swiper";
import "swiper/css";
import 'swiper/css/navigation';

const ProductSlider = () => {
    const navigationNextRef = React.useRef(null)
    const navigationPrevRef = React.useRef(null)
    const navigationNextRefThumb = React.useRef(null)
    const navigationPrevRefThumb = React.useRef(null)
    const [activeSlide, setActiveSlide] = useState(0);
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
    return (
        <div className="product-slider slider">
            <Swiper
                id={"slider__slides"}
                className={"slider__slides"}
                modules={[Controller, Navigation]}
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onSwiper={setFirstSwiper}
                controller={{ control: secondSwiper }}
            >
                <SwiperSlide className="slider__slide">
                    <img src={slideImg} alt=""/>
                </SwiperSlide>
                <SwiperSlide className="slider__slide">
                    <img src={slideImg} alt=""/>
                </SwiperSlide>
                <SwiperSlide className="slider__slide">
                    <img src={slideImg} alt=""/>
                </SwiperSlide>
                <SwiperSlide className="slider__slide">
                    <img src={slideImg} alt=""/>
                </SwiperSlide>
                <SwiperSlide className="slider__slide">
                    <img src={slideImg} alt=""/>
                </SwiperSlide>
                <button className={'arrow arrow-prev productArrowPrev'} ref={navigationPrevRef}>
                    <img src={arrow} alt=""/>
                </button>
                <button className={'arrow arrow-next productArrowNext'} ref={navigationNextRef}>
                    <img src={arrow} alt=""/>
                </button>
            </Swiper>
            <div className="slider__thumbnails">
                <button className={'arrow arrow-top'} ref={navigationPrevRefThumb}>
                    <img src={arrow} alt=""/>
                </button>
                <button className={'arrow arrow-bot'} ref={navigationNextRefThumb}>
                    <img src={arrow} alt=""/>
                </button>
                <Swiper
                    id={"slider__thumbnails"}
                    direction={'vertical'}
                    spaceBetween={10}
                    slidesPerView={4}
                    modules={[Controller, Navigation]}
                    navigation={{
                        nextEl: navigationNextRefThumb.current,
                        prevEl: navigationPrevRefThumb.current
                    }}
                    loop={true}
                    onSwiper={setSecondSwiper}
                    controller={{ control: firstSwiper }}
                >
                    <SwiperSlide className={'slider__thumbnail'}>
                        {({ isActive }) => (
                            <img src={slideImg} alt="" className={isActive ? 'active' : 'not-active'}/>
                        )}
                    </SwiperSlide>
                    <SwiperSlide className="slider__thumbnail">
                        {({ isActive }) => (
                            <img src={slideImg} alt="" className={isActive ? 'active' : 'not-active'}/>
                        )}
                    </SwiperSlide>
                    <SwiperSlide className="slider__thumbnail">
                        {({ isActive }) => (
                            <img src={slideImg} alt="" className={isActive ? 'active' : 'not-active'}/>
                        )}
                    </SwiperSlide>
                    <SwiperSlide className="slider__thumbnail">
                        {({ isActive }) => (
                            <img src={slideImg} alt="" className={isActive ? 'active' : 'not-active'}/>
                        )}
                    </SwiperSlide>
                    <SwiperSlide className="slider__thumbnail">
                        {({ isActive }) => (
                            <img src={slideImg} alt="" className={isActive ? 'active' : 'not-active'}/>
                        )}
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
export default ProductSlider;