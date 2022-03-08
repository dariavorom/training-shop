import arrow from '../../assets/arrow.svg';
import React, {useState} from "react";
import './product-slider.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import {useParams} from "react-router-dom";

const ProductSlider = ({images}) => {
    const {path} = useParams();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="product-slider slider"  data-test-id={'product-slider'}>
            <div className="slider__slides">
                <button className={'arrow arrow-prev'}>
                    <img src={arrow} alt=""/>
                </button>
                <button className={'arrow arrow-next'}>
                    <img src={arrow} alt=""/>
                </button>
                <Swiper
                    id={"slider__slides"}
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
                </Swiper>
            </div>
            <div className="slider__thumbnails">
                <button className={'arrow arrow-prev arrow-top'}>
                    <img src={arrow} alt=""/>
                </button>
                <button className={'arrow arrow-next arrow-bot'}>
                    <img src={arrow} alt=""/>
                </button>
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