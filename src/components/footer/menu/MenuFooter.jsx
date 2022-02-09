import {CATEGORIES} from "../../constants/menu-footer";
import {INFORMATION} from "../../constants/menu-footer";
import {USEFULLINKS} from "../../constants/menu-footer";
import {Link} from "react-router-dom";
import './menu-footer.scss';
import loc from '../assets/loc.svg';
import phone from '../assets/phone.svg';
import clock from '../assets/clock.svg';
import mail from '../assets/mail.svg';

const MenuFooter = () => {
    return (
        <div className={'footer-nav'}>
            <div className="container">
                <div className="footer-nav-wrapper">
                    <div className={"footer-nav__column"}>
                        <div className="footer-nav__title">Categories</div>
                        {CATEGORIES.map(({id, path, name}) => (
                            <Link key={id} to={`/${path}`} data-test-id={`footer-nav-link-${path}`} className={'footer-nav-link'}>
                                <span>{name}</span>
                            </Link>
                        ))}
                    </div>
                    <div className={"footer-nav__column"}>
                        <div className="footer-nav__title">Information</div>
                        {INFORMATION.map(({id, path, name}) => (
                            <Link key={id} to={`/${path}`} data-test-id={`footer-nav-link-${path}`} className={'footer-nav-link'}>
                                <span>{name}</span>
                            </Link>
                        ))}
                    </div>
                    <div className={"footer-nav__column"}>
                        <div className="footer-nav__title">Useful links</div>
                        {USEFULLINKS.map(({id, path, name}) => (
                            <Link key={id} to={`/${path}`} data-test-id={`footer-nav-link-${path}`} className={'footer-nav-link'}>
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
                            <a className={'footer-contacts__item-value'} href={'mailto:info@clevertec.ru'}>info@clevertec.ru</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MenuFooter;