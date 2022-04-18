import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {PRODUCTS} from "../constants/products";

import './filter.scss';

import viewList from './assets/view-list.svg';
import viewGrid from './assets/view-grid.svg';

const Filter = ({onInputCheck}) => {
    const {productType} = useParams();
    const products = PRODUCTS[productType];
    const [isActive, toggleActive] = useState(false);

    const colors = new Set();
    const sizes = new Set();
    const brand = new Set();
    const price = new Set();
    products.forEach(el => el.images.forEach(item => colors.add(item.color)))
    products.forEach(el => el.sizes.forEach(item => sizes.add(item)))
    products.forEach(el => brand.add(el.brand))
    products.forEach(el => {
        return el.price <= 50 ? price.add(`${el.price} - 50`) :
            (el.price >= 50 && el.price <= 100) ? price.add('50 - 100') :
                (el.price >= 100 && el.price <= 150) ? price.add('100 - 150') :
                    (el.price >= 150 && el.price <= 200) ? price.add('150 - 200') :
                        (el.price >= 200 && el.price <= 250) ? price.add('200 - 250') :
                            (el.price >= 250 && el.price <= 300) ? price.add('250 - 300') :
                                false
    })
    const colorsArr = [...colors];
    const sizesArr = [...sizes];
    const brandArr = [...brand];
    const priceArr = [...price];
    useEffect(() => {
        document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false)
        toggleActive(false)
    }, [productType])
    return (
        <div className='products-filter filter'>
            <div className="container">
                <div className="filter-actions">
                    <div className="filter__action-item filter__btn">
                        <button data-test-id="filter-button" onClick={() => toggleActive(!isActive)}
                                className={`filter-btn ${isActive ? 'active' : ''}`}>
                            <span>filter</span>
                        </button>
                    </div>
                    <div className="filter__action-item filter__view">
                        <button className='filter__view-list'>
                            <img src={viewList} alt=""/>
                        </button>
                        <button className='filter__view-grid'>
                            <img src={viewGrid} alt=""/>
                        </button>
                    </div>
                </div>
                <div className={`filter-wrapper ${isActive ? 'active' : ''}`}>
                    <div className="filter__group-wrapper">
                        <div className="filter__group-title">color</div>
                        <div className="filter__group" data-test-id={'filters-color'}>
                            {colorsArr.map(el => {
                                return (
                                    <label htmlFor={el} key={el}>
                                        <input id={el} type={"checkbox"} value={el} data-test-id={`filter-color-${el}`}
                                               onChange={e => onInputCheck(e, 'color')}/>
                                        <span className={'label-name'}>{el}</span>
                                    </label>
                                )
                            })}
                        </div>
                    </div>
                    <div className="filter__group-wrapper">
                        <div className="filter__group-title">size</div>
                        <div className="filter__group" data-test-id={'filters-size'}>
                            {sizesArr.map(el => {
                                return (
                                    <label htmlFor={el} key={el}>
                                        <input id={el} type={"checkbox"} value={el} data-test-id={`filter-size-${el}`}
                                               onChange={e => onInputCheck(e, 'sizes')}/>
                                        <span className={'label-name'}>{el}</span>
                                    </label>
                                )
                            })}
                        </div>
                    </div>
                    <div className="filter__group-wrapper">
                        <div className="filter__group-title">brand</div>
                        <div className="filter__group" data-test-id={'filters-brand'}>
                            {brandArr.map(el => {
                                return (
                                    <label htmlFor={el} key={el}>
                                        <input id={el} type={"checkbox"} value={el} data-test-id={`filter-brand-${el}`}
                                               onChange={e => onInputCheck(e, 'brand')}/>
                                        <span className={'label-name'}>{el}</span>
                                    </label>
                                )
                            })}
                        </div>
                    </div>
                    <div className="filter__group-wrapper">
                        <div className="filter__group-title">price</div>
                        <div className="filter__group">
                            {priceArr.map(el => {
                                return (
                                    <label htmlFor={el} key={el}>
                                        <input id={el} type={"checkbox"} value={el}
                                               onChange={e => onInputCheck(e, 'price')}/>
                                        <span className={'label-name'}>{el}</span>
                                    </label>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Filter;