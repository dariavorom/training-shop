import React from 'react';
import {Link} from "react-router-dom";

import {CATEGORIES} from "../../constants/menuFooter";
import {INFORMATION} from "../../constants/menuFooter";
import {USEFULLINKS} from "../../constants/menuFooter";

import './menuFooter.scss';

import loc from '../assets/loc.svg';
import phone from '../assets/phone.svg';
import clock from '../assets/clock.svg';
import mail from '../assets/mail.svg';

export const MenuFooter = () => (
    <div className={'footer-nav'}>
        <div className="container">
            <div className="footer-nav-wrapper">
                <div className={"footer-nav__column"}>
                    <div className="footer-nav__title">Categories</div>
                    <ul className={'nav-list'}>
                        {CATEGORIES.map(({id, path, name}) => (
                            <li key={id} className={'nav-list__item'}>
                                <Link key={id} to={`/${path}`} data-test-id={`footer-nav-link-${path}`}
                                      className={'footer-nav-link'}>
                                    <span>{name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={"footer-nav__column"}>
                    <div className="footer-nav__title">Information</div>
                    {INFORMATION.map(({id, path, name}) => (
                        <Link key={id} to={`/${path}`} data-test-id={`footer-nav-link-${path}`}
                              className={'footer-nav-link'}>
                            <span>{name}</span>
                        </Link>
                    ))}
                </div>
                <div className={"footer-nav__column"}>
                    <div className="footer-nav__title">Useful links</div>
                    {USEFULLINKS.map(({id, path, name}) => (
                        <Link key={id} to={`/${path}`} data-test-id={`footer-nav-link-${path}`}
                              className={'footer-nav-link'}>
                            <span>{name}</span>
                        </Link>
                    ))}
                </div>
                <div className={"footer-nav__column footer-contacts"}>
                    <div className="footer-nav__title footer-contacts__title">CONTACT US</div>
                    <div className="footer-contacts__item">
                        <img src={loc} alt=""/>
                        <span className={'footer-contacts__item-value'}>Belarus, Gomel, Lange 17</span>
                    </div>
                    <div className="footer-contacts__item">
                        <img src={phone} alt=""/>
                        <a className={'footer-contacts__item-value'} href={'tel:+375291002030'}>+375 29 100 20 30</a>
                    </div>
                    <div className="footer-contacts__item">
                        <img src={clock} alt=""/>
                        <span className={'footer-contacts__item-value'}>All week 24/7</span>
                    </div>
                    <div className="footer-contacts__item">
                        <img src={mail} alt=""/>
                        <a className={'footer-contacts__item-value'}
                           href={'mailto:info@clevertec.ru'}>info@clevertec.ru</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);