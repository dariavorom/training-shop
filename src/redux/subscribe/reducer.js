import {
    SEND_MAIL_ERROR, SEND_MAIL_REQUEST, SEND_MAIL_RESPONSE, SEND_MAIL_SUCCESS,
    SEND_MAIL_ERROR_FOOTER, SEND_MAIL_REQUEST_FOOTER, SEND_MAIL_RESPONSE_FOOTER, SEND_MAIL_SUCCESS_FOOTER
} from "./types";

const initialState = {
    subscribe: {
        isMailSendLoading: false,
        isMailSendSuccess: false,
        isMailSendError: false,
        mailSendResponse: null
    },
    subscribeFooter: {
        isMailSendLoading: false,
        isMailSendSuccess: false,
        isMailSendError: false,
        mailSendResponse: null
    }
}
export const subscribeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MAIL_REQUEST:
            return {...state, subscribe: {...state.subscribe, isMailSendLoading: true}}
        case SEND_MAIL_SUCCESS:
            return {...state, subscribe: {...state.subscribe, isMailSendSuccess: true, isMailSendLoading: false, isMailSendError: false}}
        case SEND_MAIL_ERROR:
            return {
                ...state,
                subscribe: {
                    ...state.subscribe,
                    isMailSendSuccess: false,
                    isMailSendError: true,
                    isMailSendLoading: false
                }
            }
        case SEND_MAIL_RESPONSE:
            return {
                ...state, subscribe: {...state.subscribe, mailSendResponse: action.payload}
            }
        case SEND_MAIL_REQUEST_FOOTER:
            return {...state, subscribeFooter: {...state.subscribeFooter, isMailSendLoading: true}}
        case SEND_MAIL_SUCCESS_FOOTER:
            return {
                ...state,
                subscribeFooter: {...state.subscribeFooter, isMailSendSuccess: true, isMailSendLoading: false, isMailSendError: false}
            }
        case SEND_MAIL_ERROR_FOOTER:
            return {
                ...state,
                subscribeFooter: {
                    ...state.subscribeFooter,
                    isMailSendSuccess: false,
                    isMailSendError: true,
                    isMailSendLoading: false
                }
            }
        case SEND_MAIL_RESPONSE_FOOTER:
            return {
                ...state, subscribeFooter: {...state.subscribeFooter, mailSendResponse: action.payload}
            }
        default:
            return state
    }
}