import Menu from "../menu/Menu";
import logo from '../../../assets/logo.svg';
import search from '../assets/img/search.svg';
import globe from '../assets/img/globe.svg';
import user from '../assets/img/user.svg';
import './header_bottom.scss';
import {Link} from "react-router-dom";
import classNames from "classnames";
import CartButton from "../../cart/cart-button";

const HeaderBottom = ({isMenuOpen, toggleMenu, toggleCartMode}) => {
    function toggleMenuMode() {
        toggleMenu(!isMenuOpen);
    }
    function toggleMenuOutSide() {
        if (isMenuOpen) {
            toggleMenuMode()
        }
    }

    return (
        <div className={'header__bottom'}>
            <div className="container">
                <div className="header__bottom-wrapper">
                    <div className="logo-wrapper" onClick={toggleMenuOutSide}>
                        <Link to='/' className={'header-nav-logo'} data-test-id={'header-logo-link'}>
                            <img src={logo} alt=""/>
                        </Link>
                    </div>
                    <div className="menu-wrapper">
                        <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
                    </div>

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
                        <CartButton toggleCartMode={toggleCartMode}/>
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