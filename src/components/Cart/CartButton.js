import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/uislice'
import { useSelector } from 'react-redux'
const CartButton = (props) => {
  const cartQuantity = useSelector(state => state.cart.totalquantity)
  const dispatch = useDispatch()
  const toggleHandler = () => {
    dispatch(uiActions.toggle())
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
