import React from "react";
import {Link} from "react-router-dom";

import './productsHeader.scss';

import share from './assets/share.svg';

export const ProductsHeader = (props) => {
    let breadCur = props.name[0].toUpperCase() + props.name.substring(1)
    return (
        <div className={'products-header'}>
            <div className="container">
                <div className="products-header-wrapper">
                    <div className="products-header__top">
                        <div className="products__breadcrumbs breadcrumbs">
                            <Link to={'/'}><span>Home</span></Link>
                            <span className={'breadcrumbs__arrow'}>►</span>
                            <span className={'breadcrumbs__cur'}>{breadCur}</span>
                        </div>
                        <div className="products__share">
                            <a className={'products-header__share'} href="#"><img src={share} alt=""/><span>Share</span></a>
                        </div>
                    </div>
                   <div className="products-header__bottom">
                       <h1 className="products-header__title title-h1">
                           {props.name}
                       </h1>
                   </div>
                </div>
            </div>
        </div>

    );
}