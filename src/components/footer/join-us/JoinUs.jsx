import facebook from "../../header/assets/img/facebook.svg";
import twitter from "../../header/assets/img//twitter.svg";
import instagram from "../../header/assets/img/instagram.svg";
import pinterest from "../../header/assets/img/pinterest.svg";
import './join-us.scss';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {sendMailRequestFooter} from "../../../redux/subscribe/actions";
import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

const JoinUs = () => {
    const dispatch = useDispatch();
    const {
        isMailSendLoading,
        isMailSendSuccess,
        isMailSendError,
        mailSendResponse
    } = useSelector(state => state.subscribe.subscribeFooter);

    const ErrorSchema = Yup.object().shape({
        email: Yup.string()
            .matches(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, 'Некорретный email')
            .required('Введите email')
    });

    return (
        <div className={'joinus'}>
            <div className="container">
                <div className={'joinus-wrapper'}>
                    <div className={'joinus__title'}>BE IN TOUCH WITH US:</div>
                    <Formik
                        initialValues={{
                            email: "",
                        }}
                        validateOnChange
                        validationSchema={ErrorSchema}
                        onSubmit={(values, actions) => {
                            dispatch(sendMailRequestFooter(values));
                            actions.resetForm();

                        }}
                    >
                        {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => {
                            return (
                                <Form className={'joinus__form'}>
                                    <Field name="email">
                                        {({field, form, meta}) => (
                                            <div className={'input-wrapper'}>
                                                <input data-test-id="footer-mail-field" {...field} type="email"
                                                       placeholder="Enter your email" autoComplete='off'/>
                                                {errors.email &&
                                                    <div className={'form__error'}><ErrorMessage name="email"/>
                                                    </div>}
                                            </div>
                                        )}
                                    </Field>
                                    <button data-test-id="footer-subscribe-mail-button"
                                            className={'joinus__btn btn-submit'}
                                            type="submit"
                                            disabled={!isValid || !dirty || isMailSendLoading}
                                            onClick={handleSubmit}><span>join us</span>
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
export default JoinUs;