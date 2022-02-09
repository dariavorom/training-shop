import {BENEFITS} from "../../constants/main-page/benefits";
import './benefits.scss';

const Benefits = () => {

    return (
        <div className={'benefits-wrapper'}>
            <div className="container">
                <div className={'benefits'}>
                    {BENEFITS.map(({id, title, description, img_src}) => (
                        <div key={id} className={'benefits__item'}>
                            <img src={img_src} alt=""/>
                            <div className="benefits__content">
                                <div className="benefits__title">{title}</div>
                                <div className="benefits__description">{description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export {Benefits};