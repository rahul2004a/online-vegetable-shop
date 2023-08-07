import React from 'react';
import '../../items/style.css';
import Card from '../../Cards/Card/Card';
import v1 from '../../../images/vegetables/pf1.jpg';
import v2 from '../../../images/vegetables/pf2.jpg';
import v3 from '../../../images/vegetables/pf3.jpg';
import v4 from '../../../images/vegetables/pf4.jpg';
import v5 from '../../../images/vegetables/pf5.jpg';
import v6 from '../../../images/vegetables/pf6.jpg';
import v7 from '../../../images/vegetables/pf7.jpg';
import v8 from '../../../images/vegetables/pf8.jpg';
import v9 from '../../../images/vegetables/pf9.jpg';
import v10 from '../../../images/vegetables/pf10.jpg';
import v11 from '../../../images/vegetables/pf11.jpg';
import v12 from '../../../images/vegetables/pf12.jpg';
import v13 from '../../../images/vegetables/pf13.jpg';
import v14 from '../../../images/vegetables/pf14.jpg';
import v15 from '../../../images/vegetables/pf15.jpg';
const Fruity = () => {
  return (
    <div className='card-container'>
    <div><h2>Fruits</h2></div>
    <div className="card-item" style={{padding:"2rem"}}>
    <Card name="Strwaberry" price="15.6" source={v1}/>
        <Card name="Pear" price="13.6" source={v2}/>
        <Card name="Guava" price="11.6" source={v3}/>
        <Card name="Peach" price="17.6" source={v4}/>
        <Card name="Orange" price="20.6" source={v5}/>
        <Card name="Apple" price="13.6" source={v6}/>
        <Card name="Banana" price="70.6" source={v7}/>
        <Card name="Grapes" price="80.6" source={v8}/>
        <Card name="Pine Apple" price="38.6" source={v9}/>
        <Card name="Coconut" price="77.6" source={v10}/>
        <Card name="Lady Finger" price="44.6" source={v11}/>
        <Card name="Lady Finger" price="89.6" source={v12}/>
        <Card name="Lady Finger" price="10.6" source={v13}/>
        <Card name="Lady Finger" price="20.6" source={v14}/>
        <Card name="Watermelon" price="78.6" source={v15}/>
    </div>
    </div>
  )
}

export default Fruity