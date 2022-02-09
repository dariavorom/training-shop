import facebook from "../../header/assets/img/facebook.svg";
import twitter from "../../header/assets/img//twitter.svg";
import instagram from "../../header/assets/img/instagram.svg";
import pinterest from "../../header/assets/img/pinterest.svg";
import './join-us.scss';
import {Link} from "react-router-dom";

const JoinUs = () => {
    return (
        <div className={'joinus'}>
            <div className="container">
                <div className={'joinus-wrapper'}>
                    <div className={'joinus__title'}>BE IN TOUCH WITH US:</div>
                    <form action="" className={'joinus__form'}>
                        <input type="text" placeholder={'Enter your email'}/>
                        <button type={'submit'} className={'joinus__btn'}>Join Us</button>
                    </form>
                    <div className="joinus__socials">
                        <Link to={'/'} className={'joinus__socials-link'}>
                            <img src={facebook} alt="facebook"/>
                        </Link>
                        <Link to={'/'} className={'joinus__socials-link'}>
                            <img src={twitter} alt="twitter"/>
                        </Link>
                        <Link to={'/'} className={'joinus__socials-link'}>
                            <img src={instagram} alt="instagram"/>
                        </Link>
                        <Link to={'/'} className={'joinus__socials-link'}>
                            <img src={pinterest} alt="pinterest"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default JoinUs;