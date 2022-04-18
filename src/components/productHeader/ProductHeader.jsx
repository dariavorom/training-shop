import React from "react";
import {Link} from "react-router-dom";

import Rating from "../raiting/Raiting";

import './productHeader.scss';

import share from './assets/share.svg';

const ProductHeader = (props) => {
    let product = props.product
    let cat = product.category[0].toUpperCase() + product.category.substring(1);
    return (
        <div className={'product-header'}>
            <div className="container">
                <div className="product-header-wrapper">
                    <div className="product-header__top">
                        <div className="product__breadcrumbs breadcrumbs">
                            <Link to={'/'}><span className={'breadcrumbs__path'}>Home</span></Link>
                            <span className={'breadcrumbs__arrow'}>►</span>
                            <Link to={`/${product.category}`}><span className={'breadcrumbs__path'}>{cat}</span></Link>
                            <span className={'breadcrumbs__arrow cur'}>►</span>
                            <span className={'breadcrumbs__path'}>{product.name}</span>
                        </div>
                    </div>
                    <div className="product-header__title">
                        <h1 className="title-h1">
                            {product.name}
                        </h1>
                    </div>
                    <div className="product-header__bottom">
                        <div className="product-header__raiting">
                            <div className="product-header__stars">
                                <Rating rating={product.reviews}/>
                            </div>
                            <span>{product.reviews.length} Reviews</span>
                        </div>
                        <div className="product-header__info">
                            <div className="product-header__info-item">
                                    <span className="name">SKU: </span>
                                    <span className="value">777</span>
                            </div>
                            <div className="product-header__info-item">
                                <span className="name">Availability: </span>
                                <span className="value">In Stock</span>
                            </div>
                        </div>
                        <div className="product-header__share">
                            <a className={''} href="#"><img src={share} alt=""/><span>Share</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default ProductHeader;