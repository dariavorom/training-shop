import {Field} from "formik";
import React from "react";

const CustomField = ({name, type, placeholder}) => {
    return (
        <Field name={name}>
            {({field, meta}) => (
                <input
                    {...field}
                    type={type}
                    placeholder={placeholder}
                    className={`cart__form-item ${meta.touched && meta.error ? 'invalid' : ''}`}/>
            )}
        </Field>
    )

}
export default CustomField;