import React, {useEffect, useRef} from "react";
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";

import {sendMailRequestFooter} from "../../../redux/subscribe/actions";
import {validationEmail} from "../../functions/validation";

import './joinUs.scss';

import facebook from "../../header/assets/img/facebook.svg";
import twitter from "../../header/assets/img//twitter.svg";
import instagram from "../../header/assets/img/instagram.svg";
import pinterest from "../../header/assets/img/pinterest.svg";

export const JoinUs = () => {
    const dispatch = useDispatch();
    const url = useLocation().pathname;
    const formikRef = useRef();
    const {
        isMailSendLoading,
        isMailSendSuccess,
        isMailSendError,
        mailSendResponse
    } = useSelector(state => state.subscribe.subscribeFooter);

    useEffect(() => {
        formikRef.current.resetForm();
    }, [url])
    useEffect(() => {
        if (isMailSendSuccess) {
            formikRef.current.resetForm();
        }
    }, [isMailSendSuccess, isMailSendLoading])
    return (
        <div className={'joinus'}>
            <div className="container">
                <div className={'joinus-wrapper'}>
                    <div className={'joinus__title'}>BE IN TOUCH WITH US:</div>
                    <Formik
                        innerRef={formikRef}
                        initialValues={{
                            email_main: "",
                        }}
                        enableReinitialize={true}
                        validate={validationEmail}
                        onSubmit={(values, actions) => {
                            dispatch(sendMailRequestFooter(values));
                            setTimeout(() => {
                                actions.resetForm();
                            }, 10000)
                        }}
                    >
                        {formik => {
                            return (
                                <Form className={'joinus__form'}>
                                    <div className={'input-wrapper'}>
                                        <Field name="email_main"
                                               type="email"
                                               placeholder="Enter your email"
                                               data-test-id="footer-mail-field"/>
                                            <div className={'form__error'}><ErrorMessage name="email_main"/>
                                            </div>
                                    </div>
                                    <button data-test-id="footer-subscribe-mail-button"
                                            className={'joinus__btn btn-submit'}
                                            type="submit"
                                            disabled={!formik.isValid || !formik.dirty || isMailSendLoading || formik.isSubmitting}><span>join us</span>
                                    </button>
                                    {isMailSendLoading && <div className="lds-dual-ring"/>}
                                </Form>
                            )
                        }}
                    </Formik>
                    <div className="joinus__socials">
                        <Link to={'/'} className={'joinus__socials-link'}>
                            <img src={facebook} alt="facebook"/>
                        </Link>
                        <Link to={'/'} className={'joinus__socials-link'}>
                            <img src={twitter} alt="twitter"/>
                        </Link>
                        <Link to={'/'} className={'joinus__socials-link'}>
                            <img src={instagram} alt="instagram"/>
                        </Link>
                        <Link to={'/'} className={'joinus__socials-link'}>
                            <img src={pinterest} alt="pinterest"/>
                        </Link>
                    </div>
                </div>
                {mailSendResponse && <div
                    className={`response-message ${isMailSendSuccess ? 'success' : isMailSendError ? 'error' : null}`}>{mailSendResponse}</div>}
            </div>
        </div>
    )
}