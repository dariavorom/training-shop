import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {useSelector} from "react-redux";

import CardsItem from "../../components/cardsItem/CardsItem";
import ProductsHeader from "../../components/productsHeader/ProductsHeader";
import Filter from "../../components/filter/Filter";

import loading from '../../assets/loading.gif';

import './productsPage.scss';

const ProductsPage = () => {
    const {productType} = useParams();
    const productsInit = useSelector(state => state.productsSlice.products[productType])
    const [color, setColor] = useState([])
    const [sizes, setSize] = useState([])
    const [brand, setBrand] = useState([])
    const [price, setPrice] = useState([])
    const [products, setProducts] = useState([])
    let selected = {};
    const onInputCheck = ({target: {checked, value}}, type) => {
        if (type === 'color') {
            setColor((!color.includes(value) && checked)
                ? [...color, value]
                : color.filter(n => n !== value)
            );
        }
        if (type === 'sizes') {
            setSize((!sizes.includes(value) && checked)
                ? [...sizes, value]
                : sizes.filter(n => n !== value)
            );
        }
        if (type === 'brand') {
            setBrand((!brand.includes(value) && checked)
                ? [...brand, value]
                : brand.filter(n => n !== value)
            );
        }
        if (type === 'price') {
            setPrice((!price.includes(value) && checked)
                ? [...price, value]
                : price.filter(n => n !== value)
            );
        }
    };

    function filter(array = [], filters = {}) {
        array = array.filter(elem => {
            let colors = [];
            elem['images'].forEach(item => {
                colors.push(item.color)
            })
            return (filters['sizes'].length > 0 ? filters['sizes'].filter(el => elem['sizes'].includes(el))[0] : true) &&
                (filters['color'].length > 0 ? filters['color'].filter(el => colors.includes(el))[0] : true) &&
                (filters['brand'].length > 0 ? filters['brand'].includes(elem['brand']) : true) &&
                (filters['price'].length > 0 ? filters['price'].filter(el => (elem['price'] >= el.split(' - ')[0]) && (elem['price'] <= el.split(' - ')[1]))[0] : true)
        })
        return array
    }

    function isNotEmpty() {
        let flag = false;
        for (const selectedKey in selected) {
            if (selected[selectedKey].length !== 0) {
                flag = true;
                break
            }
        }
        return flag
    }

    selected.color = color;
    selected.sizes = sizes;
    selected.brand = brand;
    selected.price = price;
    useEffect(() => {
        let filtered = filter(productsInit, selected)
        !isNotEmpty() ? setProducts(productsInit) : setProducts(filtered)
    }, [color, brand, sizes, price, productType])
    useEffect(() => {
        setBrand([])
        setColor([])
        setSize([])
        setPrice([])
        setProducts(productsInit)
    }, [productType])
    useEffect(() => {
        setProducts(productsInit)
    }, [productsInit])
    return (
        <>
            <main className="products-page" data-test-id={`products-page-${productType}`}>
                <ProductsHeader name={productType}/>
                <Filter onInputCheck={onInputCheck}/>
                {isNotEmpty() ?
                    <div className="filter-result">
                        <div className="container">
                            <div className="filter-result__items">
                                <div
                                    className={'filter-result__item total'}>{products.length} {products.length === 1 ? 'item' : 'items'} found
                                </div>
                                {selected.color.length ?
                                    <div
                                        className={'filter-result__item'}>Color: {selected.color.slice().join(', ')}</div> : null}
                                {selected.sizes.length ? <div
                                    className={'filter-result__item'}>Size: {selected.sizes.slice().join(', ')}</div> : null}
                                {selected.brand.length ? <div
                                    className={'filter-result__item'}>Brand: {selected.brand.slice().join(', ')}</div> : null}
                                {/*{selected.price.length ?*/}
                                {/*    <div className={'filter-result__item'}>Price: {selected.price.slice().join(', ')}</div> : null}*/}
                            </div>
                        </div>
                    </div>
                    : null}
                <div className="clothes-wrapper">
                    <div className="container">
                        <div className={'clothes'} data-test-id={`clothes-${productType}`}>
                            {products.map((card) => {
                                return <CardsItem cardsItem={card} productType={productType} key={card.id}/>
                            })}
                        </div>
                        <img className={'loading'} src={loading} alt=""/>
                    </div>
                </div>
            </main>
        </>
    );
}
export default ProductsPage;