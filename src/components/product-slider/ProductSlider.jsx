import arrow from '../../assets/arrow.svg';
import slideImg from '../../../src/pages/product-page/assets/slider-img.jpg';
import Thumb01 from '../../../src/pages/product-page/assets/slider-thumb-01.jpg';
import Thumb02 from '../../../src/pages/product-page/assets/slider-thumb-02.jpg';
import Thumb03 from '../../../src/pages/product-page/assets/slider-thumb-03.jpg';
import Thumb04 from '../../../src/pages/product-page/assets/slider-thumb-04.jpg';
import './product-slider.scss';

const ProductSlider = () => {
    return (
        <div className="product-slider slider">
            <div className="slider__slides">
                <div className="slider__slide">
                    <img src={slideImg} alt=""/>
                </div>
                <button className={'arrow arrow-prev'}>
                    <img src={arrow} alt=""/>
                </button>
                <button className={'arrow arrow-next'}>
                    <img src={arrow} alt=""/>
                </button>
            </div>
            <div className="slider__thumbnails">
                <button className={'arrow arrow-top'}>
                    <img src={arrow} alt=""/>
                </button>
                <button className={'arrow arrow-bot'}>
                    <img src={arrow} alt=""/>
                </button>
                <div className="slider__thumbnail">
                    <img src={Thumb01} alt=""/>
                </div>
                <div className="slider__thumbnail">
                    <img src={Thumb02} alt=""/>
                </div>
                <div className="slider__thumbnail">
                    <img src={Thumb03} alt=""/>
                </div>
                <div className="slider__thumbnail">
                    <img src={Thumb04} alt=""/>
                </div>

            </div>
        </div>
    );
}
export default ProductSlider;