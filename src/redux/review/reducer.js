import * as types from './types';

const initialState = {
    isReviewSendLoading: false,
    isReviewSendSuccess: false,
    isReviewSendError: false,
    reviewSendResponse: null
}
export const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEND_REVIEW_REQUEST:
            return {...state, isReviewSendLoading: true}
        case types.SEND_REVIEW_SUCCESS:
            return {...state, isReviewSendSuccess: true, isReviewSendLoading: false, isReviewSendError: false}
        case types.SEND_REVIEW_ERROR:
            return {...state, isReviewSendError: true, isReviewSendSuccess: false, isReviewSendLoading: false}
        case types.SEND_REVIEW_RESPONSE:
            return {...state, reviewSendResponse: action.payload}
        default:
            return state;
    }
}