//Отзывы
import {call, put} from "redux-saga/effects";
import {sendReviewError, sendReviewResponse, sendReviewSuccess} from "./actions";
import {requestProduct} from "../product/product.actions";

export function* sagaReviewWorker(action) {
    try {
        const response = yield call(reviewRequestWorker, action.payload.review)
        if (response.status === 200) {
            yield put(sendReviewSuccess());
            yield put(sendReviewResponse('Ваш отзыв отправлен'));
            const delay = time => new Promise(resolve => setTimeout(resolve, time));
            yield delay(2000);
            yield put(requestProduct(action.payload.id));
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