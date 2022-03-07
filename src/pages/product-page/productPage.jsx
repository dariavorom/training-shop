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

const ProductPage = () => {
    const {productType} = useParams();
    const {path} = useParams();
    let prodList = PRODUCTS[productType];
    let product = [];
    prodList.forEach((item) => {
        if (item.id === path) {
            return (product = item);
        }
    });
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
                                <ProductSetColor images={product.images}/>
                                <ProductSetSize sizes={product.sizes}/>
                                <div className="product-info__actions border-bottom">
                                    <div className="product__price">
                                        <span className={'cur-price'}>$ {product.price}</span>
                                    </div>
                                    <div className="product__addToCart">
                                        <button className={'btn addToCart'}>Add to card</button>
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
export default ProductPage;