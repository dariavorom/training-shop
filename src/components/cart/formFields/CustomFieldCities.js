import {Field} from "formik";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sendCitiesRequest} from "../../../redux/cart/actions";
import {SvgGenerator} from "../../svg-generator/SvgGenerator";

const CustomFieldCities = ({formik, city, country}) => {
    const dispatch = useDispatch();
    const {citiesList, isRequestSuccess} = useSelector(state => state.cart.cities);
    const [showCitiesList, toggleShowCitiesList] = useState(false);

    const validateCity = (value) => {
        let errors;
        if (isRequestSuccess && citiesList.length) {
            const citiesArray = citiesList.map(({city}) => {
                return city
            });
            const countriesArray = new Set(citiesList.map(({country}) => {
                return country
            }));
            if (!citiesArray.includes(value) || !countriesArray.has(country)) {
                errors = 'Нету результатов';
            }
        }
        if (isRequestSuccess && !citiesList.length) {
            errors = 'Нету результатов';
        }
        return errors;
    }

    const renderCities = () => {
        if (isRequestSuccess && citiesList.length) {
            return citiesList.map(({_id, city}) => {
                if (city.indexOf(formik.values.storeAddress) !== -1) {
                    return (
                        <li key={_id}
                            onClick={e => {
                                formik.setFieldValue('storeAddress', e.target.textContent)
                            }}>
                            {city}
                        </li>
                    )
                }
            })
        }
    }
    useEffect(() => {
        if (city.length === 3) {
            dispatch(sendCitiesRequest({
                    "city": city,
                    "country": country
                }
            ))
        }
    }, [city])
    return (
        <>
            <label htmlFor="storeAddress-input" className={`country-label ${showCitiesList && 'active'}`}
                   onClick={() => toggleShowCitiesList(!showCitiesList)}>
                <Field
                    id="storeAddress-input"
                    name="storeAddress"
                    autoComplete="whatever"
                    validate={validateCity}
                    disabled={!country}
                    placeholder="Store address"
                    className={`cart__form-item ${formik.touched.storeAddress && formik.errors.storeAddress ? 'invalid' : ''}`}
                />
                {showCitiesList &&
                    <>
                        <ul className="country-list"
                            onClick={e => e.stopPropagation()}>
                            {renderCities()}
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
export default CustomFieldCities;