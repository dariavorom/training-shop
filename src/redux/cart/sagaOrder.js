import {call, put} from "redux-saga/effects";
import {orderComplete, orderError} from "./actions";

export function* sagaOrderWorker(action) {
    try {
        const response = yield call(orderRequestWorker, action.payload);
        const jsonResponse = yield response.text();
        const message = yield JSON.parse(jsonResponse).message;
        if (response.status === 200) {
            yield put(orderComplete());
        } else {
            yield put(orderError(message))
        }
    } catch (error) {
        console.log(error)
        yield put(orderError('Failed to fetch'))
    }
}

async function orderRequestWorker(data) {
    return await fetch('https://training.cleverland.by/shop/cart',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
}