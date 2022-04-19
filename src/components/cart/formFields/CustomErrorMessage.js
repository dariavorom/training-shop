import {ErrorMessage} from "formik";
import React from "react";

export const CustomErrorMessage = ({name}) =>
    (<ErrorMessage name={name}>
        {msg => <div className="form__error">{msg}</div>}
    </ErrorMessage>)
