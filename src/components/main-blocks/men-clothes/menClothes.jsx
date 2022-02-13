import Clothes from "../clothes/Clothes";
import CategoriesHeader from "../categories-header/CategoriesHeader";
const MenClothes = () => {
    return (
        <>
            <div className="men-clothes">
                <div className="container">
                    <CategoriesHeader name={'men\'s'}/>
                    <Clothes productType={'men'}/>
                </div>
            </div>
        </>
    );
}
export default MenClothes;