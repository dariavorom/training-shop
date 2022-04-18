import React from "react";
import {useState, useEffect} from "react";

import HeaderTop from "./headerTop/HeaderTop";
import HeaderBottom from "./headerBottom/HeaderBottom";

import {lockBody} from "../functions/lockBody";

import './header.scss';

const Header = () => {
    const [isMenuOpen, toggleMenu] = useState(false);
    useEffect(() => {
        lockBody(isMenuOpen);
    }, [isMenuOpen]);
    return (
        <header className={'header'} data-test-id={'header'}>
            <HeaderTop/>
            <HeaderBottom isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
        </header>
    );
}
export default Header;