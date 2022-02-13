import {ClothesRelated} from "../constants/clothes-related";
import {Link, useParams} from "react-router-dom";
import {SvgGenerator} from "../svg-generator/SvgGenerator";
import arrow from "../../assets/arrow.svg";
import './related-products.scss';
const RelatedProducts = () => {
    const prodList = ClothesRelated;
    const {productType} = useParams();
  return (
      <div className={'related'}>
          <div className="container">
              <h2 className={'title-h2'}>related products</h2>
              <div className="clothes">
                  <button className={'arrow arrow-prev'}>
                      <img src={arrow} alt=""/>
                  </button>
                  <button className={'arrow arrow-next'}>
                      <img src={arrow} alt=""/>
                  </button>
                  {prodList.map(({id, name, price, oldPrice, sale, raiting, img_src}) => (
                      <Link key={id} to={`/${productType}/${id}`} className={'cards-item'}
                            data-test-id={`clothes-card-${productType}`}>
                          <img src={img_src} alt="" className={'cards-item__img'}/>
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
              </div>

          </div>
      </div>
  )
}
export default RelatedProducts;