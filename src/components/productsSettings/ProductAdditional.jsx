import React from "react";

export const ProductAdditional = ({sizes, productColor, material}) => {
    let colorArr = [];
    colorArr = productColor.map(el => {
        return colorArr[el] = el.color
    })
    function uniqueColor(arr) {
        const result = [];
        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str)
            }
        }
        return result;
    }
    const colors = uniqueColor(colorArr);
    return (
        <div className="product-info__additional border-bottom">
            <span className="product-info__name black">ADDITIONAL INFORMATION</span>
            <div className="product-info__additional-item">
                <span className={'name'}>Color: </span>
                <span className={'value'}>{colors.join(', ')}</span>
            </div>
            <div className="product-info__additional-item">
                <span className={'name'}>Size: </span>
                <span className={'value'}>{sizes.join(', ')}</span>
            </div>
            <div className="product-info__additional-item">
                <span className={'name'}>Material: </span>
                <span className={'value'}>{material}</span>
            </div>
        </div>
    )
}