import React from "react";

import JoinUs from "./joinUs/JoinUs";
import MenuFooter from "./menu/MenuFooter";
import Copyright from "./copyright/Copyright";

const Footer = () => (
    <footer className='footer' data-test-id='footer'>
        <JoinUs/>
        <MenuFooter/>
        <Copyright/>
    </footer>
);

export default Footer;