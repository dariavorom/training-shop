import './banner.scss';
import {Slider} from './banner-slider/Slider';
import {Categories} from "./categories/Categories";


const Banner = () => {

    return (
        <div className={'main-banner'}>
            <div className="container">
                <div className="banner-wrapper">
                    <Slider/>
                    <Categories/>
                </div>
            </div>
        </div>
    );
}
export {Banner};