import React, {useEffect, useRef} from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import './feedback.scss';
import {useDispatch, useSelector} from "react-redux";
import {sendReviewRequest} from "../../redux/review/actions";
import FeedbackStarRating from "./Feedback-star-rating";
import {useLocation} from "react-router-dom";
import {validationText} from "../functions/validation";

const Feedback = ({active, toggleActive, togglePopup, id}) => {
    const url = useLocation().pathname;
    const formikRef = useRef();
    const dispatch = useDispatch();
    const {
        isReviewSendLoading,
        isReviewSendSuccess,
        isReviewSendError,
        reviewSendResponse
    } = useSelector(state => state.reviews);
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
            setTimeout(() => {
                togglePopup(false);
            }, 1000)
        }
    }, [isReviewSendError, isReviewSendSuccess, isReviewSendLoading])
    useEffect(() => {
        togglePopup(false);
    }, [id])
    useEffect(() => {
        formikRef.current.resetForm();
    }, [url])
    return (
        <div className={`reviews-popup ${active ? 'active' : 'not-active'}`}
             onClick={toggleActive}>
            <div className="reviews-popup-content">
                <div data-test-id="review-modal" className="reviews-popup__wrapper" onClick={e => e.stopPropagation()}>
                    <button className={'reviews-popup__close-btn'} onClick={toggleActive}>
                        <span/>
                        <span/>
                    </button>
                    <h3 className={'reviews-popup__title'}>Write a review</h3>
                    <Formik
                        innerRef={formikRef}
                        initialValues={{
                            id: id,
                            name: '',
                            text: '',
                            rating: 1
                        }}
                        enableReinitialize={true}
                        validate={validationText}
                        onSubmit={(values) => {
                            console.log( values )
                            dispatch(sendReviewRequest(values));
                        }}
                    >
                        {formik => {
                            console.log(formik.errors);
                            return (
                                <>
                                    <FeedbackStarRating rating={formik.values.rating} isRatingInteractive={true}
                                                        formControle={formik.setFieldValue}/>
                                    <Form className={'reviews-popup__form'}>
                                        <Field
                                            data-test-id="review-name-field"
                                            name="name"
                                            placeholder="Имя"
                                            className={"reviews-popup__form-item"}/>
                                        <div className={'form__error'}><ErrorMessage name="name"/>
                                        </div>
                                        <Field
                                            as={'textarea'}
                                            data-test-id="review-text-field"
                                            name="text"
                                            placeholder="Комментарий"
                                            className={'reviews-popup__form-item reviews-popup__form-item--textarea'}/>
                                        <div className={'form__error'}><ErrorMessage name="text"/>
                                        </div>
                                        <button data-test-id="review-submit-button"
                                                className={'reviews-popup__form-btn btn-dark btn-submit'}
                                                type="submit"
                                                disabled={!formik.isValid || !formik.dirty || isReviewSendLoading}>
                                            {isReviewSendLoading && <div className="lds-dual-ring"/>}
                                            <span>Send</span>
                                        </button>
                                    </Form>
                                </>
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