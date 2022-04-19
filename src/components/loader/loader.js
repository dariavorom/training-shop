import React from "react";

import './loader.css';

export const Loader = () => (
    <div className="overlay" data-test-id="loader">
        <div className="lds-ellipsis">
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    </div>

)