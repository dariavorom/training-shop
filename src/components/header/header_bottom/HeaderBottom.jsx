import Menu from "../menu/Menu";
import logo from '../../../assets/logo.svg';
import search from '../assets/img/search.svg';
import globe from '../assets/img/globe.svg';
import user from '../assets/img/user.svg';
import cart from '../assets/img/cart.svg';
import './header_bottom.scss';
import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import classNames from "classnames";
import {useEffect} from "react";

const HeaderBottom = () => {
    const [isMenuOpen, toggleMenu] = useState(false);

    function toggleMenuMode() {
        toggleMenu(!isMenuOpen);
    }

    useEffect(() => {
        document.body.classList.add(`${isMenuOpen ? 'lock' : 'unlock'}`);
        return () => {
            document.body.classList.remove('lock');
        };
    }, [isMenuOpen]);
    return (
        <div className={classNames('header__bottom', {"menu-active": isMenuOpen})}>
            <div className="container">
                <div className="header__bottom-wrapper">
                    <div className="logo-wrapper">
                        <Link to='/' className={'header-nav-logo'} data-test-id={'header-logo-link'}>
                            <img src={logo} alt=""/>
                        </Link>
                    </div>
                    <Menu/>
                    <div className="personal-wrapper">
                        <Link to={'/'} className={'personal__item'}>
                            <img src={search} alt=""/>
                        </Link>
                        <Link to={'/'} className={'personal__item'}>
                            <img src={globe} alt=""/>
                        </Link>
                        <Link to={'/'} className={'personal__item'}>
                            <img src={user} alt=""/>
                        </Link>
                        <Link to={'/'} className={'personal__item cart'}>
                            <span className={'count'}>2</span>
                            <img src={cart} alt=""/>
                        </Link>
                    </div>
                    <button
                        data-test-id={'burger-menu-btn'}
                        className={classNames("burger", {'active': isMenuOpen})}
                        onClick={toggleMenuMode}
                    >
                        <span> </span>
                        <span> </span>
                        <span> </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default HeaderBottom;