import './reviews.scss';
import write from '../../pages/product-page/assets/write.png';
import Rating from "../raiting/Raiting";

const Reviews = ({reviews}) => {
    return (
        <div className="product__reviews reviews border-bottom">
            <div className="reviews__top">
                <div className="reviews__top-left">
                    <span className="reviews__title product-info__name black">reviews</span>
                    <div className="reviews__quantity">
                        <div className="reviews__quantity-icons">
                           <Rating rating={reviews}/>
                        </div>
                        <div className="reviews__quantity-value"><span>{reviews.length} Reviews</span></div>
                    </div>
                </div>
                <div className="reviews__top-right">
                    <button className="reviews__write-btn">
                        <img src={write} alt=""/>
                        <span>Write a review</span>
                    </button>
                </div>
            </div>
            <div className="reviews__items">
                {reviews.map((item) => (
                    <div className="reviews__item" key={item.id}>
                        <div className="reviews__item-top">
                        <div className="reviews__item-author">{item.name}</div>
                    <div className="reviews__item-time">3 months ago </div>
                    <div className="reviews__item-icons">
                        <Rating rating={[item]}/>
                    </div>
                </div>
                    <div className="reviews__item-content">{item.text}</div>
                </div>
                    ))}
            </div>
        </div>
    )
}
export default Reviews;