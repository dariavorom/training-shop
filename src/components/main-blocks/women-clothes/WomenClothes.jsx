import React, {useState} from "react";
import Clothes from "../../clothes/Clothes";
import CategoriesHeader from "../categories-header/CategoriesHeader";
import {PRODUCTS} from "../../constants/products";
import {MAIN_CLOTHES_BLOCK_MENU} from "../../constants/main-clothes-block-menu";

const WomenClothes = () => {
    const [particular, setParticular] = useState(MAIN_CLOTHES_BLOCK_MENU[0].particularName);
    const [isChosen, setChosen] = useState(0);
    let products = {};
    products = PRODUCTS['women'].filter(el => {
        return el.particulars[particular] === true;
    })

    return (
        <>
            <div className="women-clothes">
                <div className="container">
                    <div className={'clothes__top'}>
                        <div className="clothes__top-title">
                            <h2 className=" title-h2">Women's</h2>
                        </div>
                        <div className="clothes__top-tabs tabs">
                            <ul className="tabs__list">
                                {MAIN_CLOTHES_BLOCK_MENU.map(({particularName, name, id}, index) => {
                                    return (
                                        <li className={`tabs__item ${isChosen === index ? 'active' : ''}`} key={id}
                                            data-test-id={`clothes-women-${particularName}`}
                                            onClick={() => {
                                                setParticular(particularName);
                                                setChosen(index);
                                            }}>{name}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <Clothes productType={'women'} products={products}/>
                </div>
            </div>
        </>

    );
}
export default WomenClothes;
