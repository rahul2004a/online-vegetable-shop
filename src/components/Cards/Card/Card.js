import React from 'react';
import './Card.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import ig from "../../../images/fruits/p10.jpg";
const Card = ({name , price , source}) => {
  return (
    <div className="box">
      <img src={source} alt="" />
      <h3>{name}</h3>
      <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star-half-alt"></i>
      </div>
      <div className="price-btn-container">
        <span className="price">Rs {price}</span>
        <button href="#" className="btn">Add to cart</button>
      </div>
    </div>
  );
};

export default Card;
