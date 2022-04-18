import React from "react";
import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";

import {SLIDER} from "../../../constants/mainPage/mainBannerSlider";

import './slider.scss';
import 'swiper/css';
import 'swiper/css/navigation';

import arrow from '../../../../assets/arrow.svg';

const Slider = () => {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    return (
        <div className={'main-slider'} data-test-id={'main-slider'}>
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                navigation={
                    {
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }
                }
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
            >
                {SLIDER.map(({id, title, description, img_src}) => (
                    <SwiperSlide key={id} className={'slide'}>
                        <img src={img_src} alt="" className={'slide__img'}/>
                        <div className="slide__content content-white-bg">
                            <div className="slide__title content-white-bg__title">{title}</div>
                            <div className="slide__description content-white-bg__description">{description}</div>
                        </div>
                    </SwiperSlide>
                ))}
                <button className={'arrow arrow-prev'} ref={navigationPrevRef}>
                    <img src={arrow} alt=""/>
                </button>
                <button className={'arrow arrow-next'} ref={navigationNextRef}>
                    <img src={arrow} alt=""/>
                </button>
            </Swiper>
        </div>
    );
}
export {Slider};