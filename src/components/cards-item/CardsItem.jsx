import {Link} from "react-router-dom";
import './cardsItem.scss';
import Rating from "../raiting/Raiting";

const CardsItem = ({cardsItem: {id, name, price, discount, images, reviews}, productType}) => {
    let oldPrice;
    if (discount) {
        oldPrice = (price / ((100 - discount.replace(/[^0-9]/g, '')) / 100)).toFixed(2);
    }
    return (
        <>
            <Link to={`/${productType}/${id}`} className={'cards-item'}
                  data-test-id={`clothes-card-${productType}`}>
                <div className={'cards-item__img-container'}>
                    <img src={`https://training.cleverland.by/shop${images[0]?.url}`} alt=""
                         className={'cards-item__img'}/>
                </div>
                <span className="cards-item__title">{name}</span>
                <span className="cards-item__price">$ {price}</span>
                {discount !== null &&
                    <span className={'cards-item__price cards-item__price--old'}>
                        {oldPrice}
                    </span>}
                <span className={'cards-item__raiting'}>
                        <Rating rating={reviews}/>
                    </span>
                <span className={'sticker sticker-sale'}>{discount}</span>
            </Link>
        </>
    );
}
export default CardsItem;