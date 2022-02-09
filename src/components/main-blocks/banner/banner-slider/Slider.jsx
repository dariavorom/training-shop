import {SLIDER} from "../../../constants/main-page/main-banner-slider";
import './slider.scss';
import arrow from '../../assets/slider/arrow.svg';
const Slider = () => {

    return (
        <div className={'main-slider'}>
            {SLIDER.map(({id, title, description, img_src}) => (
                <div key={id} className={'slide'}>
                    <img src={img_src} alt="" className={'slider__img'}/>
                    <div className="slide__content content-white-bg">
                        <div className="slide__title content-white-bg__title">{title}</div>
                        <div className="slide__description content-white-bg__description">{description}</div>
                    </div>
                </div>
            ))}
            <button className={'arrow arrow-prev'}>
                <img src={arrow} alt=""/>
            </button>
            <button className={'arrow arrow-next'}>
                <img src={arrow} alt="" />
            </button>

        </div>
    );
}
export {Slider};