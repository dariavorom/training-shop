import * as types from './types';

export function sendReviewRequest(id, review) {
    return {
        type: types.SEND_REVIEW_REQUEST,
        payload: {id, review}
    }
}

export function sendReviewSuccess() {
    return {
        type: types.SEND_REVIEW_SUCCESS
    }
}
export function sendReviewError() {
    return {
        type: types.SEND_REVIEW_ERROR
    }
}
export function sendReviewResponse(text) {
    return {
        type: types.SEND_REVIEW_RESPONSE,
        payload: text
    }
}
