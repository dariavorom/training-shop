//Запрос одного продукта
import {call, put} from "redux-saga/effects";
import {loadProduct} from "./actions";
import {showError} from "../products/actions";

async function productRequestWorker(id) {
    const response = await fetch(`https://training.cleverland.by/shop/product/${id}`)
    return await response.json()
}

export function* sagaProductWorker(action) {
    try {
        const payload = yield call(productRequestWorker, action.payload)
        yield put(loadProduct(payload))
    } catch (error) {
        console.log(error)
        yield put(showError())
    }
}

