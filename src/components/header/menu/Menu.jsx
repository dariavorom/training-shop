import {Link} from "react-router-dom";
import './menu.scss';
import {MENU} from '../../constants/menu';
import HeaderTop from "../header_top/HeaderTop";

const Menu = () => {
    return (
        <div className='menu' data-test-id='menu'>
            <ul className={'nav'}>
                {MENU.map(({id, path, name}) => (
                    <li key={id} className={'nav__item'}><Link key={id} to={`/${path}`} data-test-id={`menu-link-${path}`} className={'menu-item'}>
                        <span>{name}</span>
                    </Link></li>
                ))}
            </ul>
        </div>
    );
}
export default Menu;