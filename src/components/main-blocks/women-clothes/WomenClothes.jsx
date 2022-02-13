import Clothes from "../clothes/Clothes";
import CategoriesHeader from "../categories-header/CategoriesHeader";
const WomenClothes = () => {
  return (
      <>
          <div className="women-clothes">
              <div className="container">
                  <CategoriesHeader name={'women\'s'}/>
                  <Clothes productType={'women'}/>
              </div>
          </div>
      </>

  );
}
export default WomenClothes;
