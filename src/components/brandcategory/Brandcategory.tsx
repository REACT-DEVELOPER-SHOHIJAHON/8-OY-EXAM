import "./brand.css"
import { Link } from "react-router-dom"

const Brandcategory = () => {
  return (
    <div className="brand">
        <div className="container">
            <div className="brand__wrapper">
                <div className="brand__imgs">
                    <Link to="/blush"><img className="brand__img" src="	https://i.makeupstore.uz/0/0j/0jena1n0unjz.jpg" alt="Blush" /></Link>
                </div>
                <div className="brand__imgs">
                    <Link to="/bronzer"><img className="brand__img" src="	https://i.makeupstore.uz/8/8y/8yvl33h05sxe.jpg" alt="Bronzer" /></Link>
                </div>
                <div className="brand__imgs">
                    <Link to="/eyeliner"><img className="brand__img" src="	https://i.makeupstore.uz/o/o7/o7n0harktg9z.jpg" alt="Eyeliner" /></Link>
                </div>
                <div className="brand__imgs">
                    <Link to="/eyeshadow"><img className="brand__img" src="	https://i.makeupstore.uz/z/zd/zd0vum3fkcyf.jpg" alt="Eyeshadow" /></Link>
                </div>
                <div className="brand__imgs">
                    <Link to="/foundation"><img className="brand__img" src="	https://i.makeupstore.uz/p/ps/pstf8at18bhj.jpg" alt="Foundation" /></Link>
                </div>
                <div className="brand__imgs">
                    <Link to="/lipliner"><img className="brand__img" src="	https://i.makeupstore.uz/i/iy/iyszesmpvzbt.jpg" alt="Lipliner" /></Link>
                </div>
                <div className="brand__imgs">
                    <Link to="/mascara"><img className="brand__img" src="	https://i.makeupstore.uz/n/n0/n0pzjqtfod8k.jpg" alt="Mascara" /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Brandcategory;