import React from 'react';
import { Route,Routes } from 'react-router-dom';


import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
// import Card from './components/Cards/Card/Card';
import Home from './components/Home/Home';
// import Login from './components/login/Login';
import Aboutus from './components/about/Aboutus';
import Veggie from './components/Cards/vegetable/Veggie';
import Fruity from './components/Cards/fruits/Fruity';
import Dairies from './components/Cards/dairy/Dairies';
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<Aboutus/>}/>
      <Route path='/vegetables-product' element={<Veggie/>}/>
      <Route path="/dairy-product" element={<Dairies/>}/>
      <Route path="/fruits-product" element={<Fruity/>}/>
    </Routes>
    <Footer/>
    </> 
  )
}

export default App;