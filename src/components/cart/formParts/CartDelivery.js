import React, {useEffect} from "react";
import {Field} from "formik";
import CustomErrorMessage from "../formFields/CustomErrorMessage";
import CustomMaskedField from "../formFields/CustomMaskedField";
import CustomFieldCountries from "../formFields/CustomFieldCountries";
import CustomFieldCities from "../formFields/CustomFieldCities";

const CartDelivery = ({values, formik, showButtonText}) => {
    useEffect(() => {
        showButtonText('further')
    }, [])
    useEffect(() => {
        formik.setErrors({});
        formik.setTouched({});
    }, [values.deliveryMethod])
    return (<>
        <p>Choose the method of delivery of the items</p>
        <div className="cart__method">
            <label className="cart__method-item">
                <Field type="radio" name="deliveryMethod" value="pickup from post offices"/>
                <span>Pickup from post offices</span>
            </label>
            <label className="cart__method-item">
                <Field type="radio" name="deliveryMethod" value="express delivery"/>
                <span>Express delivery</span>
            </label>
            <label className="cart__method-item">
                <Field type="radio" name="deliveryMethod" value="store pickup"/>
                <span>Store pickup</span>
            </label>
        </div>
        <span className="cart__input-title">phone</span>
        <div className="cart__input-wrapper">
            <CustomMaskedField name="phone" mask="+375 (99) 9999999" placeholder="+375  (__) _______" type="tel"/>
            <CustomErrorMessage name='phone'/>
        </div>
        <span className="cart__input-title">e-mail</span>
        <div className="cart__input-wrapper">
            <Field
                name="e_mail"
                type="email"
                autoComplete="whatever"
                placeholder="email"
                className={`cart__form-item ${formik.touched.e_mail && formik.errors.e_mail ? 'invalid' : ''}`}
            />
            <CustomErrorMessage name="e_mail"/>
        </div>
        {values.deliveryMethod !== "store pickup" && <>
            <span className="cart__input-title">address</span>
            <div className="cart__input-wrapper">
                <Field
                    name="country"
                    autoComplete="whatever"
                    placeholder="Country"
                    className={`cart__form-item ${formik.touched.country && formik.errors.country ? 'invalid' : ''}`}
                />
                <CustomErrorMessage name="country"/>
            </div>
            <div className="cart__input-wrapper">
                <Field
                    name="city"
                    autoComplete="whatever"
                    placeholder="City"
                    className={`cart__form-item ${formik.touched.city && formik.errors.city ? 'invalid' : ''}`}
                />
                <CustomErrorMessage name="city"/>
            </div>
            <div className="cart__input-wrapper">
                <Field
                    name="street"
                    autoComplete="whatever"
                    placeholder="Street"
                    className={`cart__form-item ${formik.touched.street && formik.errors.street ? 'invalid' : ''}`}
                />
                <CustomErrorMessage name="street"/>
            </div>
            <div className="cart__inputs-row">
                <div className="cart__input-wrapper">
                    <Field
                        name="house"
                        autoComplete="whatever"
                        placeholder="House"
                        className={`cart__form-item ${formik.touched.house && formik.errors.house ? 'invalid' : ''}`}
                    />
                    <CustomErrorMessage name="house"/>
                </div>
                <div className="cart__input-wrapper">
                    <Field
                        name="apartment"
                        placeholder="Apartment"
                        className={"cart__form-item"}
                    />
                </div>
            </div>
        </>}
        {values.deliveryMethod === "store pickup" && <>
            <span className="cart__input-title">address of store</span>
            <div className="cart__input-wrapper">
                <CustomFieldCountries formik={formik}/>
                <CustomErrorMessage name="country"/>
            </div>
            <div className="cart__input-wrapper">
                <CustomFieldCities city={values.storeAddress} country={values.country} formik={formik}/>
                <CustomErrorMessage name="storeAddress"/>
            </div>
        </>}
        {values.deliveryMethod === 'pickup from post offices' && <>
            <span className="cart__input-title">POSTcode</span>
            <div className="cart__input-wrapper">
                <CustomMaskedField name="postcode" mask="BY 999999" placeholder="BY ______"/>
                <CustomErrorMessage name="postcode"/>
            </div>

        </>}
        <div className="cart__input-wrapper">
            <label htmlFor='agree'
                   className={`cart__input-label ${values.agree ? 'checked' : ''} ${formik.touched.agree && formik.errors.agree ? 'invalid' : ''}`}>
                <Field
                    id="agree"
                    name='agree'
                    type='checkbox'
                    className={`cart__form-item ${formik.touched.agree && formik.errors.agree ? 'invalid' : ''}`}
                />
                I agree to the processing of my personal information
            </label>
            <CustomErrorMessage name="agree"/>
        </div>
    </>)
}
export default CartDelivery;