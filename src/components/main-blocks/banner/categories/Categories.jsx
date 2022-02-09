import {Cat} from "../../../constants/main-page/categories";
import './categories.scss';
import {Link} from "react-router-dom";
const Categories = () => {
    return (
        <div className={'categories'}>
            {Cat.map(({id, productType, img_src}) => (
                <div key={id} className="categories__item ">
                    <img className={'categories__img'} src={img_src} alt={productType}/>
                    <Link to={`/${productType}`} className="categories__title content-white-bg-small">{productType}</Link>
                </div>
            ))}
        </div>
    );
}
export {Categories};