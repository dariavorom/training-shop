import React from "react";
import {Link} from "react-router-dom";

import {MENU} from '../../constants/menu';

import './menu.scss';

const Menu = ({isMenuOpen, toggleMenu}) => (
    <div className={isMenuOpen ? 'menu active' : 'menu'} data-test-id='burger-menu' onClick={() => toggleMenu(false)}>
        <ul className={'nav'} onClick={e => e.stopPropagation()}>
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

export default Menu;