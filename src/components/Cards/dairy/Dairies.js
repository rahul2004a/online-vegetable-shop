import React from 'react';
import '../../items/style.css';
import Card from '../../Cards/Card/Card';
import p1 from '../../../images/dairy/e1.jpg';
import p2 from '../../../images/dairy/e2.jpg';
import p3 from '../../../images/dairy/e3.jpg';
import p4 from '../../../images/dairy/e4.jpg';
import p5 from '../../../images/dairy/e5.jpg';
import p6 from '../../../images/dairy/e6.jpg';
import p7 from '../../../images/dairy/e7.jpg';
import p8 from '../../../images/dairy/e8.jpg';
import p9 from '../../../images/dairy/e9.jpg';
import p10 from '../../../images/dairy/e10.jpg';
import p11 from '../../../images/dairy/e11.jpg';
import p12 from '../../../images/dairy/e12.jpg';
import p13 from '../../../images/dairy/e13.jpg';
import p14 from '../../../images/dairy/e14.jpg';
import p15 from '../../../images/dairy/e15.jpg';

const Dairies = () => {
  return (
    <div className='card-container'>
    <div><h2>Dairies</h2></div>
    <div className="card-item" style={{padding:"2rem"}}>
    <Card name="Milk" price="15.6" source={p1}/>
        <Card name="Butter" price="13.6" source={p2}/>
        <Card name="Curd" price="11.6" source={p3}/>
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

export default Dairies