import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {setOrderFormStep, setOrderValues} from "../../../redux/cart/actions";
import {InitialValues} from "../formModel/initialValues";

export const CartOrderFail = () => {
    const dispatch = useDispatch();
    const {errorMessage} = useSelector(state => state.cart.order);
    return (
        <>
            <div className='cart__order-result order-result'>
                <h4 className="order-result__title">Sorry,<br/>your payment has not been processed.</h4>
                <p>{errorMessage}</p>
            </div>
            <div className={'cart__bottom'}>
                <div className="cart__btns">
                    <button className="btn-dark" type="submit" onClick={() => dispatch(setOrderFormStep(2))}>back to payment</button>
                    <button className="btn-light" onClick={() => {
                        dispatch(setOrderValues(InitialValues));
                        dispatch(setOrderFormStep(0));
                    }}>view cart</button>
                </div>
            </div>
        </>
    )
}