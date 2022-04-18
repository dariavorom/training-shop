import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import './productSlider.scss';

import arrow from '../../assets/arrow.svg';

const ProductSlider = ({images}) => {
    const {path} = useParams();
    const [swiper, updateSwiper] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const paramsMainSlider = {
        id: "slider__slides",
        spaceBetween: 10,
        thumbs: {swiper: thumbsSwiper},
        modules: [FreeMode, Navigation, Thumbs],
        onBeforeInit: swiper => updateSwiper(swiper),
        navigation: {
            prevEl: '.product-slider .arrow.arrow-prev',
            nextEl: '.product-slider .arrow.arrow-next',
        },
    }
    const paramsThumbSlider = {
        id: "slider__thumbnails",
        direction: 'horizontal',
        onBeforeInit: setThumbsSwiper,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        modules: [FreeMode, Navigation, Thumbs],
        slideToClickedSlide: true,
        breakpoints: {
            // when window width is >= 640px
            600: {
                direction: 'vertical'
            },
            // when window width is >= 768px
        },
    }
    useEffect(() => {
        if (swiper && thumbsSwiper) {
            swiper.thumbs.swiper = thumbsSwiper
        }
    }, [images, swiper, path, thumbsSwiper])
    return (
        <div className="product-slider slider" data-test-id={'product-slider'}>
            <div className="slider__slides">
                <button className={'arrow arrow-prev'}>
                    <img src={arrow} alt=""/>
                </button>
                <button className={'arrow arrow-next'}>
                    <img src={arrow} alt=""/>
                </button>
                <Swiper {...paramsMainSlider}>
                    {images.map(({url, id}) => (
                        <SwiperSlide className="slider__slide" key={id}>
                            <img src={`https://training.cleverland.by/shop${url}`} alt=""/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="slider__thumbnails">
                <button className={'arrow arrow-prev arrow-top'}>
                    <img src={arrow} alt=""/>
                </button>
                <button className={'arrow arrow-next arrow-bot'}>
                    <img src={arrow} alt=""/>
                </button>
                <Swiper {...paramsThumbSlider}>
                    {images.map(({url, id}) => (
                        <SwiperSlide className="slider__thumbnail" key={id}>
                            <img src={`https://training.cleverland.by/shop${url}`} alt=""
                                 className={'slider__thumbnail-img'}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
export default ProductSlider;