import * as types from "./types";
export function sendMailRequest(mail) {
    return {
        type: types.SEND_MAIL_REQUEST,
        payload: mail
    }
}
export function sendMailSuccess() {
    return {
        type: types.SEND_MAIL_SUCCESS
    }
}
export function sendMailError() {
    return {
        type: types.SEND_MAIL_ERROR
    }
}
export function mailSendResponse(text) {
    return {
        type: types.SEND_MAIL_RESPONSE,
        payload: text
    }
}
export function sendMailRequestFooter(mail) {
    return {
        type: types.SEND_MAIL_REQUEST_FOOTER,
        payload: mail
    }
}
export function sendMailSuccessFooter() {
    return {
        type: types.SEND_MAIL_SUCCESS_FOOTER
    }
}
export function sendMailErrorFooter() {
    return {
        type: types.SEND_MAIL_ERROR_FOOTER
    }
}
export function mailSendResponseFooter(text) {
    return {
        type: types.SEND_MAIL_RESPONSE_FOOTER,
        payload: text
    }
}