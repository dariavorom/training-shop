import woman from './assets/woman.png';
import man from './assets/man.png';
import classes from './subscribe.module.scss';
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {sendMailRequest} from "../../../redux/subscribe/actions";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";

const Subscribe = () => {
    const dispatch = useDispatch();
    const {
        isMailSendLoading,
        isMailSendSuccess,
        isMailSendError,
        mailSendResponse
    } = useSelector(state => state.subscribe.subscribe);
    const ErrorSchema = Yup.object().shape({
        email: Yup.string()
            .matches(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, 'Некорретный email')
            .required('Введите email')
    });
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
                        initialValues={{
                            email: "",
                        }}
                        validateOnChange
                        validationSchema={ErrorSchema}
                        onSubmit={(values, actions) => {
                            dispatch(sendMailRequest(values));
                            actions.resetForm();
                        }}
                    >
                        {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => {
                            return (
                                <Form className={classes.subscribe__form}>
                                    <Field name="email">
                                        {({field, form, meta}) => (
                                            <>
                                                <input data-test-id="main-subscribe-mail-field" {...field} type="email" placeholder="Enter your email" autoComplete='off'/>
                                                {errors.email &&
                                                    <div className={'form__error'}><ErrorMessage name="email"/>
                                                    </div>}
                                            </>
                                        )}
                                    </Field>
                                    <button data-test-id="main-subscribe-mail-button" className={'btn-submit'}
                                            type="submit"
                                            disabled={!isValid || !dirty || isMailSendLoading}
                                            onClick={handleSubmit}>
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