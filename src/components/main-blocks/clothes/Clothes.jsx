import {Link} from "react-router-dom";
import CardsItem from "../../cards-item/CardsItem";
import './clothes.scss';

const Clothes = (props) => {
    let productType = props.productType;
    let prodList = props.prodList;
    return (
        <>
            <div className={'clothes'} data-test-id={`clothes-${productType}`}>
                <CardsItem productType={productType} prodList={prodList}/>

            </div>
            <Link to={productType} className={'clothes__link'}>see all</Link>
        </>

    );
}
export default Clothes;