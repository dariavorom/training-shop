import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";

import {CardsItem} from "../cardsItem/CardsItem";

import 'swiper/css';
import 'swiper/css/navigation';
import './relatedProducts.scss';

import arrow from "../../assets/arrow.svg";

export const RelatedProducts = ({products}) => {
    const {productType} = useParams();
    const [prodList, setProdList] = useState(products);
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    const params = {
        className: 'related-slider',
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 20,
        navigation:
            {
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
            }
        ,
        onBeforeInit: (swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
        },
        breakpoints: {
            360: {
                slidesPerView: 2,
            },
            720: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        }
    }
    const slides = prodList.map((card) => {
        return (
            <SwiperSlide key={card.id}>
                <CardsItem cardsItem={card} productType={productType}/>
            </SwiperSlide>
        )
    })

    const Slider = () => {
        return (
            <Swiper {...params}>
                {slides}
            </Swiper>
        )
    }
    useEffect(() => {
        setProdList(products)
    }, [productType])
    return (
        <div className={'related'}>
            <div className="container">
                <h2 className={'title-h2'}>related products</h2>
                <div className="clothes" data-test-id={'related-slider'}>
                    <button className={'arrow arrow-prev'} ref={navigationPrevRef}>
                        <img src={arrow} alt=""/>
                    </button>
                    <button className={'arrow arrow-next'} ref={navigationNextRef}>
                        <img src={arrow} alt=""/>
                    </button>
                    <Slider/>
                </div>
            </div>
        </div>
    )
}