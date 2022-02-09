import './copyright.scss';
import stripe from '../assets/stripe.png';
import aes from '../assets/aes.png';
import paypal from '../assets/paypal.png';
import visa from '../assets/visa.png';
import mastercard from '../assets/mastercard.png';
import discover from '../assets/discover.png';
import americanExpress from '../assets/american-express.png';

const Copyright = () => {
    return (
        <div className={'copyright'}>
            <div className="container">
                <div className="copyright-wrapper">
                    <p>Copyright © 2032 all rights reserved</p>
                    <div className={'copyright__payments'}>
                        <img src={stripe} alt="Stripe"/>
                        <img src={aes} alt="AES"/>
                        <img src={visa} alt="Visa"/>
                        <img src={paypal} alt="PayPal"/>
                        <img src={mastercard} alt="MasterCard"/>
                        <img src={discover} alt="Discover"/>
                        <img src={americanExpress} alt="American Express"/>
                    </div>
                    <p>Clevertec.ru/training</p>
                </div>
            </div>
        </div>
    );
}
export default Copyright;