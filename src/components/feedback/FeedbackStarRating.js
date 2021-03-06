import React, {useState} from "react";
import {SvgGenerator} from "../svgGenerator/SvgGenerator";

export const FeedbackStarRating = ({numTotalStars = 5, rating, formControl}) => {
    const [numHoveringStars, setNumHoveringStars] = useState(null);

    const [isUserHovering, setIsUserHovering] = useState(false);

    function getColor(isUserHovering, i, numSelectedStars, numHoveringStars) {
        const threshold = isUserHovering ? numHoveringStars : numSelectedStars;
        return (i < threshold) ? "#f1d545" : "#c1c1bf";
    }
    return (
        <div className="star-rating" onMouseEnter={() => setIsUserHovering(true)}
             onMouseLeave={() => setIsUserHovering(false)}>
            {Array.from({length: numTotalStars}).map((e, i) =>
                <SvgGenerator id={'star'}
                              className={'star'}
                              key={i}
                              color={getColor(isUserHovering, i, rating, numHoveringStars)}
                              onClick={() => formControl('rating', i + 1)}
                              onMouseOver={() => setNumHoveringStars(i + 1)}/>)}
        </div>
    );
}