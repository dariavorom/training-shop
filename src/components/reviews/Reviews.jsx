import './reviews.scss';
import write from '../../pages/product-page/assets/write.png';
import {SvgGenerator} from "../svg-generator/SvgGenerator";

const Reviews = () => {
    return (
        <div className="product__reviews reviews border-bottom">
            <div className="reviews__top">
                <div className="reviews__top-left">
                    <span className="reviews__title product-info__name black">reviews</span>
                    <div className="reviews__quantity">
                        <div className="reviews__quantity-icons">
                            <SvgGenerator id={'star'}/>
                            <SvgGenerator id={'star'}/>
                            <SvgGenerator id={'star'}/>
                            <SvgGenerator id={'star'}/>
                            <SvgGenerator id={'star'}/>
                        </div>
                        <div className="reviews__quantity-value"><span>2 Reviews</span></div>
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
                <div className="reviews__item">
                    <div className="reviews__item-top">
                        <div className="reviews__item-author">Oleh Chabanov</div>
                        <div className="reviews__item-time">3 months ago </div>
                        <div className="reviews__item-icons">
                            <SvgGenerator id={'star'}/>
                            <SvgGenerator id={'star'}/>
                            <SvgGenerator id={'star'}/>
                            <SvgGenerator id={'star'}/>
                            <SvgGenerator id={'star'}/>
                        </div>
                    </div>
                    <div className="reviews__item-content">
                        On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment
                    </div>
                </div>
                <div className="reviews__item">
                    <div className="reviews__item-top">
                        <div className="reviews__item-author">ShAmAn design</div>
                        <div className="reviews__item-time">3 months ago</div>
                        <div className="reviews__item-icons">
                            <SvgGenerator id={'star'}/>
                            <SvgGenerator id={'star'}/>
                            <SvgGenerator id={'star'}/>
                            <SvgGenerator id={'star'}/>
                            <SvgGenerator id={'star'}/>
                        </div>
                    </div>
                    <div className="reviews__item-content">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</div>
                </div>
            </div>
        </div>
    )
}
export default Reviews;