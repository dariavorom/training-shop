import React from "react";
import {Link} from "react-router-dom";

import {PAYMENTS} from "../../constants/payments";

import './copyright.scss';

const Copyright = () => {
    return (
        <div className={'copyright'}>
            <div className="container">
                <div className="copyright-wrapper">
                    <p>Copyright © 2032 all rights reserved</p>
                    <div className={'copyright__payments payments'}>
                        {PAYMENTS.map(({id, name, image}) => (
                            <Link key={id} to={'/'}><img src={image} alt={name}/></Link>
                        ))}
                    </div>
                    <p>Clevertec.ru/training</p>
                </div>
            </div>
        </div>
    );
}
export default Copyright;