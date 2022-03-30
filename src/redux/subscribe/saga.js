//Подписка
import {call, put} from "redux-saga/effects";
import {
    mailSendResponse,
    mailSendResponseFooter,
    sendMailError, sendMailErrorFooter,
    sendMailSuccess,
    sendMailSuccessFooter
} from "./actions";

export function* sagaSubscribeWorker(action) {
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
export function* sagaSubscribeFooterWorker(action) {
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