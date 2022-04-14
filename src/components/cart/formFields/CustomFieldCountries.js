import {Field} from "formik";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sendCountriesRequest} from "../../../redux/cart/actions";

const CustomFieldCountries = ({formik}) => {
    const dispatch = useDispatch();
    const {countriesList, isRequestSuccess} = useSelector(state => state.cart.countries);
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
    const handleBlurCustom = (value) => {
        if (!countriesArray.includes(value)) {
            formik.setFieldValue('country', '', true)
        }
    }
    useEffect(() => {
        dispatch(sendCountriesRequest());
    }, [])
    return (
        <>
            <Field
                name="country"
                autoComplete="whatever"
                validate={validateCountry}
                placeholder="Country"
                list="country"
                onBlur={(e) => handleBlurCustom(e.target.value)}
                className={`cart__form-item ${formik.touched.country && formik.errors.country ? 'invalid' : ''}`}
            />
            <datalist id="country">
                {renderCountries()}
            </datalist>
        </>
    )
}
export default CustomFieldCountries