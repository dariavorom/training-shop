import {Field} from "formik";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sendCountriesRequest} from "../../../redux/cart/actions";
import {SvgGenerator} from "../../svg-generator/SvgGenerator";

const CustomFieldCountries = ({formik}) => {
    const dispatch = useDispatch();
    const {countriesList, isRequestSuccess} = useSelector(state => state.cart.countries);
    const [showCountriesList, toggleShowCountriesList] = useState(false);
    const countriesArray = countriesList.map(({name}) => {
        return name
    });
    const renderCountries = () => {
        if (isRequestSuccess) {
            return countriesList.map(({_id, name}) => {
                return (
                    <li key={_id}
                        onClick={e => {
                        formik.setFieldValue('country', e.target.textContent);
                    }}>
                        {name}
                    </li>
                )
            })
        }
    }

    const handleBlurCustom = (value) => {
        formik.setFieldTouched('country', true);
        if (!countriesArray.includes(value)) {
            formik.setFieldValue('country', '', true)
        }
    }
    const validateCountry = (value) => {
        let errors;

        if (!countriesArray.includes(value)) {
            errors = 'Выберите город из списка';
        }
        return errors;
    }
    useEffect(() => {
        dispatch(sendCountriesRequest());
    }, [])
    return (
        <>
            <label htmlFor="country-input" className={`country-label ${showCountriesList && 'active'}`}
                   onClick={() => toggleShowCountriesList(!showCountriesList)}>
                <Field
                    id="country-input"
                    name="country"
                    validate={validateCountry}
                    autoComplete="whatever"
                    placeholder="Country"
                    onBlur={(e) => handleBlurCustom(e.target.value)}
                    className={`cart__form-item ${formik.touched.country && formik.errors.country ? 'invalid' : ''}`}
                />
                {showCountriesList &&
                    <>
                        <ul className="country-list"
                            onClick={e=>e.stopPropagation()}
                        >
                            {renderCountries()}
                        </ul>
                        <span className="label-arrow">
                    <SvgGenerator id="arrow"/>
                    </span>
                    </>
                }
            </label>
        </>
    )
}
export default CustomFieldCountries