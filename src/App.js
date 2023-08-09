import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Login from './components/login/Login';


import Navbar from './components/navbar/Navbar';
import Carousel from './components/carousel/Carousel';
import Footer from './components/footer/Footer';
// // import Card from './components/Cards/Card/Card';
import Home from './components/Home/Home';
// import Login from './components/login/Login';
import Aboutus from './components/about/Aboutus';
import Veggie from './components/Cards/vegetable/Veggie';
import Fruity from './components/Cards/fruits/Fruity';
import Dairies from './components/Cards/dairy/Dairies';
// import ShopingCart from './components/shopingcard/ShopingCard';
import Contactus from './components/contact/Contactus';
import ShopingCard from './components/shopingcart/ShopingCart';
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutUs" element={<Aboutus/>}/>
      <Route path='/vegetables-product' element={<Veggie/>}/>
      <Route path="/dairy-product" element={<Dairies/>}/>
      <Route path="/fruits-product" element={<Fruity/>}/>
      {/* <Route path="/shoping-cart" element={<ShopingCart/>}/> */}
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    <Footer/>
    </> 
  )
}

export default App;