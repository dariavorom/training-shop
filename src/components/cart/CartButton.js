import cart from "../header/assets/img/cart.svg";
import {connect, useDispatch, useSelector} from 'react-redux';
import {toggleCartOpen} from "../../redux/cart/actions";
const CartButton = ({itemsCount}) => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(state => state.cart.isCartOpen);
  return (
      <button data-test-id='cart-button' className='personal__item cart-btn' onClick={() => dispatch(toggleCartOpen(!isCartOpen))}>
          <span className='count'>{itemsCount}</span>
          <img src={cart} alt=""/>
      </button>
  )
}
const mapStateToProps = state => ({
    itemsCount: state.cart.cartItems.length
});
export default connect(mapStateToProps)(CartButton);