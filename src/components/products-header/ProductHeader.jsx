import './productsHeader.scss';
const ProductsHeader = (props) => {
    return (
        <div className={'products-header'}>
                <div className="products-header-wrapper">
                    <h2 className="products-header__title title-h2">
                        {props.name}
                    </h2>
                    <div className="products-header__tabs tabs">
                         <div className={'tabs__item active'}>NEW ARRIVALS</div>
                         <div className={'tabs__item'}>SPECIALS</div>
                         <div className={'tabs__item'}>BESTSELLERS</div>
                         <div className={'tabs__item'}>MOST VIEWED</div>
                         <div className={'tabs__item'}>FEATURED PRODUCTS</div>
                    </div>
                </div>
        </div>

    );
}
export default ProductsHeader;