import React from "react";
import {Link} from "react-router-dom";

import {CardsItem} from "../cardsItem/CardsItem";

import './clothes.scss';

const Clothes = ({productType, products}) => {
    return (
        <>
            <div className={'clothes'} data-test-id={`clothes-${productType}`}>
                {products.map((card) => {
                        return <CardsItem cardsItem={card} productType={productType} key={card.id}/>
                })}
            </div>
            <Link to={productType} className={'clothes__link btn-light'}>see all</Link>
        </>
    );
}
export default Clothes;