import React, {useEffect, useState} from "react";
import {Field} from "formik";
import CustomErrorMessage from "../formFields/CustomErrorMessage";
import CustomMaskedField from "../formFields/CustomMaskedField";
import paypal from '../assets/paypal.png';
import visa from '../assets/visa.png';
import mastercard from '../assets/mastercard.png';
import iconEyeHidden from '../assets/icon-eye.png';
import iconEyeShow from '../assets/icon-eye-show.png';

const CartPayment = ({formik, values, showButtonText}) => {
    const [inputType, toggleInputType] = useState('password');
    function inputTypeHandler () {
        if (inputType === 'password') {
            toggleInputType('text')
        } else toggleInputType('password')
    }

    useEffect(() => {
        if (values.paymentMethod === 'cash') {
            showButtonText('ready')
        } else {
            showButtonText('checkout')
        }
    },[values])
    useEffect(() => {
        formik.setErrors({});
        formik.setTouched({});
    }, [values.paymentMethod])
    return (
        <>
            <p>Method of payments</p>
            <div className="cart__method">
                <label className="cart__method-item">
                    <Field type="radio" name="paymentMethod" value="paypal"/>
                    <span><img src={paypal} alt="PayPal"/></span>
                </label>
                <label className="cart__method-item">
                    <Field type="radio" name="paymentMethod" value="visa"/>
                    <span><img src={visa} alt="Visa"/></span>
                </label>
                <label className="cart__method-item">
                    <Field type="radio" name="paymentMethod" value="mastercard"/>
                    <span><img src={mastercard} alt="Mastercard"/></span>
                </label>
                <label className="cart__method-item">
                    <Field type="radio" name="paymentMethod" value="cash"/>
                    <span>Cash</span>
                </label>
            </div>
            {(values.paymentMethod === 'visa' || values.paymentMethod === 'mastercard') && (
                <>
                    <span className="cart__input-title">card</span>
                    <div className="cart__input-wrapper">
                        <CustomMaskedField name="card" mask="9999 9999 9999 9999" placeholder="____ ____ ____ ____"/>
                        <CustomErrorMessage name="card"/>
                    </div>
                    <div className="cart__inputs-row">
                        <div className="cart__input-wrapper">
                            <CustomMaskedField name="cardDate" mask="99/99" placeholder="MM/YY"/>
                            <CustomErrorMessage name="cardDate"/>
                        </div>
                        <div className="cart__input-wrapper">
                            <label className="label--bg">
                                <Field
                                    name="cardCVV"
                                    type={inputType}
                                    placeholder="CVV"
                                    className={`cart__form-item ${formik.touched.cardCVV && formik.errors.cardCVV ? 'invalid' : ''}`}
                                    onChange={(e) => {
                                        formik.setFieldValue('cardCVV', e.target.value.replace(/\D+/g, ''))
                                    }}
                                />
                                <span className="icon" onClick={inputTypeHandler}>
                                    {inputType === "password" && <img src={iconEyeHidden} alt=""/>}
                                    {inputType === "text" && <img src={iconEyeShow} alt=""/>}
                                </span>
                            </label>
                            <CustomErrorMessage name="cardCVV"/>
                        </div>
                    </div>
                </>
            )}
            {values.paymentMethod === 'paypal' && (
                <>
                    <span className="cart__input-title">e-mail</span>
                    <div className="cart__input-wrapper">
                        <Field
                            name="cashEmail"
                            type="email"
                            placeholder="e-mail"
                            className={`cart__form-item ${formik.touched.cardCVV && formik.errors.cardCVV ? 'invalid' : ''}`}
                        />
                        <CustomErrorMessage name="cashEmail"/>
                    </div>
                </>
            )}
        </>

    )
}
export default CartPayment;