import React from "react";
import {Link, useParams} from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import './related-products.scss';
import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import {PRODUCTS} from "../constants/products";
import Rating from "../raiting/Raiting";

const RelatedProducts = () => {
    const {productType} = useParams();
    const prodList = PRODUCTS[productType];
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
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
                    <Swiper
                        className={'related-slider'}
                        modules={[Navigation]}
                        slidesPerView={1}
                        spaceBetween={20}
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
                        breakpoints={{
                            360: {
                                slidesPerView: 2,
                            },
                            720: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {prodList.map(({id, name, price, discount, images, reviews}) => {
                            let oldPrice;
                            if (discount) {
                                oldPrice = (price / ((100 - discount.replace(/[^0-9]/g, '')) / 100)).toFixed(2);
                            }
                            return (
                                <SwiperSlide key={id}>
                                    <Link key={id} to={`/${productType}/${id}`} className={'cards-item'}
                                          data-test-id={`clothes-card-${productType}`}>
                                        <div className={'cards-item__img-container'}>
                                            <img src={`https://training.cleverland.by/shop${images[0]?.url}`} alt=""
                                                 className={'cards-item__img'}/>
                                        </div>
                                        <span className="cards-item__title">{name}</span>
                                        <span className="cards-item__price">$ {price}</span>
                                        {discount !== null &&
                                            <span
                                                className={'cards-item__price cards-item__price--old'}>{oldPrice}</span>}
                                        <span className={'cards-item__raiting'}>
                        <Rating rating={reviews}/>
                    </span>
                                        <span className={'sticker sticker-sale'}>{discount}</span>
                                    </Link>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>

            </div>
        </div>
    )
}
export default RelatedProducts;