import React from "react";
import {Link} from "react-router-dom";

import {NEWS} from "../../constants/mainPage/news";

import './latestFromBlog.scss';

export const LatestFromBlog = () => (
    <div className="blog">
        <div className="container">
            <div className={"blog__header"}>
                <h2 className={'title-h2'}>LATEST FROM BLOG</h2>
                <Link to={"/"} className={'blog__btn'}>See All</Link>
            </div>

            <div className="blog__items">
                {NEWS.map(({id, title, description, img}) => (
                    <div key={id} className={'blog__item'}>
                        <div className="blog__img">
                            <img src={img} alt={title}/>
                        </div>
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