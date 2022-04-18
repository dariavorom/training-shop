import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import CartItems from "./formParts/CartItems";
import CartDelivery from "./formParts/CartDelivery";
import CartPayment from "./formParts/CartPayment";
import {dataToSend} from "../../redux/cart/utils";
import {sendOrderRequest, setOrderFormStep, setOrderValues} from "../../redux/cart/actions";
import {Form, Formik} from "formik";
import {validationDelivery, validationPayment} from "../functions/validation";
import CartOrderFail from "./formParts/CartOrderFail";
import CartOrderSuccess from "./formParts/CartOrderSuccess";

const Order = ({items, total, removeItem, incItem, decItem, onChange}) => {
    const dispatch = useDispatch();
    const {activeStep} = useSelector(state => state.cart.order);
    const {orderComplete, orderError, orderValues} = useSelector(state => state.cart.order);
    const {cartItems} = useSelector(state => state.cart);
    const formikRef = useRef();
    const steps = ['Item In Cart', 'Delivery', 'Payment'];
    const [btnText, setBtnText] = useState('');
    const [agree, setAgree] = useState('notAgree');
    const isLastStep = activeStep === steps.length - 1;
    const products = cartItems.map(({name, sizes, color, quantity}) => {
        return {
            name: name,
            size: sizes,
            color: color,
            quantity: quantity
        }
    })
    function renderStepContent(step, values, formik) {
        switch (step) {
            case 0:
                return <CartItems items={items} removeItem={removeItem} incItem={incItem} decItem={decItem}
                                  onChange={onChange}/>;
            case 1:
                return <CartDelivery values={values} formik={formik} agree={agree} setAgree={setAgree}
                                     showButtonText={showButtonText}/>;
            case 2:
                return <CartPayment values={values} formik={formik} showButtonText={showButtonText}/>;
            default:
                return null;
        }
    }

    function showButtonText(values) {
        switch (values) {
            case 'Check out':
                return setBtnText('Check out');
            case  'further' :
                return setBtnText('further');
            case 'Ready':
                return setBtnText('Ready');
            default:
                return setBtnText('back to shopping');
        }
    }

    function handleSubmit(values, actions) {
        actions.setSubmitting(false);
        actions.setTouched({});
        dispatch(setOrderValues(values));
        if (isLastStep) {
            const data = dataToSend(values);
            dispatch(sendOrderRequest(data));
        } else {
            dispatch(setOrderFormStep(activeStep + 1));
        }
    }

    function handleBack() {
        if (activeStep !== 0) dispatch(setOrderFormStep(activeStep - 1));

    }
    
    useEffect(() => {
        if (formikRef.current) {
            formikRef.current.setFieldValue('products', [...products])
        }
    }, [cartItems, orderError, products])
    useEffect(() => {
        if (formikRef.current) {
            formikRef.current.setFieldValue('totalPrice', total)
        }
    }, [total])
    if (orderError) return <CartOrderFail/>
    if (orderComplete) return <CartOrderSuccess/>
    return (
        <>
            <div className={'cart__header'}>
                {steps.map((label, i) => (
                    <div key={label} className={`cart__header-item ${activeStep === i ? 'active' : ''}`}>
                        {label}
                    </div>
                ))}
            </div>
            <div
                className={`cart__form ${activeStep === 1 ? 'delivery' : activeStep === 2 ? 'payment' : null}`}>
                <div className="cart__form-wrapper">
                    <Formik
                        innerRef={formikRef}
                        initialValues={orderValues}
                        enableReinitialize={false}
                        validate={activeStep === 1 ? validationDelivery : activeStep === 2 ? validationPayment : false}
                        validateOnBlur={true}
                        onSubmit={handleSubmit}>
                        {formik => {
                            return (
                                <Form>
                                    {renderStepContent(activeStep, formik.values, formik, formik.setFieldValue)}
                                </Form>
                            )
                        }}
                    </Formik>
                </div>
            </div>
            <div className={'cart__bottom'}>
                <div className={'cart__total'}>
                    <span className="cart__total-text">Total</span>
                    <span className="cart__total-value">$ {total}</span>
                </div>
                <div className={'cart__btns'}>
                    <button className="btn-dark"
                            onClick={() => {
                                formikRef.current.handleSubmit();
                                !formikRef.current.isValid && (formikRef.current.setFieldValue('agree', false));
                            }}
                            type={"submit"}>{activeStep === 0 ? 'further' : btnText}</button>
                    {activeStep !== 0 &&
                        <button className="btn-light" onClick={() => handleBack()}>view
                            cart</button>}
                </div>
            </div>
        </>
    )
}

export default Order;
