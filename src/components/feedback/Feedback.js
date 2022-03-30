import React, {useEffect, useRef, useState} from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import './feedback.scss';
import {useDispatch, useSelector} from "react-redux";
import {sendReviewRequest} from "../../redux/review/actions";
import FeedbackStarRating from "./Feedback-star-rating";
import {useLocation} from "react-router-dom";

const Feedback = ({active, toggleActive, togglePopup, id, rating}) => {
    const [curRating, setCurRating] = useState(null);
    const url = useLocation().pathname;
    const formikRef = useRef();
    const dispatch = useDispatch();
    const {
        isReviewSendLoading,
        isReviewSendSuccess,
        isReviewSendError,
        reviewSendResponse
    } = useSelector(state => state.reviews);
    const ErrorSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Слишком короткое имя!')
            .max(20, 'Слишком длинное имя')
            .required('Введите имя'),
        text: Yup.string()
            .min(5, 'Напишите что-нибудь еще')
            .max(70, 'Слишком большой отзыв')
            .required('Введите отзыв'),
    });
    useEffect(() => {
        document.body.classList.add(`${active ? 'lock' : 'unlock'}`);
        return () => {
            document.body.classList.remove('lock');
        };
    }, [active]);
    useEffect(() => {
        if (isReviewSendError) {
            togglePopup(true);
        } else if (isReviewSendSuccess) {
            formikRef.current.resetForm();
            setTimeout(()=> {
                togglePopup(false);
            }, 1000)
        }
    }, [isReviewSendError, isReviewSendSuccess])
    useEffect(()=> {
        togglePopup(false);
    }, [id])
    useEffect(() => {
        formikRef.current.resetForm();
    }, [url])
    return (
        <div data-test-id="review-modal" className={`reviews-popup ${active ? 'active' : 'not-active'}`} onClick={toggleActive}>
            <div className="reviews-popup-content">
                <div className="reviews-popup__wrapper" onClick={e=>e.stopPropagation()}>
                    <button className={'reviews-popup__close-btn'} onClick={toggleActive}>
                        <span/>
                        <span/>
                    </button>
                    <h3 className={'reviews-popup__title'}>Write a review</h3>
                    <FeedbackStarRating rating={rating} setCurRating={setCurRating}/>
                    <Formik
                        innerRef={formikRef}
                        initialValues={{
                            id: id,
                            name: '',
                            text: '',
                        }}
                        validateOnChange
                        validationSchema={ErrorSchema}
                        onSubmit={(values, actions) => {
                            dispatch(sendReviewRequest(id, {...values, rating: curRating}));
                        }}
                    >
                        {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => {
                            return (
                                <Form className={'reviews-popup__form'}>
                                    <Field name="name">
                                        {({field, form, meta}) => (
                                            <>
                                                <input data-test-id="review-name-field" {...field} type="text"
                                                       placeholder="Имя"
                                                       className={'reviews-popup__form-item'} autoComplete={'off'}/>
                                                {errors.name &&
                                                    <div className={'form__error'}><ErrorMessage name="name"/>
                                                    </div>}
                                            </>
                                        )}
                                    </Field>
                                    <Field
                                        name="text">
                                        {({field, form, meta}) => (
                                            <>
                                    <textarea data-test-id="review-text-field" {...field} onBlur={handleBlur}
                                              placeholder="Комментарий"
                                              className={'reviews-popup__form-item reviews-popup__form-item--textarea'}/>
                                                {errors.text &&
                                                    <div className={'form__error'}><ErrorMessage name="text"/>
                                                    </div>}
                                            </>
                                        )}
                                    </Field>
                                    <button data-test-id="review-submit-button"
                                            className={'reviews-popup__form-btn btn-dark btn-submit'}
                                            type="submit"
                                            disabled={!isValid || !dirty || isReviewSendLoading}
                                            onClick={handleSubmit}>
                                        {isReviewSendLoading && <div className="lds-dual-ring"/>}
                                        <span>Send</span>
                                    </button>
                                </Form>
                            )
                        }}
                    </Formik>
                    {reviewSendResponse && <div
                        className={`response-message ${isReviewSendSuccess ? 'success' : isReviewSendError ? 'error' : null}`}>{reviewSendResponse}</div>}
                </div>
            </div>
        </div>
    )
}
export default Feedback;