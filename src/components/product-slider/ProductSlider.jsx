import arrow from '../../assets/arrow.svg';
import React, {useState} from "react";
import slideImg from '../../../src/pages/product-page/assets/slider-img.jpg';
import './product-slider.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ProductSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="product-slider slider">
            <Swiper
                id={"slider__slides"}
                className={"slider__slides"}
                spaceBetween={10}
                thumbs={{swiper: thumbsSwiper}}
                modules={[FreeMode, Navigation, Thumbs]}
                navigation={{
                    prevEl: '.arrow.arrow-prev',
                    nextEl: '.arrow.arrow-next',
                }}
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
                <button className={'arrow arrow-prev'}>
                    <img src={arrow} alt=""/>
                </button>
                <button className={'arrow arrow-next'}>
                    <img src={arrow} alt=""/>
                </button>
            </Swiper>
            <div className="slider__thumbnails">
                <Swiper
                    id={"slider__thumbnails"}
                    direction={'vertical'}
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    slideToClickedSlide={true}
                    navigation={{
                        nextEl: '.arrow.arrow-bot',
                        prevEl: '.arrow.arrow-top'
                    }}
                >
                    <SwiperSlide className={'slider__thumbnail'}>
                        {({isActive}) => (
                            <img src={slideImg} alt="" className={isActive ? 'active' : 'not-active'}/>
                        )}
                    </SwiperSlide>
                    <SwiperSlide className={'slider__thumbnail'}>
                        {({isActive}) => (
                            <img src={slideImg} alt="" className={isActive ? 'active' : 'not-active'}/>
                        )}
                    </SwiperSlide>
                    <SwiperSlide className="slider__thumbnail">
                        {({isActive}) => (
                            <img src={slideImg} alt="" className={isActive ? 'active' : 'not-active'}/>
                        )}
                    </SwiperSlide>
                    <SwiperSlide className="slider__thumbnail">
                        {({isActive}) => (
                            <img src={slideImg} alt="" className={isActive ? 'active' : 'not-active'}/>
                        )}
                    </SwiperSlide>
                    <SwiperSlide className="slider__thumbnail">
                        {({isActive}) => (
                            <img src={slideImg} alt="" className={isActive ? 'active' : 'not-active'}/>
                        )}
                    </SwiperSlide>
                </Swiper>
                <button className={'arrow arrow-top'}>
                    <img src={arrow} alt=""/>
                </button>
                <button className={'arrow arrow-bot'}>
                    <img src={arrow} alt=""/>
                </button>
            </div>
        </div>
    );
}
export default ProductSlider;