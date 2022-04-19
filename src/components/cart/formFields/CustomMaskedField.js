import React from "react";
import InputMask from "react-input-mask";
import {Field} from "formik";

export const CustomMaskedField = ({mask, name, placeholder, type}) => (
    <Field
        name={name}>
        {({field, meta}) => (<InputMask
            {...field}
            mask={mask}
            placeholder={placeholder}
            className={`cart__form-item ${meta.touched && meta.error ? 'invalid' : ''}`}
            type={type}>
        </InputMask>)}
    </Field>
)