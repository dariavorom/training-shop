import React, {useState} from "react";
import './categories-header.scss';
import {MAIN_CLOTHES_BLOCK_MENU} from "../../constants/main-clothes-block-menu";

const CategoriesHeader = ({name}) => {
    const [particular, setParticular] = useState(MAIN_CLOTHES_BLOCK_MENU[0].particularName);
    const [isChosen, setChosen] = useState(0);
    return (
        <div className={'clothes__top'}>
            <div className="clothes__top-title">
                <h2 className=" title-h2">
                    {name}
                </h2>
            </div>
            <div className="clothes__top-tabs tabs">
                <ul className="tabs__list">
                    {MAIN_CLOTHES_BLOCK_MENU.map(({particularName, name, id}, index) => {
                            return (
                                <li className={`tabs__item ${isChosen === index ? 'active' : ''}`} key={id} onClick={() => {
                                    setParticular(particularName);
                                    setChosen(index);
                                }}>{name}</li>
                            )
                        })}
                </ul>
            </div>
        </div>
    );
}
export default CategoriesHeader;