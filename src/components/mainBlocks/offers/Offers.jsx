import React from "react";

import classes from './offers.module.scss';

import lookbook from './assets/lookbook.jpg';
import sale from './assets/sale.jpg';
const Offers = () => {
    return (
        <div className={classes.offers}>
            <div className="container">
                <div className={classes.offers__wrapper}>
                    <div className={classes.offers__item}>
                        <img src={lookbook} alt=""/>
                        <div className={`${classes.offers__text} content-white-bg`}>
                            <div className={classes.contentWhiteBg__title}>New Season</div>
                            <div className={classes.contentWhiteBg__description}>lookbook collection</div>
                        </div>
                    </div>
                    <div className={classes.offers__item}>
                        <img src={sale} alt=""/>
                        <div className={`${classes.offers__text} content-white-bg`}>
                            <div className={classes.contentWhiteBg__title}>Sale</div>
                            <div className={classes.contentWhiteBg__description}>Get UP to <span>50% off</span></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Offers;