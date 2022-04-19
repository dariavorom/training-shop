import React from 'react';
import {SvgGenerator} from "../svgGenerator/SvgGenerator";

export const Rating = (props) => {
    const rating = props.rating;
    const arrRating = [];
    const arrStars = [];
    let countRating;
    rating.forEach(el => {
        arrRating.push(el.rating);
    })
    countRating = arrRating.reduce((a, b) => a + b, 0) / arrRating.length;
    arrStars.length = 5;
    for (let i = 0; i < arrStars.length; i++) {
        arrStars.fill('gold', 0, Math.round(countRating))
        arrStars.fill('grey', Math.round(countRating))
    }
    const stars = arrStars.map((item, index) => (
            <SvgGenerator id='star' className={item} key={index} color='#f1d545'/>
        )
    )
    return (
        <>
            {stars}
        </>
    )
}


