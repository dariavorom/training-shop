import JoinUs from "./join-us/JoinUs";
import MenuFooter from "./menu/MenuFooter";
import Copyright from "./copyright/Copyright";

const Footer = () => {
    return (
        <>
            <footer className='footer' data-test-id='footer'>
                <JoinUs/>
                <MenuFooter/>
                <Copyright/>
            </footer>
        </>
    );
}
export default Footer;