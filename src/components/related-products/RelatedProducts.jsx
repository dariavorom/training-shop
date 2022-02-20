import React from "react";
import {ClothesRelated} from "../constants/clothes-related";
import {Link, useParams} from "react-router-dom";
import {SvgGenerator} from "../svg-generator/SvgGenerator";
import arrow from "../../assets/arrow.svg";
import './related-products.scss';
import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';

const RelatedProducts = () => {
    const prodList = ClothesRelated;
    const {productType} = useParams();
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    return (
        <div className={'related'}>
            <div className="container">
                <h2 className={'title-h2'}>related products</h2>
                <div className="clothes">
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
                        onSlideChange={() => console.log('slide change')}
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
                        {prodList.map(({id, name, price, oldPrice, sale, raiting, img_src}) => (
                            <SwiperSlide key={id}>
                                <Link to={`/${productType}/${id}`} className={'cards-item'}
                                      data-test-id={`clothes-card-${productType}`}>
                                    <div className={'cards-item__img-container'}><img src={img_src} alt=""
                                                                                      className={'cards-item__img'}/>
                                    </div>
                                    <span className="cards-item__title">{name}</span>

                                    <span className="cards-item__price">$ {price}</span>
                                    {oldPrice !== '' &&
                                        <span
                                            className={'cards-item__price cards-item__price--old'}>$ {oldPrice}</span>}
                                    <span className={'cards-item__raiting'}>
                        <SvgGenerator id={'star'}/>
                        <SvgGenerator id={'star'}/>
                        <SvgGenerator id={'star'}/>
                        <SvgGenerator id={'star'}/>
                        <SvgGenerator id={'star'} className={'grey'}/>
                    </span>
                                    <span className={'sticker sticker-sale'}>{sale}</span>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </div>
    )
}
export default RelatedProducts;