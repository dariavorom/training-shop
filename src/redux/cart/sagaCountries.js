import {call, put} from "redux-saga/effects";
import {isRequestCountriesError, isRequestCountriesSuccess, loadCountries} from "./actions";


export function* sagaCountriesWorker() {
    try {
        const countries = yield call(countriesRequestWorker)
        yield put(loadCountries(countries));
        yield put(isRequestCountriesSuccess())
    } catch (error) {
        console.log(error)
        yield put(isRequestCountriesError())
    }
}

async function countriesRequestWorker() {
    const response = await fetch('https://training.cleverland.by/shop/countries');
    return await response.json();
}