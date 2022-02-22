import {useParams} from 'react-router-dom';
import './products-page.scss';
import CardsItem from "../../components/cards-item/CardsItem";
import ProductsHeader from "../../components/products-header/ProductsHeader";
import loading from '../../assets/loading.gif';
import Filter from "../../components/filter/Filter";
import ScrollToTop from "../../components/scrolltotop/ScrollToTop";

const ProductsPage = () => {
    const {productType} = useParams();
    return (
        <>
            <ScrollToTop/>
            <main className="products-page" data-test-id={`products-page-${productType}`}>
                <ProductsHeader name={productType}/>
                <Filter/>
                <div className="clothes-wrapper">
                    <div className="container">
                        <div className={'clothes'} data-test-id={`clothes-${productType}`}>
                            <CardsItem productType={productType}/>
                        </div>
                        <img className={'loading'} src={loading} alt=""/>
                    </div>
                </div>
            </main>
        </>
    );
}
export default ProductsPage;