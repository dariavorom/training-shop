import {Field} from "formik";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sendCitiesRequest} from "../../../redux/cart/actions";

const CustomFieldCities = ({city, country}) => {
    const dispatch = useDispatch();
    const {citiesList, isRequestSuccess} = useSelector(state => state.cart.cities);
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
                errors = 'В данном городе нету магазина';
            }
        }
        return errors;
    }

    const renderCities = () => {
        if (isRequestSuccess && citiesList.length) {
            return citiesList.map(({_id, city}) => {
                return (
                    <option key={_id} value={city}/>
                )
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
            <Field
                name="storeAddress"
                validate={validateCity}
            >
                {({field, meta}) => (
                    <input
                        {...field}
                        disabled={!country}
                        autoComplete="whatever"
                        list="storeAddress"
                        placeholder="Store address"
                        className={`cart__form-item ${meta.touched && meta.error ? 'invalid' : ''}`}/>
                )}
            </Field>
            <datalist id="storeAddress">
                {renderCities()}
            </datalist>
        </>
    )
}
export default CustomFieldCities;