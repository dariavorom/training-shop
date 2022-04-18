import React from "react";

import {Slider} from './slider/Slider';
import {Categories} from "./categories/Categories";

import './banner.scss';

const Banner = () => (
    <div className={'main-banner'}>
        <div className="container">
            <div className="banner-wrapper">
                <Slider/>
                <Categories/>
            </div>
        </div>
    </div>
);

export {Banner};