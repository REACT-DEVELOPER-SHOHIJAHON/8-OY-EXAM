import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../redux/api/products.ts";
import "./details.css";
import { addToCart } from "../../redux/slice/CartSlice";
import { useDispatch } from "react-redux";
import { Product } from "../../types/auth";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { notification } from "antd";

const Details = () => {
  const { id } = useParams();
  const { data } = useGetProductByIdQuery(id);
  
  const currency = useSelector((state: RootState) => state.currency.selected);
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
    notification.success({
        message : `You ${product.name}  The product has been added to the cart`,
    });
  };

  const Price = (price: string) => {
    const numbericPrice = parseFloat(price);
    if (isNaN(numbericPrice)) return "";

    if (currency === "UZS") {
      return (numbericPrice * 12600).toLocaleString() + " UZS";
    }
    return "$" + numbericPrice.toFixed(2);
  };

  const product = data;

  return (
    <div className="details-page">
      {product ? (
        <div className="details">
          <div className="details-container">
            <div className="details-wrapper">
              <div className="details-header">
                <span className="deal-tag">DEAL</span>
                <h1>{product.name}</h1>
                <div className="product-rating">
                  <span>⭐⭐⭐⭐</span>
                  <span>{product.reviews} 2923 reviews</span>
                </div>
              </div>

              <div className="promo-section">
                <span className="promo-label">PROMOTION</span>
                <p>{product.description}</p>
                <p>There are 26 days left until the end of the promotion 14:12:43</p>
              </div>
            </div>

            <div className="details-image">
              <img src={product.image_link} alt={product.name} />
            </div>

            <div className="details-info">
              <p className="product-price">{Price(product.price)}</p>

              <div className="details-actions">
                <select className="size-selector">
                  <option value="100ml">100ml</option>
                  <option value="50ml">50ml</option>
                </select>
                <button onClick={() => handleAddToCart(product)} className="buy-button">Buy Now</button>
              </div>

              <p className="availability">
                {product.in_stock ? "In stock!" : "Not available"}
              </p>
              <p className="product-code">Product code: {product.id}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>No product found</div>
      )}
    </div>
  );
};

export default Details;