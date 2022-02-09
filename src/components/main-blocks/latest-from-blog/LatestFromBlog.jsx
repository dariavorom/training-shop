import {NEWS} from "../../constants/blog-items";
import {Link} from "react-router-dom";
import './latestFromBlog.scss';

const LatestFromBlog = () => {
    return (

        <div className="blog">
            <div className="container">
                <div className={"blog__header"}>
                    <h2 className={'title-h2'}>LATEST FROM BLOG</h2>
                    <Link to={"/"} className={'blog__btn'}>See All</Link>
                </div>

                <div className="blog__items">
                    {NEWS.map(({id, title, description, img, date}) => (
                            <div key={id} className={'blog__item'}>
                                <img src={img} alt={title}/>
                                <div className={"blog__item-text"}>
                                    <Link to={'/'} className={'blog__item-title'}>{title}</Link>
                                    <p className={'blog__item-description'}>{description}</p>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
        </div>


    )
}
export default LatestFromBlog;