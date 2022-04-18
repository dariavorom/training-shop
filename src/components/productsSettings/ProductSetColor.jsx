import React from "react";

const ProductSetColor = ({colors, color, setColor, isChosenColor, setChosenColor}) => (
    <div className="product-info__color">
        <div className={'product-info__text'}>
            <span className="product-info__name">COLOR: </span>
            <span className={'product-info__value'}>{color}</span>
        </div>
        <div className="product-info__values">
            {colors.map(({url, id, color}, index) => {
                    return (
                        <button className={`product__color ${isChosenColor === index ? 'active' : ''}`} key={id}
                                onClick={() => {
                                    setColor(color);
                                    setChosenColor(index);
                                }}>
                            <img src={`https://training.cleverland.by/shop${url}`} alt=""/>
                        </button>
                    )
                }
            )}
        </div>
    </div>
)
export default ProductSetColor;