import {useParams} from 'react-router-dom';
import './products-page.scss';
import CardsItem from "../../components/cards-item/CardsItem";
import ProductsHeader from "../../components/products-header/ProductsHeader";
import loading from '../../assets/loading.gif';
import Filter from "../../components/filter/Filter";
import ScrollToTop from "../../components/scrolltotop/ScrollToTop";
import {PRODUCTS} from "../../components/constants/products";
import {useEffect, useState} from "react";

const ProductsPage = () => {
    const {productType} = useParams();
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
        // const productsId = []
        // let products = []
        // products = array;
        // products.forEach(elem => {
        //         let colors = new Set()
        //         elem['images'].forEach(el => colors.add(el))
        //         elem['color'] = [...colors].map(el => el = el.color)
        //         elem['brands'] = elem['brand'].split()
        //     }
        // )
        // products = products.filter(elem => {
        //         const commonKeys = keys.filter(key => elem.hasOwnProperty(key));
        //         return commonKeys.reduce((flag, key) => {
        //             return flag && filters[key].map(el => elem[key].includes(el))[0]
        //         }, true);
        //     }
        // )

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
        let filtered = filter(PRODUCTS[productType], selected)
        !isNotEmpty() ? setProducts(PRODUCTS[productType]) : setProducts(filtered)
    }, [color, brand, sizes, price, productType])
    useEffect(() => {
        setBrand([])
        setColor([])
        setSize([])
        setPrice([])
        setProducts(PRODUCTS[productType])
    }, [productType])

    return (
        <>
            <ScrollToTop/>
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
                                {/*<div className={'filter-result__item'}>Price:</div>*/}
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