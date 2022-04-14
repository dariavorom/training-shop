import {ErrorMessage} from "formik";
import React from "react";

const CustomErrorMessage = ({name}) => {
    return (<ErrorMessage name={name}>
        {msg => <div className="form__error">{msg}</div>}
    </ErrorMessage>)
}
export default CustomErrorMessage