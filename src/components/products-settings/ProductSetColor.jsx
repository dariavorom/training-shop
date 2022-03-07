import React, {useState} from "react";

const ProductSetColor = ({images}) => {
    function filterByProp(arr, prop) {
        let colorsObg = {};
        return arr.filter(item => {
            if (colorsObg[item[prop]]) {
                return false;
            } else {
                colorsObg[item[prop]] = true;
                return true;
            }
        });
    }
    const colors = filterByProp(images, "color");
    const [color, setColor] = useState(colors[0].color);
    const [isChosen, setChosen] = useState(0);
    return (
        <>
            <div className="product-info__color">
                <div className={'product-info__text'}>
                    <span className="product-info__name">COLOR: </span>
                    <span className={'product-info__value'}>{color}</span>
                </div>
                <div className="product-info__values">
                    {colors.map(({url, id, color}, index) => {
                            return (
                                <button className={`product__color ${isChosen === index  ? 'active' : ''}`} key={id} onClick={() => {
                                    setColor(color);
                                    setChosen(index);
                                }}>
                                    <img src={`https://training.cleverland.by/shop${url}`} alt=""/>
                                </button>
                            )
                        }
                    )}
                </div>
            </div>
        </>
    )
}
export default ProductSetColor;