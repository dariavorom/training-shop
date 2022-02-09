import Menu from "../menu/Menu";
import logo from '../../../logo.svg';
import search from '../assets/img/search.svg';
import globe from '../assets/img/globe.svg';
import user from '../assets/img/user.svg';
import cart from '../assets/img/cart.svg';
import './header_bottom.scss';
import {Link} from "react-router-dom";

const HeaderBottom = () => {
    return (
        <div className={'header__bottom'}>
            <div className="container">
                <div className="header__bottom-wrapper">
                    <div className="logo-wrapper">
                        <Link to='/' className={'header-nav-logo'} data-testid={'header-logo-link'}>
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
                </div>
            </div>
        </div>
    );
}
export default HeaderBottom;