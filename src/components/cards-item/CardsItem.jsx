import {Link} from "react-router-dom";
import './cardsItem.scss';
import {SvgGenerator} from "../svg-generator/SvgGenerator";
import {PRODUCTS} from "../constants/products";

const CardsItem = (props) => {
    const productType = props.productType;
    const prodList = PRODUCTS[productType];
    return (
        <>
            {prodList.map(({id, name, price, discount, images}) => (
                <Link key={id} to={`/${productType}/${id}`} className={'cards-item'}
                      data-test-id={`clothes-card-${productType}`}>
                    <div className={'cards-item__img-container'}>
                        <img src={`https://training.cleverland.by/shop${images[0]?.url}`} alt=""
                             className={'cards-item__img'}/>
                    </div>
                    <span className="cards-item__title">{name}</span>

                    <span className="cards-item__price">$ {price}</span>
                    {discount !== null &&
                        <span className={'cards-item__price cards-item__price--old'}/>}
                    <span className={'cards-item__raiting'}>
                        <SvgGenerator id={'star'}/>
                        <SvgGenerator id={'star'}/>
                        <SvgGenerator id={'star'}/>
                        <SvgGenerator id={'star'}/>
                        <SvgGenerator id={'star'} className={'grey'}/>
                    </span>
                    <span className={'sticker sticker-sale'}>{discount}</span>
                </Link>
            ))}
        </>
    );
}
export default CardsItem;