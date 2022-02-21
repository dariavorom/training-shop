import {Link} from "react-router-dom";
import './cardsItem.scss';
import {Clothes} from '../constants/clothes';
import {SvgGenerator} from "../svg-generator/SvgGenerator";

const CardsItem = (props) => {
    let productType = props.productType;
    const prodCat = Clothes.filter(function (item) {
        return item[productType];
    });
    let prodList = [];
    for (let prodListElementKey of prodCat) {
        prodList = prodListElementKey[productType].filter(
            function (item) {
                return item.category == productType;
            }
        )
    }
    return (
        <>
            {prodList.map(({id, name, price, oldPrice, sale, img_src}) => (
                <Link key={id} to={`/${productType}/${id}`} className={'cards-item'}
                      data-test-id={`clothes-card-${productType}`}>
                    <div className={'cards-item__img-container'}><img src={img_src} alt="" className={'cards-item__img'}/></div>
                    <span className="cards-item__title">{name}</span>

                    <span className="cards-item__price">$ {price}</span>
                    {oldPrice !== '' && <span className={'cards-item__price cards-item__price--old'}>$ {oldPrice}</span>}
                    <span className={'cards-item__raiting'}>
                        <SvgGenerator id={'star'}/>
                        <SvgGenerator id={'star'}/>
                        <SvgGenerator id={'star'}/>
                        <SvgGenerator id={'star'}/>
                        <SvgGenerator id={'star'} className={'grey'}/>
                    </span>
                    <span className={'sticker sticker-sale'}>{sale}</span>
                </Link>
            ))}
        </>
    );
}
export default CardsItem;