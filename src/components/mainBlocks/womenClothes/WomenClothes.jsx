import React, {useState} from "react";
import {useSelector} from "react-redux";

import Clothes from "../../clothes/Clothes";
import {MAIN_CLOTHES_BLOCK_MENU} from "../../constants/mainClothesBlockMenu";

const WomenClothes = () => {
    const [particular, setParticular] = useState(MAIN_CLOTHES_BLOCK_MENU[0].particularName);
    const [isChosen, setChosen] = useState(0);
    const products = useSelector(state => state.productsSlice.products.women).filter(el => {
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
                            <div className="tabs__list">
                                {MAIN_CLOTHES_BLOCK_MENU.map(({particularName, name, id}, index) => {
                                    return (
                                        <button className={`tabs__item ${isChosen === index ? 'active' : ''}`} key={id}
                                                data-test-id={`clothes-women-${particularName}`} onClick={() => {
                                            setParticular(particularName);
                                            setChosen(index);
                                        }}>{name}</button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <Clothes productType={'women'} products={products}/>
                </div>
            </div>
        </>

    );
}
export default WomenClothes;
