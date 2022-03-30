import woman from './assets/woman.png';
import man from './assets/man.png';
import classes from './subscribe.module.scss';
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useRef} from "react";
import {sendMailRequest} from "../../../redux/subscribe/actions";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useLocation} from "react-router-dom";
import {validationEmail} from "../../functions/validation";

const Subscribe = () => {
    const dispatch = useDispatch();
    const url = useLocation().pathname;
    const formikRef = useRef();
    const {
        isMailSendLoading,
        isMailSendSuccess,
        isMailSendError,
        mailSendResponse
    } = useSelector(state => state.subscribe.subscribe);
    useEffect(() => {
        formikRef.current.resetForm();
    }, [url])
    return (
        <div className={classes.subscribe}>
            <div className="container">
                <div className={classes.subscribe__formWrapper}>
                    <div className={classes.subscribe__title}>
                        Special Offer
                    </div>
                    <div className={classes.subscribe__description}>
                        Subscribe<br/>
                        And <span>Get 10% Off</span>
                    </div>
                    <Formik
                        innerRef={formikRef}
                        initialValues={{
                            email: "",
                        }}
                        enableReinitialize={true}
                        validate={validationEmail}
                        onSubmit={(values, actions) => {
                            dispatch(sendMailRequest(values));
                            actions.resetForm();
                        }}
                    >
                        {formik => {
                            return (
                                <Form className={classes.subscribe__form}>
                                    <Field name="email">
                                        {({field, meta}) => (
                                            <>
                                                <input {...field}
                                                       type="email"
                                                       placeholder="Enter your email"
                                                       data-test-id="main-subscribe-mail-field"/>
                                                {meta.touched && meta.error &&
                                                    <div className={'form__error'}><ErrorMessage name="email"/>
                                                    </div>}
                                            </>
                                        )}
                                    </Field>
                                    <button data-test-id="main-subscribe-mail-button" className={'btn-submit'}
                                            type="submit"
                                            disabled={formik.errors.email || isMailSendLoading}>
                                        {isMailSendLoading && <div className="lds-dual-ring"/>}
                                        <span>Subscribe</span>
                                    </button>
                                    {mailSendResponse && <div
                                        className={`response-message ${isMailSendSuccess ? 'success' : isMailSendError ? 'error' : null}`}>{mailSendResponse}</div>}
                                </Form>
                            )
                        }}
                    </Formik>
                    <img src={woman} alt="" className={classes.subscribe__woman}/>
                    <img src={man} alt="" className={classes.subscribe__man}/>
                </div>
            </div>
        </div>
    );
}
export default Subscribe;