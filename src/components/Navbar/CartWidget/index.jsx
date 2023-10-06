import "./style.css";
import Cart from "../../../assets/icons/Cart.jpg";

function CartWidget() {
  return (
    <div className="cart">
      <img src={Cart} alt="cart" className="cart-icon" />
      <p className="number">{3}</p>
    </div>
  );
}
export default CartWidget;
