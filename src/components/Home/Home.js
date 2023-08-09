import React from 'react';
import Navbottom from '../navBottom/Navbottom';
import Buttons from '../buttons/Buttons';
import Vegetable from '../items/vegetable/Vegetable';
import Fruits from '../items/fruits/Fruits';
import Carousel from '../carousel/Carousel';
import Navbar from '../navbar/Navbar';
const Home = () => {
  return (
    <div>
    {/* <Navbar/> */}
    <Navbottom/>
    <Buttons/> 
    <Carousel/>
    <Vegetable/>
    <Fruits/>
    </div>
  )
}

export default Home