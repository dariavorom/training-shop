import {Link, useParams} from "react-router-dom";
import ProductHeader from "../../components/product-header/ProductHeader";
import ScrollToTop from "../../components/scrolltotop/ScrollToTop";
import ProductSlider from "../../components/product-slider/ProductSlider";
import Reviews from "../../components/reviews/Reviews";
import './productPage.scss';
import favorite from './assets/favorite.svg';
import compare from './assets/compare.svg';
import shipping from './assets/shipping.png';
import returnImg from './assets/return.png';
import ask from './assets/ask.png';
import {PAYMENTS} from "../../components/constants/payments";
import RelatedProducts from "../../components/related-products/RelatedProducts";
import {PRODUCTS} from "../../components/constants/products";
import ProductAdditional from "../../components/products-settings/ProductAdditional";
import ProductSetColor from "../../components/products-settings/ProductSetColor";
import ProductSetSize from "../../components/products-settings/ProductSetSize";
import {connect} from 'react-redux';
import {addItem, removeItemById} from "../../redux/cart.actions";
import {useEffect, useState} from "react";

const ProductPage = ({items, addItem, removeItem}) => {
    const {productType} = useParams();
    const {path} = useParams();
    let prodList = PRODUCTS[productType];
    let product = [];
    prodList.forEach((item) => {
        if (item.id === path) {
            return (product = item);
        }
    });
    const filterByProp = (arr, prop) => {
        let colorsObg = {};
        let newArr;
        newArr = arr.filter(item => {
            if (colorsObg[item[prop]]) {
                return false;
            } else {
                colorsObg[item[prop]] = true;
                return true;
            }
        });
        return newArr;
    }
    const colors = filterByProp(product.images, "color");
    const [size, setSize] = useState(product.sizes[0]);
    const [isChosenSize, setChosenSize] = useState(0);
    const [color, setColor] = useState(colors[0].color);
    const [isChosenColor, setChosenColor] = useState(0);
    const generateId = product.id + '-' + size + '-' + color;
    let cartItem = {
        ...product,
        id: generateId.replace(' ', ''),
        sizes: size,
        color: color,
    };
    const curQuantity = items.filter(item => item.id === cartItem.id).length;
    const setImageToCart = () => {
        cartItem.image = `https://training.cleverland.by/shop${colors.filter(item => item.color === color)[0].url}`
    }
    function actions() {
        if (curQuantity === 0) {
            addItem(cartItem);
        } else {
            removeItem(cartItem.id)
        }
    }

    useEffect(() => {
        setSize(product.sizes[0]);
        setChosenSize(0);
        setColor(colors[0].color);
        setChosenColor(0)
    }, [path])
    return (
        <>
            <ScrollToTop/>
            <main className={'page-product'} data-test-id={`product-page-${productType}`}>
                <ProductHeader product={product}/>
                <div className="product-wrapper">
                    <div className="container">
                        <div className="product">
                            <ProductSlider images={product.images}/>
                            <div className="product-info">
                                <ProductSetColor colors={filterByProp(product.images, "color")} color={color}
                                                 setColor={setColor}
                                                 isChosenColor={isChosenColor} setChosenColor={setChosenColor}/>
                                <ProductSetSize sizes={product.sizes} size={size} setSize={setSize}
                                                isChosenSize={isChosenSize} setChosenSize={setChosenSize}/>
                                <div className="product-info__actions border-bottom">
                                    <div className="product__price">
                                        <span className={'cur-price'}>$ {(product.price).toFixed(2)}</span>
                                    </div>
                                    <div className="product__addToCart">
                                        <button data-test-id='add-cart-button' className={'btn-dark addToCart'}
                                                onClick={() => {
                                                    setImageToCart();
                                                    actions();
                                                }}>
                                            {curQuantity === 0 ? 'Add to card' : 'remove to card'}
                                        </button>
                                    </div>
                                    <div className="product__like-icons">
                                        <button className="favorite"><img src={favorite} alt=""/></button>
                                        <button className="compare"><img src={compare} alt=""/></button>
                                    </div>
                                </div>
                                <div className="product-info__help border-bottom">
                                    <button className="product-info__help-item">
                                        <img src={shipping} alt=""/>
                                        <span>Shipping & Delivery</span>
                                    </button>
                                    <button className="product-info__help-item">
                                        <img src={returnImg} alt=""/>
                                        <span>Returns & Exchanges</span>
                                    </button>
                                    <button className="product-info__help-item">
                                        <img src={ask} alt=""/>
                                        <span>Ask a question</span>
                                    </button>
                                </div>
                                <div className="product-info__payments border-bottom">
                                    <span className="product-info__payments-title product-info__name black">
                                        guaranteed safe checkout
                                    </span>
                                    <div className="payments">
                                        {PAYMENTS.map(({id, name, image}) => (
                                            <Link key={id} to={'/'}><img src={image} alt={name}/></Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="product-info__description border-bottom">
                                    <span className="product-info__name">DESCRIPTION</span>
                                </div>
                                <ProductAdditional sizes={product.sizes} productColor={product.images}
                                                   material={product.material}/>
                                {product.reviews.length > 0 ? <Reviews reviews={product.reviews}/> : null}
                            </div>
                        </div>
                    </div>
                </div>
                <RelatedProducts/>
            </main>
        </>
    );
}
const mapStateToProps = ({cart: {cartItems}}) => ({
    items: cartItems,
});
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: id => dispatch(removeItemById(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);