import {Link} from "react-router-dom";
import starYellow from '../cards-item/assets/star-yellow.png';
import starGrey from '../cards-item/assets/star-grey.png';
import './cardsItem.scss';

const CardsItem = (props) => {
    let productType = props.productType;
    let prodList = props.prodList;
    return (
        <>
            {prodList.map(({id, title, price, oldPrice, raiting, img_src}) => (
                <Link key={id} to={`/${productType}/${id}`} className={'cards-item'}
                      data-test-id={`clothes-card-${productType}`}>
                    <img src={img_src} alt="" className={'cards-item__img'}/>
                    <span className="cards-item__title">{title}</span>
                    <span className="cards-item__price">{price}</span>
                    <span className="cards-item__price cards-item__price--old">{oldPrice}</span>
                    <span className={'cards-item__raiting'}>
                        <img src={starYellow} alt=""/>
                        <img src={starYellow} alt=""/>
                        <img src={starYellow} alt=""/>
                        <img src={starYellow} alt=""/>
                        <img src={starGrey} alt=""/>
                    </span>
                </Link>
            ))}
        </>
    );
}
export default CardsItem;