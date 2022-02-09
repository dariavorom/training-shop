import phone from "../assets/img/phone.svg";
import loc from "../assets/img/loc.svg";
import clock from "../assets/img/clock.svg";
import facebook from "../assets/img/facebook.svg";
import twitter from "../assets/img/twitter.svg";
import instagram from "../assets/img/instagram.svg";
import pinterest from "../assets/img/pinterest.svg";
import './header_top.scss';
import {Link} from "react-router-dom";

const HeaderTop = () => {
    return (
        <div className={'header__top'}>
            <div className="container">
                <div className="header__top-wrapper">
                    <div className="header__contacts">
                        <a className={'phone header__contacts-item'} href="tel:+375291002030">
                            <img src={phone} alt=""/>
                            <span>+375 29 100 20 30</span>
                        </a>
                        <div className={'loc header__contacts-item'}>
                            <img src={loc} alt=""/>
                            <span>Belarus, Gomel, Lange 17</span>
                        </div>
                        <div className={'clock header__contacts-item'}>
                            <img src={clock} alt=""/>
                            <span>All week 24/7</span>
                        </div>
                    </div>
                    <div className="header__socials">
                        <Link to={'/'} className={'header__socials-link'}>
                        <img src={facebook} alt="facebook"/>
                        </Link>
                        <Link to={'/'} className={'header__socials-link'}>
                            <img src={twitter} alt="twitter"/>
                        </Link>
                        <Link to={'/'} className={'header__socials-link'}>
                            <img src={instagram} alt="instagram"/>
                        </Link>
                        <Link to={'/'} className={'header__socials-link'}>
                            <img src={pinterest} alt="pinterest"/>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default HeaderTop;