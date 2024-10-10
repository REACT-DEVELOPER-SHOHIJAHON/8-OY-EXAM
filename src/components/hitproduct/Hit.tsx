import { AiOutlineHeart } from "react-icons/ai"; 
import { FcLike } from "react-icons/fc";
import { useGetProductsQuery } from "../../redux/api/products";
import "./hit.css";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/slice/CartSlice";
import { useDispatch } from "react-redux";
import { likeProduct, unlikeProduct } from "../../redux/slice/LikeSlice";
import { Product } from "../../types/auth";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const Hitimage = "https://i.makeupstore.uz/b/by/bywdy1vee96i.jpg";
const Hitimage2 = "https://i.makeupstore.uz/y/yx/yx99rzbzku5p.jpg";
const Hitimage3 = "https://i.makeupstore.uz/g/gk/gk4vpipsuigz.jpg";
const Hitimage4 = "https://i.makeupstore.uz/3/34/34bwtgnipfvu.jpg";
const Hitimage5 = "https://i.makeupstore.uz/2/2h/2hfeqagezpgm.jpg";
const Hitimage6 = "https://i.makeupstore.uz/c/cu/cu88rgrmanbm.jpg";

const Hit = () => {
  const { data } = useGetProductsQuery(undefined);
  const currency = useSelector((state: RootState) => state.currency.selected);
  const likedProducts = useSelector((state: RootState) => state.like.likedProducts);
  
  const dispatch = useDispatch();

  const handleLikeProduct = (product: Product) => {
    if (likedProducts.some((id) => id === product.id)) {
      dispatch(unlikeProduct(product.id));
    } else {
      dispatch(likeProduct(product.id));
    }
  };

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  const Price = (price: string) => {
    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice)) return "";

    if (currency === "UZS") {
      return (numericPrice * 12400).toLocaleString() + " UZS";
    }
    return "$" + numericPrice.toFixed(2);
  };

  return (
    <div className="hit">
      <div className="container">
        <h2 className="hit__title">Brand Offers</h2>
        <div className="hit__wrapper">
          {data?.map((item) => (
            <div key={item.id} className="hit__card">
              <div className="hit__badge">DEAL</div>
              <div onClick={() => handleLikeProduct(item)} className="hit__like-icon">
                {likedProducts.some((product) => product === item.id) ? <FcLike /> : <AiOutlineHeart />}
              </div>
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
                  <span>162</span>
                </p>
                <button onClick={() => handleAddToCart(item)} className="hit__buy-btn">Buy</button>
              </div>
            </div>
          )).slice(60, 68)}
        </div>
        <div className="hit__wrapper2">
          {data?.map((item) => (
            <div key={item.id} className="hit__card1">
              <Link to={`/details/${item.id}`}>
                <img className="hit__img1" src={item.image_link} alt={item.name} />
              </Link>
              <div className="hit__content">
                <h3 className="hit__name">"{item.description}"</h3>
                <p className="hit__price">
                  <span>Price</span>
                  <span className="hit__price-new">{Price(item.price)}</span>
                </p>
                <p className="hit__rating">
                  <span>Leila</span>
                  <span>276</span>
                </p>
              </div>
            </div>
          )).slice(150, 152)}
        </div>
        <h2 className="hit__title mt-5">Perfumery</h2>
        <div className="hit__wrapper">
          {data?.map((item) => (
            <div key={item.id} className="hit__card">
              <div className="hit__badge">DEAL</div>
              <div onClick={() => handleLikeProduct(item)} className="hit__like-icon">
                {likedProducts.some((product) => product === item.id) ? <FcLike /> : <AiOutlineHeart />}
              </div>
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
                  <span>82</span>
                </p>
                <button onClick={() => handleAddToCart(item)} className="hit__buy-btn">Buy</button>
              </div>
            </div>
          )).slice(110, 118)}
        </div>

        <div className="hit__banner">
          <img className="hitsimgs" src={Hitimage} alt="" />
          <img className="hitsimgs" src={Hitimage2} alt="" />
        </div>

        <h2 className="hit__title mt-5">Popular brands</h2>
        <div className="hit__wrapper">
          {data?.map((item) => (
            <div key={item.id} className="hit__card">
              <div className="hit__badge">DEAL</div>
              <div onClick={() => handleLikeProduct(item)} className="hit__like-icon">
                {likedProducts.some((product) => product === item.id) ? <FcLike /> : <AiOutlineHeart />}
              </div>
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
                  <span>668</span>
                </p>
                <button onClick={() => handleAddToCart(item)} className="hit__buy-btn">Buy</button>
              </div>
            </div>
          )).slice(150, 158)}
        </div>
        <div className="hit__wrapper2">
          {data?.map((item) => (
            <div key={item.id} className="hit__card1">
              <Link to={`/details/${item.id}`}>
                <img className="hit__img1" src={item.image_link} alt={item.name} />
              </Link>
              <div className="hit__content">
                <h3 className="hit__name">"{item.description}"</h3>
                <p className="hit__price">
                  <span>Price</span>
                  <span className="hit__price-new">{Price(item.price)}</span>
                </p>
                <p className="hit__rating">
                  <span>Leila</span>
                  <span>126</span>
                </p>
              </div>
            </div>
          )).slice(50, 52)}
        </div>
        <h2 className="hit__title mt-5">Perfumery</h2>
        <div className="hit__wrapper">
          {data?.map((item) => (
            <div key={item.id} className="hit__card">
              <div className="hit__badge">DEAL</div>
              <div onClick={() => handleLikeProduct(item)} className="hit__like-icon">
                {likedProducts.some((product) => product === item.id) ? <FcLike /> : <AiOutlineHeart />}
              </div>
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
                  <span>40</span>
                </p>
                <button onClick={() => handleAddToCart(item)} className="hit__buy-btn">Buy</button>
              </div>
            </div>
          )).slice(530, 538)}
        </div>

        <div className="hit__banner">
          <img className="hitsimgs" src={Hitimage3} alt="" />
          <img className="hitsimgs" src={Hitimage4} alt="" />
        </div>

        <h2 className="hit__title mt-5">Face</h2>
        <div className="hit__wrapper">
          {data?.map((item) => (
            <div key={item.id} className="hit__card">
              <div className="hit__badge">DEAL</div>
              <div onClick={() => handleLikeProduct(item)} className="hit__like-icon">
                {likedProducts.some((product) => product === item.id) ? <FcLike /> : <AiOutlineHeart />}
              </div>
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
                </p>
                <button onClick={() => handleAddToCart(item)} className="hit__buy-btn">Buy</button>
              </div>
            </div>
          )).slice(800, 808)}
        </div>
        <div className="hit__wrapper2">
          {data?.map((item) => (
            <div key={item.id} className="hit__card1">
              <Link to={`/details/${item.id}`}>
                <img className="hit__img1" src={item.image_link} alt={item.name} />
              </Link>
              <div className="hit__content">
                <h3 className="hit__name">"{item.description}"</h3>
                <p className="hit__price">
                  <span>Price</span>
                  <span className="hit__price-new">{Price(item.price)}</span>
                </p>
                <p className="hit__rating">
                  <span>Leila</span>
                  <span>116</span>
                </p>
              </div>
            </div>
          )).slice(70, 72)}
        </div>
        <h2 className="hit__title mt-5">Perfumery</h2>
        <div className="hit__wrapper">
          {data?.map((item) => (
            <div key={item.id} className="hit__card">
              <div className="hit__badge">DEAL</div>
              <div onClick={() => handleLikeProduct(item)} className="hit__like-icon">
                {likedProducts.some((product) => product === item.id) ? <FcLike /> : <AiOutlineHeart />}
              </div>
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
                  <span>225</span>
                </p>
                <button onClick={() => handleAddToCart(item)} className="hit__buy-btn">Buy</button>
              </div>
            </div>
          )).slice(190, 198)}
        </div>

        <div className="hit__banner">
          <img className="hitsimgs" src={Hitimage5} alt="" />
          <img className="hitsimgs" src={Hitimage6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hit;