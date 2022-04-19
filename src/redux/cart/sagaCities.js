import {call, put} from "redux-saga/effects";
import {sendCitiesError, sendCitiesResponse, sendCitiesSuccess} from "./actions";

async function citiesRequestWorker(data) {
    return await fetch('https://training.cleverland.by/shop/search/cities',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
}

export function* sagaCitiesWorker(action) {
    try {
        const response = yield call(citiesRequestWorker, action.payload);
        const jsonResponse = yield response.text();
        yield put(sendCitiesSuccess());
        yield put(sendCitiesResponse(JSON.parse(jsonResponse)));
    } catch (error) {
        console.log(error)
        yield put(sendCitiesError())
    }
}

