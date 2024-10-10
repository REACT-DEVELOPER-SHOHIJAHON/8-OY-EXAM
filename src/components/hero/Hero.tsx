import "./hero.css"
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="hero__text">
                    <Link className="hero__link " to={"/blush"}><h2 className="hero__h2">Perfumery</h2></Link>
                    <Link className="hero__link " to={"/bronzer"}><h2 className="hero__h2">Makeup</h2></Link>
                    <Link className="hero__link " to={"/eyeliner"}><h2 className="hero__h2">Hair</h2></Link>
                    <Link className="hero__link " to={"/eyeshadow"}><h2 className="hero__h2">Face</h2></Link>
                    <Link className="hero__link " to={"/foundation"}><h2 className="hero__h2">Body and bath </h2></Link>
                    <Link className="hero__link " to={"/lipliner"}><h2 className="hero__h2">Accessories</h2></Link>
                    <Link className="hero__link " to={"/mascara"}><h2 className="hero__h2">Health & Tsar</h2></Link>
                </div>
                <div className="hero__wrapper">
                    <div className="hero__carousel ">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="https://i.makeupstore.uz/p/pu/puzpyu0w6w77.jpg" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://i.makeupstore.uz/d/dd/ddgyunmaqery.jpg" alt="Second slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;