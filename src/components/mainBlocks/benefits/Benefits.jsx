import React from "react";

import {BENEFITS} from "../../constants/mainPage/benefits";

import './benefits.scss';

export const Benefits = () => (
    <div className={'benefits-wrapper'}>
        <div className="container">
            <div className={'benefits'}>
                {BENEFITS.map(({id, title, description, img_src}) => (
                    <div key={id} className={'benefits__item'}>
                        <img src={img_src} alt=""/>
                        <div className="benefits__content">
                            <div className="benefits__title">{title}</div>
                            <div className="benefits__description">{description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

