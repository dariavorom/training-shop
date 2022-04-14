import {Field} from "formik";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sendCountriesRequest} from "../../../redux/cart/actions";

const CustomFieldCountries = ({formik}) => {
    const dispatch = useDispatch();
    const {countriesList, isRequestSuccess} = useSelector(state => state.cart.countries);
    const [placeholder, togglePlaceholder] = useState(true);
    const renderCountries = () => {
        if (isRequestSuccess) {
            return countriesList.map(({_id, name}) => {
                return (
                    <option key={_id} value={name}>{name}</option>
                )
            })
        }
    }
    const countriesArray = countriesList.map(({name}) => {
        return name
    });
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
    useEffect(() => {
        if (countriesArray.includes(formik.values.country) ) {
            togglePlaceholder(false)
        }
        if (!formik.values.country) {
            togglePlaceholder(true)
        }
    }, [formik])
    return (
        <>
            <Field
                name="country"
                validate={validateCountry}
                as="select"
                className={`cart__form-item ${formik.touched.country && formik.errors.country ? 'invalid' : ''}`}
            >
                <>
                    <option/>
                    {renderCountries()}
                </>
            </Field>
            {placeholder && <label className='cart__form-item-placeholder'>Country</label>}
        </>
    )
}
export default CustomFieldCountries