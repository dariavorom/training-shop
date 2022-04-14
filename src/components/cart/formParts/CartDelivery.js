import React, {useEffect} from "react";
import {Field} from "formik";
import '../cart-delivery.scss';
import CustomErrorMessage from "../formFields/CustomErrorMessage";
import CustomField from "../formFields/CustomField";
import CustomMaskedField from "../formFields/CustomMaskedField";
import CustomFieldCountries from "../formFields/CustomFieldCountries";
import CustomFieldCities from "../formFields/CustomFieldCities";

const CartDelivery = ({values, formik, agree, setAgree, showButtonText}) => {
    useEffect(() => {
        showButtonText('further')
    }, [])

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
            <CustomField type="email" name="email" placeholder="e-mail"/>
            <CustomErrorMessage name="email"/>
        </div>
        {values.deliveryMethod !== "store pickup" && <>
            <span className="cart__input-title">address</span>
            <div className="cart__input-wrapper">
                <Field
                    name="country"
                >
                    {({field, meta}) => (
                        <input
                            {...field}
                            autoComplete="whatever"
                            placeholder="Country"
                            className={`cart__form-item ${meta.touched && meta.error ? 'invalid' : ''}`}/>
                    )}
                </Field>
                <CustomErrorMessage name="country"/>
            </div>
            <div className="cart__input-wrapper">
                <CustomField name="city" placeholder="City"/>
                <CustomErrorMessage name="city"/>
            </div>
            <div className="cart__input-wrapper">
                <CustomField name="street" placeholder="Street"/>
                <CustomErrorMessage name="street"/>
            </div>
            <div className="cart__inputs-row">
                <div className="cart__input-wrapper">
                    <CustomField name="house" placeholder="House"/>
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
                <CustomFieldCities city={values.storeAddress} country={values.country}/>
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
            <span className={`cart__input-label ${values.agree ? 'checked' : ''}`} onClick={() => {
                setAgree(agree === 'setAgree' ? 'notAgree' : 'setAgree');
                !formik.values.agree && (formik.setFieldValue('agree', false))
            }}>
                <Field name={'agree'}>
                    {({field, meta}) => (
                        <input
                            {...field}
                            type={'checkbox'}
                            checked={agree === 'setAgree'}
                            className={`cart__form-item ${meta.touched && meta.error ? 'invalid' : ''}`}
                            value={formik.values.agree}/>
                    )}
                </Field>
                <span>I agree to the processing of my personal information</span>
            </span>
            <CustomErrorMessage name="agree"/>
        </div>
    </>)
}
export default CartDelivery;