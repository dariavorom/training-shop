import React, {useEffect, useState} from "react";
import {Field} from "formik";
import {useDispatch, useSelector} from "react-redux";

import {sendCountriesRequest} from "../../../redux/cart/actions";
import {SvgGenerator} from "../../svgGenerator/SvgGenerator";

export const CustomFieldCountries = ({formik}) => {
    const dispatch = useDispatch();
    const {countriesList, isRequestSuccess} = useSelector(state => state.cart.countries);
    const [showCountriesList, toggleShowCountriesList] = useState(false);
    const countriesArray = countriesList.map(({name}) => name);
    const handleClick = (e) => {
        e.preventDefault();
        formik.setFieldValue('country', e.target.value);
        toggleShowCountriesList(false);
    }
    const renderCountries = () => (isRequestSuccess && countriesList.map(({_id, name}) => (<li key={_id}>
        <button onClick={e => handleClick(e)} value={name}>{name}</button>
    </li>))
    )

    const handleBlurCustom = (value) => {
        formik.setFieldTouched('country', true);
        if (!countriesArray.includes(value))
            formik.setFieldValue('country', '', true)
    }
    const validateCountry = (value) => (!countriesArray.includes(value) && 'Выберите город из списка');

    useEffect(() => {
        if (!countriesArray.length)
            dispatch(sendCountriesRequest());
    }, [countriesArray])
    return (
        <div className={`country-label ${showCountriesList && 'active'}`}>
            <label htmlFor="country-input">
                <Field
                    id="country-input"
                    name="country"
                    validate={validateCountry}
                    autoComplete="whatever"
                    placeholder="Country"
                    onFocus={() => toggleShowCountriesList(true)}
                    onBlur={(e) => handleBlurCustom(e.target.value)}
                    onChange={(e) => formik.setFieldValue('country', e.target.value)}
                    className={`cart__form-item ${formik.touched.country && formik.errors.country ? 'invalid' : ''}`}
                />
            </label>
            {showCountriesList &&
                <>
                    <ul className="country-list">
                        {renderCountries()}
                    </ul>
                    <span className="label-arrow"
                          onClick={() => toggleShowCountriesList(!showCountriesList)}>
                    <SvgGenerator id="arrow"/>
                    </span>
                </>
            }
        </div>
    )
}