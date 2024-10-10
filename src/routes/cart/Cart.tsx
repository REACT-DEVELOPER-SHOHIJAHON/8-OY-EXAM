import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCartItem, addToCart, } from "../../redux/slice/CartSlice";
import { RootState } from "../../redux/store";
import { FaTrashAlt, FaShoppingCart } from "react-icons/fa"; 
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi"; 
import "./cart.css";

const Cart = () => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const currency = useSelector((state: RootState) => state.currency.selected);

  const formatPrice = (price: number | string) => {
    const numericPrice = typeof price === "string" ? parseFloat(price) : price;
    if (isNaN(numericPrice)) return "";

    if (currency === "UZS") {
      return (numericPrice * 12600).toLocaleString() + " UZS";
    }
    return "$" + numericPrice.toFixed(2);
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <h2 className="cart-title">Basket</h2>
        {cart.products.length === 0 ? (
          <div className="empty-cart">
            <h3 className="empty-title">Basket head</h3>
            <p className="empty-subtitle">Add something to the cart</p>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cart.products.map((product: any) => (
                <div key={product.id} className="cart-item">
                  <div className="product-info">
                    <img
                      src={product.image_link}
                      alt={product.name}
                      className="product-image"
                    />
                    <div className="product-details">
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-price">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                  </div>

                  <div className="product-quantity">
                    <button
                      onClick={() => dispatch(removeFromCart(product))}
                      className="quantity-button"
                    >
                      <FiMinusCircle style={{ color: "red", fontSize: "20px" }} />
                    </button>
                    <span className="quantity-value">{product.quantity}</span>
                    <button
                      onClick={() => dispatch(addToCart(product))}
                      className="quantity-button"
                    >
                      <FiPlusCircle style={{ color: "green", fontSize: "20px" }} />
                    </button>
                  </div>

                  <div className="product-total">
                    {formatPrice(product.price * product.quantity)}
                  </div>

                  <button
                    onClick={() => dispatch(clearCartItem(product))}
                    className="clear-button"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <p className="summary-title">Overall</p>
              <p className="summary-price">
                {formatPrice(
                  cart.products.reduce(
                    (total: number, product: any) =>
                      total + product.price * product.quantity,
                    0
                  )
                )}
              </p>
              <div className="checkout-button-container">
                <button className="checkout-button">
                  <FaShoppingCart /> Overall Prise
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;