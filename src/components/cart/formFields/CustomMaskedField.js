import InputMask from "react-input-mask";
import {Field} from "formik";
import React from "react";

const CustomMaskedField = ({mask, name, placeholder, type}) => {
  return (
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
}
export default CustomMaskedField