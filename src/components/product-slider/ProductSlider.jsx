import arrow from '../../assets/arrow.svg';
import React, {useState} from "react";
import './product-slider.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ProductSlider = ({images}) => {
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
                    prevEl: '.product-slider .arrow.arrow-prev',
                    nextEl: '.product-slider .arrow.arrow-next',
                }}
            >
                {images.map(({url, id}) => (
                    <SwiperSlide className="slider__slide" key={id}>
                        <img src={`https://training.cleverland.by/shop${url}`} alt=""/>
                    </SwiperSlide>
                ))}
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
                    direction={'horizontal'}
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
                    breakpoints={{
                        // when window width is >= 640px
                        600: {
                            direction: 'vertical'
                        },
                        // when window width is >= 768px
                    }}
                >
                    {images.map(({url, id}) => (
                        <SwiperSlide className="slider__thumbnail" key={id}>
                            {({isActive}) => (
                                <img src={`https://training.cleverland.by/shop${url}`} alt=""
                                     className={isActive ? 'active' : 'not-active'}/>
                            )}
                        </SwiperSlide>
                    ))}
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