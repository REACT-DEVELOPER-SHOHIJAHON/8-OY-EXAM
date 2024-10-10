import { Route, Routes } from "react-router-dom"
import Home from "./routes/home/Home"
import Nav from "./components/nav/Nav"
import Blush from "./routes/blush/Blush"
import Bronzer from "./routes/bronzer/Bronzer"
import EyeLiner from "./routes/eyebrow/EyeLiner"
import Eyeshadow from "./routes/eyeshadow/Eyeshadow"
import Foundation from "./routes/foudation/Foundation"
import Lipliner from "./routes/lipliner/Lipliner"
import Mascra from "./routes/mascara/Mascra"
import Like from "./routes/like/Like"
import Details from "./routes/details/Details"
import "./index.css"
import Cart from "./routes/cart/Cart"
import Footer from "./components/footer/Footer"


function App() {

  return (
    <>
      <Nav/>
   <div className="App">
           <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blush" element={<Blush/>} />
        <Route path="/bronzer" element={<Bronzer/>} />
        <Route path="/eyeliner" element={<EyeLiner/>} />
        <Route path="/eyeshadow" element={<Eyeshadow />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/lipliner" element={<Lipliner />} />
        <Route path="/mascara" element={<Mascra />} />
        <Route path="/like" element={<Like/>} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
   </div>
   <Footer/>

    </>
  )
}

export default App
