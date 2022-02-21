import './header.scss';
import HeaderTop from "./header_top/HeaderTop";
import HeaderBottom from "./header_bottom/HeaderBottom";
import {useState, useEffect} from "react";
const Header = () => {
    const [isMenuOpen, toggleMenu] = useState(false);
    useEffect(() => {
        document.body.classList.add(`${isMenuOpen ? 'lock' : 'unlock'}`);
        return () => {
            document.body.classList.remove('lock');
        };
    }, [isMenuOpen]);
    return (
        <header className={'header'} data-test-id={'header'}>
            <HeaderTop/>
            <HeaderBottom isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
        </header>
    );
}
export default Header;