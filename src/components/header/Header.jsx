import React from "react";
import HeaderTop from "./header_top/HeaderTop";
import HeaderBottom from "./header_bottom/HeaderBottom";
import {useState, useEffect} from "react";
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