import React, {useState} from "react";
import sizeGuide from "../../pages/product-page/assets/sizes.png";

const ProductSetSize = ({sizes}) => {
    const [size, setSize] = useState(sizes[0]);
    const [isChosen, setChosen] = useState(0);
    return (
        <div className="product-info__size border-bottom">
            <div className={'product-info__text'}>
                <span className="product-info__name">SIZE: </span>
                <span className={'product-info__value'}>{size}</span>
            </div>
            <div className="product-info__values">
                {sizes.map((item, index) => (
                    <button className={`product__size ${isChosen === index ? 'active' : ''}`} key={index}
                            onClick={() => {
                                setSize(item);
                                setChosen(index);
                            }}>
                        <span>{item}</span>
                    </button>
                ))}
            </div>
            <div className="product-info__size-guide">
                <button className={'size-guide'}>
                    <img src={sizeGuide} alt=""/>
                    <span>Size guide</span>
                </button>

            </div>
        </div>
    )
}
export default ProductSetSize;