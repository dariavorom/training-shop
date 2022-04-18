import React, {useEffect, useState} from "react";
import {Field} from "formik";
import {useDispatch, useSelector} from "react-redux";

import {sendCitiesRequest} from "../../../redux/cart/actions";
import {SvgGenerator} from "../../svgGenerator/SvgGenerator";

const CustomFieldCities = ({formik, city, country}) => {
    const dispatch = useDispatch();
    const {citiesList, isRequestSuccess} = useSelector(state => state.cart.cities);
    const [showCitiesList, toggleShowCitiesList] = useState(false);

    const validateCity = (value) => {
        let errors;
        if (isRequestSuccess && citiesList.length) {
            const citiesArray = citiesList.map(({city}) => city);
            const countriesArray = new Set(citiesList.map(({country}) => country));
            if (!citiesArray.includes(value) || !countriesArray.has(country)) {
                errors = 'Нету результатов';
            }
        }
        if (isRequestSuccess && !citiesList.length)
            errors = 'Нету результатов';

        return errors;
    }
const handleClick = (e) => {
    e.preventDefault();
    formik.setFieldValue('storeAddress', e.target.value);
    toggleShowCitiesList(false);
}
    const renderCities = () => {
        if (isRequestSuccess && citiesList.length)
            return citiesList
                .filter(({city}) => city.toLowerCase().indexOf(formik.values.storeAddress.toLowerCase()) !== -1)
                .map(({_id, city}) => (
                        <li key={_id}>
                            <button onClick={e => handleClick(e)} value={city}>{city}</button>
                        </li>
                    )
                )

    }
    useEffect(() => {
        if (city.length === 3)
            dispatch(sendCitiesRequest({
                    city: city,
                    country: country
                }
            ))

    }, [city])

    return (
        <div className={`country-label ${showCitiesList && 'active'}`}>
            <label htmlFor="storeAddress-input">
                <Field
                    id="storeAddress-input"
                    name="storeAddress"
                    autoComplete="whatever"
                    validate={validateCity}
                    disabled={!country}
                    onFocus={() => toggleShowCitiesList(true)}
                    placeholder="Store address"
                    className={`cart__form-item ${formik.touched.storeAddress && formik.errors.storeAddress ? 'invalid' : ''}`}
                />
            </label>
            {showCitiesList &&
                <>
                    <ul className="country-list">
                        {renderCities()}
                    </ul>
                    <span className="label-arrow">
                    <SvgGenerator id="arrow"/>
                    </span>
                </>
            }
        </div>
    )
}
export default CustomFieldCities;