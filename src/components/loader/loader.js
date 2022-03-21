import React from "react";
import './loader.css';
const Loader = () => {
    return (
        <div className="overlay" data-test-id="loader">
            <div className="lds-ellipsis">
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </div>

    )
}
export default Loader