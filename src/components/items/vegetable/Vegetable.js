import React from 'react';
import '../style.css';
import Card from '../../Cards/Card/Card';

import p1 from '../../../images/fruits/p1.jpg';
import p2 from '../../../images/fruits/p2.jpg';
import p3 from '../../../images/fruits/p3.jpg';
import p4 from '../../../images/fruits/p4.jpg';
import p5 from '../../../images/fruits/p5.jpg';
import p6 from '../../../images/fruits/p6.jpg';
import p7 from '../../../images/fruits/p7.jpg';
import p8 from '../../../images/fruits/p8.jpg';
import p9 from '../../../images/fruits/p9.jpg';
import p10 from '../../../images/fruits/p10.jpg';
import p11 from '../../../images/fruits/p11.jpg';
import p12 from '../../../images/fruits/p12.jpg';
import p13 from '../../../images/fruits/p13.jpg';
import p14 from '../../../images/fruits/p14.jpg';
import p15 from '../../../images/fruits/p15.jpg';

const Vegetable = () => {
  return (
    <div className='card-container'>
    <div><h2>POPULAR VEGGIES</h2></div>
    <div className="card-item" style={{padding:"2rem"}}>
    <Card name="Lady Finger" price="15.6" source={p1}/>
        <Card name="Lady Finger" price="13.6" source={p2}/>
        <Card name="Lady Finger" price="11.6" source={p3}/>
        <Card name="Lady Finger" price="17.6" source={p4}/>
        <Card name="Lady Finger" price="20.6" source={p5}/>
        <Card name="Lady Finger" price="13.6" source={p6}/>
        <Card name="Lady Finger" price="70.6" source={p7}/>
        <Card name="Lady Finger" price="80.6" source={p8}/>
        <Card name="Lady Finger" price="38.6" source={p9}/>
        <Card name="Lady Finger" price="77.6" source={p10}/>
        <Card name="Lady Finger" price="44.6" source={p11}/>
        <Card name="Lady Finger" price="89.6" source={p12}/>
        <Card name="Lady Finger" price="10.6" source={p13}/>
        <Card name="Lady Finger" price="20.6" source={p14}/>
        <Card name="Lady Finger" price="78.6" source={p15}/>
    </div>
    </div>
  )
}

export default Vegetable