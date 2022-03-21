import {takeLatest, put, call} from 'redux-saga/effects';
import {REQUEST_PRODUCTS} from "./app.types";
import {REQUEST_PRODUCT} from "./product.types";
import {showError, loadProducts} from "./app.actions";
import {loadProduct} from "./product.actions";

export function* sagaWatcher() {
    yield takeLatest(REQUEST_PRODUCTS, sagaProductsWorker)
    yield takeLatest(REQUEST_PRODUCT, sagaProductWorker)
}
//Запрос всех продуктов
function* sagaProductsWorker() {
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

//Запрос одного продукта
function* sagaProductWorker(action) {
    try {
        const payload = yield call(productRequestWorker, action.payload)
        yield put(loadProduct(payload))
    } catch (error) {
        console.log(error)
        yield put(showError())
    }
}
async function productRequestWorker(id) {
    const response = await fetch(`https://training.cleverland.by/shop/product/${id}`)
    return await response.json()
}

