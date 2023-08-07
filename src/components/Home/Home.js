import React from 'react';
import Navbottom from '../navBottom/Navbottom';
import Buttons from '../buttons/Buttons';
import Vegetable from '../items/vegetable/Vegetable';
import Fruits from '../items/fruits/Fruits';
import Contactus from '../contact/Contactus';
const Home = () => {
  return (
    <div>
    <Navbottom/>
    <Buttons/> 
    <Vegetable/>
    <Fruits/>
    <Contactus/>
    </div>
  )
}

export default Home