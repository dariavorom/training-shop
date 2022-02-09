import './header.scss';
import phone from './assets/img/phone.svg';
import HeaderTop from "./header_top/HeaderTop";
import HeaderBottom from "./header_bottom/HeaderBottom";

const Header = () => {
    return (
        <div className={'header'} data-test-id="header">
            <header>
                <HeaderTop/>
                <HeaderBottom/>
            </header>
        </div>
    );
}
export default Header;