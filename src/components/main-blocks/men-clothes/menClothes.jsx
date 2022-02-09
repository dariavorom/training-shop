import ProductHeader from "../../products-header/ProductHeader";
import Clothes from "../clothes/Clothes";
import {ClothesMen} from "../../constants/clothes-men";
const MenClothes = () => {
    return (
        <>
            <div className="men-clothes">
                <div className="container">
                    <ProductHeader name={'men\'s'}/>
                    <Clothes productType={'men'} prodList={ClothesMen}/>
                </div>
            </div>
        </>
    );
}
export default MenClothes;