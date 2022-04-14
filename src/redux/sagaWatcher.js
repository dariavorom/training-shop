import {takeLatest} from 'redux-saga/effects';
//types
import {REQUEST_PRODUCTS} from "./products/products.types";
import {REQUEST_PRODUCT} from "./product/product.types";
import {SEND_MAIL_REQUEST, SEND_MAIL_REQUEST_FOOTER} from "./subscribe/types";
import {SEND_REVIEW_REQUEST} from "./review/types";
import {SEND_CITIES_REQUEST, SEND_COUNTRIES_REQUEST, SEND_ORDER_REQUEST} from "./cart/types";
//sagas
import {sagaProductWorker} from "./product/saga";
import {sagaProductsWorker} from "./products/saga";
import {sagaReviewWorker} from "./review/saga";
import {sagaSubscribeFooterWorker, sagaSubscribeWorker} from "./subscribe/saga";
import {sagaCountriesWorker} from "./cart/sagaCountries";
import {sagaCitiesWorker} from "./cart/sagaCities";
import {sagaOrderWorker} from "./cart/sagaOrder";

export function* sagaWatcher() {
    yield takeLatest(REQUEST_PRODUCTS, sagaProductsWorker)
    yield takeLatest(REQUEST_PRODUCT, sagaProductWorker)
    yield takeLatest(SEND_MAIL_REQUEST, sagaSubscribeWorker)
    yield takeLatest(SEND_MAIL_REQUEST_FOOTER, sagaSubscribeFooterWorker)
    yield takeLatest(SEND_REVIEW_REQUEST, sagaReviewWorker)
    yield takeLatest(SEND_ORDER_REQUEST, sagaOrderWorker)
    yield takeLatest(SEND_COUNTRIES_REQUEST, sagaCountriesWorker)
    yield takeLatest(SEND_CITIES_REQUEST, sagaCitiesWorker)
}


