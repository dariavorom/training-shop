import {Link} from "react-router-dom";
import CardsItem from "../../cards-item/CardsItem";
import './clothes.scss';

const Clothes = (props) => {
    let productType = props.productType;
    return (
        <>
            <div className={'clothes'} data-test-id={`clothes-${productType}`}>
                <CardsItem productType={productType}/>
            </div>
            <Link to={productType} className={'clothes__link'}>see all</Link>
        </>
    );
}
export default Clothes;