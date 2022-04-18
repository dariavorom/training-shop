//Запрос всех продуктов
import {call, put} from "redux-saga/effects";
import {loadProducts, showError} from "./actions";

export function* sagaProductsWorker() {
    try {
        const payload = yield call(productsRequestWorker)
        yield put(loadProducts(payload))
    } catch (error) {
        console.log(error)
        yield put(showError())
    }
}

async function productsRequestWorker() {
    const response = await fetch('https://training.cleverland.by/shop/products')
    return await response.json()
}