import {Link, useParams} from "react-router-dom";
import ProductHeader from "../../components/product-header/ProductHeader";
import ScrollToTop from "../../components/scrolltotop/ScrollToTop";
import ProductSlider from "../../components/product-slider/ProductSlider";
import Reviews from "../../components/reviews/Reviews";
import './productPage.scss';
import sizeGuide from './assets/sizes.png';
import favorite from './assets/favorite.svg';
import compare from './assets/compare.svg';
import shipping from './assets/shipping.png';
import returnImg from './assets/return.png';
import ask from './assets/ask.png';
import color01 from './assets/color-01.png';
import color02 from './assets/color-02.png';
import color03 from './assets/color-03.png';
import color04 from './assets/color-04.png';
import {PAYMENTS} from "../../components/constants/payments";
import RelatedProducts from "../../components/related-products/RelatedProducts";
import {PRODUCTS} from "../../components/constants/products";

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
                <div className="product-wrapper" data-test-id={'product-slider'}>
                    <div className="container">
                        <div className="product">
                            <ProductSlider images={product.images}/>
                            <div className="product-info">
                                <div className="product-info__color">
                                    <div className={'product-info__text'}>
                                        <span className="product-info__name">COLOR: </span>
                                        <span className={'product-info__value'}>Blue</span>
                                    </div>
                                    <div className="product-info__values">
                                        <button className={'product__color active'}>
                                            <img src={color01} alt=""/>
                                        </button>
                                        <button className={'product__color'}>
                                            <img src={color02} alt=""/>
                                        </button>
                                        <button className={'product__color'}>
                                            <img src={color03} alt=""/>
                                        </button>
                                        <button className={'product__color'}>
                                            <img src={color04} alt=""/>
                                        </button>
                                    </div>
                                </div>
                                <div className="product-info__size border-bottom">
                                    <div className={'product-info__text'}>
                                        <span className="product-info__name">SIZE: </span>
                                        <span className={'product-info__value'}>s</span>
                                    </div>
                                    <div className="product-info__values">
                                        <button className={'product__color'}>
                                            <span>xs</span>
                                        </button>
                                        <button className={'product__color active'}>
                                            <span>s</span>
                                        </button>
                                        <button className={'product__color'}>
                                            <span>m</span>
                                        </button>
                                        <button className={'product__color'}>
                                            <span>l</span>
                                        </button>
                                    </div>
                                    <div className="product-info__size-guide">
                                        <button className={'size-guide'}>
                                            <img src={sizeGuide} alt=""/>
                                            <span>Size guide</span>
                                        </button>

                                    </div>
                                </div>
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
                                <div className="product-info__additional border-bottom">
                                    <span className="product-info__name black">ADDITIONAL INFORMATION</span>
                                    <div className="product-info__additional-item">
                                        <span className={'name'}>Color: </span>
                                        <span className={'value'}>Blue, White, Black, Grey</span>
                                    </div>
                                    <div className="product-info__additional-item">
                                        <span className={'name'}>Size: </span>
                                        <span className={'value'}>{product.sizes}</span>
                                    </div>
                                    <div className="product-info__additional-item">
                                        <span className={'name'}>Material: </span>
                                        <span className={'value'}>{product.material}</span>
                                    </div>
                                </div>
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