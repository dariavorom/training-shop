import './header.scss';
import HeaderTop from "./header_top/HeaderTop";
import HeaderBottom from "./header_bottom/HeaderBottom";

const Header = () => {
    return (
        <header className={'header'} data-test-id={'header'}>
            <HeaderTop/>
            <HeaderBottom/>
        </header>
    );
}
export default Header;