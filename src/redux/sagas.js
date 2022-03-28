import {call, put, takeLatest} from 'redux-saga/effects';
import {REQUEST_PRODUCTS} from "./app.types";
import {REQUEST_PRODUCT} from "./product.types";
import {loadProducts, showError} from "./app.actions";
import {loadProduct} from "./product.actions";
import {SEND_MAIL_REQUEST, SEND_MAIL_REQUEST_FOOTER} from "./subscribe/types";
import {
    mailSendResponse,
    mailSendResponseFooter,
    sendMailError, sendMailErrorFooter,
    sendMailSuccess,
    sendMailSuccessFooter
} from "./subscribe/actions";
import {SEND_REVIEW_REQUEST} from "./review/types";
import {sendReviewError, sendReviewResponse, sendReviewSuccess} from "./review/actions";

export function* sagaWatcher() {
    yield takeLatest(REQUEST_PRODUCTS, sagaProductsWorker)
    yield takeLatest(REQUEST_PRODUCT, sagaProductWorker)
    yield takeLatest(SEND_MAIL_REQUEST, sagaSubscribeWorker)
    yield takeLatest(SEND_MAIL_REQUEST_FOOTER, sagaSubscribeFooterWorker)
    yield takeLatest(SEND_REVIEW_REQUEST, sagaReviewWorker)
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

//Подписка
function* sagaSubscribeWorker(action) {
    try {
        const response = yield call(subscribeRequestWorker, action.payload)
        if (response.status === 200) {
            yield put(sendMailSuccess())
            yield put(mailSendResponse('Почта отправлена успешно'))
        }
    } catch (error) {
        console.log(error)
        yield put(sendMailError())
        yield put(mailSendResponse('Ошибка при отправе почты'))
    }
    const delay = time => new Promise(resolve => setTimeout(resolve, time));
    yield delay(5000)
    yield put(mailSendResponse(null))
}

//Подписка в футере
function* sagaSubscribeFooterWorker(action) {
    try {
        const response = yield call(subscribeRequestWorker, action.payload)
        if (response.status === 200) {
            yield put(sendMailSuccessFooter())
            yield put(mailSendResponseFooter('Почта отправлена успешно'))
        }
    } catch (error) {
        console.log(error)
        yield put(sendMailErrorFooter())
        yield put(mailSendResponseFooter('Ошибка при отправе почты'))
    }
    const delay = time => new Promise(resolve => setTimeout(resolve, time));
    yield delay(5000)
    yield put(mailSendResponseFooter(null))
}

async function subscribeRequestWorker(data) {
    return await fetch('https://training.cleverland.by/shop/email', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            mail: data
        })
    });
}

function* sagaReviewWorker(action) {
    try {
        const response = yield call(reviewRequestWorker, action.payload.review)
        if (response.status === 200) {
            yield put(sendReviewSuccess())
            yield put(sendReviewResponse('Ваш отзыв отправлен'))
            const delay = time => new Promise(resolve => setTimeout(resolve, time));
            yield delay(3000)
            yield call(sagaProductWorker, {payload: action.payload.id});
            yield call(sagaProductsWorker);
            yield put(sendReviewResponse(null))
        }
    } catch (error) {
        console.log(error)
        yield put(sendReviewError())
        yield put(sendReviewResponse('Ошибка при отправе отзыва'))
    }

}

async function reviewRequestWorker(data) {
    return await fetch('https://training.cleverland.by/shop/product/review', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}