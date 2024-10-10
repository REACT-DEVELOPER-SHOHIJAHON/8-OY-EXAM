import { useGetProductsMascaraQuery } from "../../redux/api/products";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/slice/CartSlice";
import { useDispatch } from "react-redux";
import { Product } from "../../types/auth";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { notification } from 'antd';

const Mascra = () => {
    const { data } = useGetProductsMascaraQuery(undefined);
    const currency = useSelector((state: RootState) => state.currency.selected);
    const dispatch = useDispatch();

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
        notification.success({
            message: `You ${product.name} The product has been added to the cart`,
        });
    };

    const Price = (price: string) => {
        const numericPrice = parseFloat(price);
        if (isNaN(numericPrice)) return "";

        if (currency === "UZS") {
            return (numericPrice * 12600).toLocaleString() + " UZS";
        }
        return "$" + numericPrice.toFixed(2);
    };

    return (
        <div className="hit">
            <div className="container">
                <h2 className="hit__title mr-5 mt-5">Category: Mascara</h2>
                <div className="hit__wrapperr">
                    {data?.map((item) => (
                        <div key={item.id} className="hit__card">
                            <div className="hit__badge">HIT</div>
                            <Link to={`/details/${item.id}`}>
                                <img className="hit__img" src={item.image_link} alt={item.name} />
                            </Link>
                            <div className="hit__content">
                                <h3 className="hit__name">{item.name}</h3>
                                <p className="hit__price">
                                    <span>Price</span>
                                    <span className="hit__price-new">{Price(item.price)}</span>
                                </p>
                                <p className="hit__rating">
                                    <span>★★★★★ {item.rating}</span>
                                    <span>5</span>
                                </p>
                                <button onClick={() => handleAddToCart(item)} className="hit__buy-btn">Купить</button>
                            </div>
                        </div>
                    )).slice(32, 76)}
                </div>
            </div>
        </div>
    );
};

export default Mascra;