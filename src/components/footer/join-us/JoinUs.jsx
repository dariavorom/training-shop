import facebook from "../../header/assets/img/facebook.svg";
import twitter from "../../header/assets/img//twitter.svg";
import instagram from "../../header/assets/img/instagram.svg";
import pinterest from "../../header/assets/img/pinterest.svg";
import './join-us.scss';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {sendMailRequestFooter} from "../../../redux/subscribe/actions";
import {useState} from "react";

const JoinUs = () => {
    const dispatch = useDispatch();
    const {
        isMailSendLoading,
        isMailSendSuccess,
        isMailSendError,
        mailSendResponse
    } = useSelector(state => state.subscribe.subscribeFooter);
    const [email, setEmail] = useState('');
    const [formValid, setFormValid] = useState(false);

    const sendSubscribeMail = (e) => {
        e.preventDefault();
        dispatch(sendMailRequestFooter(email));
        setEmail('');
        setFormValid(false);
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!String(e.target.value).toLowerCase().match(re)) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }
    return (
        <div className={'joinus'}>
            <div className="container">
                <div className={'joinus-wrapper'}>
                    <div className={'joinus__title'}>BE IN TOUCH WITH US:</div>
                    <form action="" className={'joinus__form'} onSubmit={e => sendSubscribeMail(e)}>
                        <input data-test-id="footer-mail-field" type="text" placeholder={'Enter your email'} value={email}
                               onChange={e => emailHandler(e)}/>
                        <button data-test-id="footer-subscribe-mail-button" type={'submit'} className={'joinus__btn btn-submit'} disabled={!formValid}>Join Us</button>
                        {isMailSendLoading && <div className="lds-dual-ring"/>}
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
                {mailSendResponse && <div
                    className={`response-message ${isMailSendSuccess ? 'success' : isMailSendError ? 'error' : null}`}>{mailSendResponse}</div>}
            </div>
        </div>
    )
}
export default JoinUs;