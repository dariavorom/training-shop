import ProductHeader from "../../products-header/ProductHeader";
import Clothes from "../clothes/Clothes";
import {ClothesWomen} from "../../constants/clothes-women";
const WomenClothes = () => {
  return (
      <>
          <div className="women-clothes">
              <div className="container">
                  <ProductHeader name={'women\'s'}/>
                  <Clothes productType={'women'} prodList={ClothesWomen}/>
              </div>
          </div>
      </>

  );
}
export default WomenClothes;
