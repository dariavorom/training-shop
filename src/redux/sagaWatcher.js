import {takeLatest} from 'redux-saga/effects';
//types
import {REQUEST_PRODUCTS} from "./products/products.types";
import {REQUEST_PRODUCT} from "./product/product.types";
import {SEND_MAIL_REQUEST, SEND_MAIL_REQUEST_FOOTER} from "./subscribe/types";
import {SEND_REVIEW_REQUEST} from "./review/types";
//sagas
import {sagaProductWorker} from "./product/saga";
import {sagaProductsWorker} from "./products/saga";
import {sagaReviewWorker} from "./review/saga";
import {sagaSubscribeFooterWorker, sagaSubscribeWorker} from "./subscribe/saga";

export function* sagaWatcher() {
    yield takeLatest(REQUEST_PRODUCTS, sagaProductsWorker)
    yield takeLatest(REQUEST_PRODUCT, sagaProductWorker)
    yield takeLatest(SEND_MAIL_REQUEST, sagaSubscribeWorker)
    yield takeLatest(SEND_MAIL_REQUEST_FOOTER, sagaSubscribeFooterWorker)
    yield takeLatest(SEND_REVIEW_REQUEST, sagaReviewWorker)
}


