import React, {useState} from "react";
import Clothes from "../../clothes/Clothes";
import {MAIN_CLOTHES_BLOCK_MENU} from "../../constants/main-clothes-block-menu";
import {PRODUCTS} from "../../constants/products";

const MenClothes = () => {
    const [particular, setParticular] = useState(MAIN_CLOTHES_BLOCK_MENU[0].particularName);
    const [isChosen, setChosen] = useState(0);
    let products;
    products = PRODUCTS['men'].filter(el => {
        return el.particulars[particular] === true;
    })

    return (
        <>
            <div className="men-clothes">
                <div className="container">
                    <div className={'clothes__top'}>
                        <div className="clothes__top-title">
                            <h2 className=" title-h2">Men's</h2>
                        </div>
                        <div className="clothes__top-tabs tabs">
                            <div className="tabs__list">
                                {MAIN_CLOTHES_BLOCK_MENU.map(({particularName, name, id}, index) => {
                                    return (
                                        <button className={`tabs__item ${isChosen === index ? 'active' : ''}`} key={id}
                                                data-test-id={`clothes-men-${particularName}`}
                                                onClick={() => {
                                                    setParticular(particularName);
                                                    setChosen(index);
                                                }}>{name}</button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <Clothes productType={'men'} products={products}/>
                </div>
            </div>
        </>
    );
}
export default MenClothes;