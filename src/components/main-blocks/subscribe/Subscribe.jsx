import woman from './assets/woman.png';
import man from './assets/man.png';
import classes from './subscribe.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {sendMailRequest} from "../../../redux/subscribe/actions";

const Subscribe = () => {
    const dispatch = useDispatch();
    const {
        isMailSendLoading,
        isMailSendSuccess,
        isMailSendError,
        mailSendResponse
    } = useSelector(state => state.subscribe.subscribe);
    const [email, setEmail] = useState('');
    const [formValid, setFormValid] = useState(false);
    const sendSubscribeMail = (e) => {
        e.preventDefault();
        dispatch(sendMailRequest(email));
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
        <div className={classes.subscribe}>
            <div className="container">
                <div className={classes.subscribe__formWrapper}>
                    <div className={classes.subscribe__title}>
                        Special Offer
                    </div>
                    <div className={classes.subscribe__description}>
                        Subscribe<br/>
                        And <span>Get 10% Off</span>
                    </div>
                    <form action="" className={classes.subscribe__form} onSubmit={e => sendSubscribeMail(e)}>
                        <input data-test-id="main-subscribe-mail-field" onChange={e => emailHandler(e)} type="email" placeholder={'Enter your email'} value={email}/>
                        {mailSendResponse && <div
                            className={`response-message ${isMailSendSuccess ? 'success' : isMailSendError ? 'error' : null}`}>{mailSendResponse}</div>}
                        <button data-test-id="main-subscribe-mail-button" className={'btn-submit'} type={'submit'} disabled={!formValid}>
                            {isMailSendLoading && <div className="lds-dual-ring"/>}
                            <span>subscribe</span>
                        </button>
                    </form>
                    <img src={woman} alt="" className={classes.subscribe__woman}/>
                    <img src={man} alt="" className={classes.subscribe__man}/>
                </div>
            </div>
        </div>
    );
}
export default Subscribe;