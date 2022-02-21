import {Link} from "react-router-dom";
import './menu.scss';
import {MENU} from '../../constants/menu';
const Menu = ({isMenuOpen, toggleMenu}) => {
    return (
        <div className={isMenuOpen ? 'menu active' : 'menu'} data-test-id='menu' onClick={() => toggleMenu(false)}>
            <ul className={'nav'} onClick={e=>e.stopPropagation()}>
                {MENU.map(({id, path, name}) => (
                    <li key={id} className={'nav__item'} onClick={() => toggleMenu(false)}>
                        <Link key={id} to={`/${path}`} data-test-id={`menu-link-${path}`} className={'menu-item'}>
                            <span>{name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Menu;