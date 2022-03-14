import cart from "../header/assets/img/cart.svg";
import { connect } from 'react-redux';
const CartButton = ({toggleCartMode, itemsCount}) => {
  return (
      <button data-test-id='cart-button' className='personal__item cart-btn' onClick={toggleCartMode}>
          <span className='count'>{itemsCount}</span>
          <img src={cart} alt=""/>
      </button>
  )
}
const mapStateToProps = state => ({
    itemsCount: state.cart.cartItems.length
});
export default connect(mapStateToProps)(CartButton);