import woman from './assets/woman.png';
import man from './assets/man.png';
import classes from './subscribe.module.scss';

const Subscribe = () => {
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
                    <form action="" className={classes.subscribe__form}>
                        <input type="email" placeholder={'Enter your email'}/>
                        <button type={'submit'}>subscribe</button>
                    </form>
                    <img src={woman} alt="" className={classes.subscribe__woman}/>
                    <img src={man} alt="" className={classes.subscribe__man}/>
                </div>
            </div>
        </div>
    );
}
export default Subscribe;