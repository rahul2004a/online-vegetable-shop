import React from 'react';
import './Aboutus.css';
import im from '../../images/login/aboutus.jpg'

const Aboutus = () => {
  return (
    <div id="aboutus">
      <div className="parentContainer">
        <img src={im} width="1519" height="710" alt="about us" />
        <div className="top">
          <h2> about us </h2>
        </div>
        <br />
        <div className="centered">
          <p>
            Welcome to <a href="index.html" style={{ textDecoration: 'none' }}>
              <span style={{ color: 'green' }}>Vegease</span>
            </a>! We are passionate about providing fresh,
          </p>
          <p>high-quality vegetables directly to your doorstep, making it convenient for you</p>
          <p>to access nutritious and locally sourced produce.</p>
          <br />
          <div className="center">
            <a href="#">
              <button className='aboutbtn'> Learn More... </button>
            </a>
          </div>
        </div>
      </div>

      <div align="center">
        <h1> why us?</h1>
      </div>
      <div style={{ margin: '50px' }}>
        <p>
          <b> <i>1.<u>Fresh and Locally Sourced Vegetables:</u></i> </b>{' '}
          We partner with local farmers and suppliers to ensure that our vegetables are harvested at the peak of their freshness. By supporting local agriculture, we reduce our carbon footprint and contribute to the growth of the community.
          <br />
          <b> <i>2.<u>Wide Selection:</u></i> </b>{' '}
          Our website offers a wide variety of vegetables to cater to all your culinary needs. Whether you're looking for common favorites or unique and exotic options, we've got you covered.
          <br />
          <b> <i>3.<u>Convenience:</u></i> </b>{' '}
          Say goodbye to long supermarket lines and carrying heavy grocery bags. With our vegetable delivery service, you can shop from the comfort of your home and have your vegetables delivered straight to your door at a time that suits you.
          <br />
          <b> <i>4.<u>Customizable Orders:</u></i> </b>{' '}
          We understand that everyone's needs are different. That's why we offer the option to customize your vegetable box based on your preferences. You can also choose from various subscription plans for regular deliveries.
          <br />
          <b> <i>5.<u>Quality Assurance:</u></i> </b>{' '}
          We have a rigorous quality control process to ensure that only the freshest and best-quality vegetables make it to your doorstep. Our team carefully inspects each item before packing and shipping.
          <br />
          <b> <i>6.<u>Sustainable Practices:</u></i> </b>{' '}
          We are committed to environmental sustainability and strive to minimize waste and packaging. Our deliveries are designed to be eco-friendly, reducing plastic usage wherever possible.
          <br />
          <b> <i>7.<u>Customer Support:</u></i> </b>{' '}
          Our dedicated customer support team is always ready to assist you with any questions, concerns, or feedback you may have. Your satisfaction is our top priority, and we are here to make your shopping experience seamless.
          <br />
          <b> <i>8.<u>Rewards and Loyalty Program:</u></i> </b>{' '}
          As a token of appreciation for choosing us, we offer a rewards and loyalty program that allows you to earn points with every purchase, leading to exclusive discounts and special offers.
        </p>
      </div>
      <br /><br />
      <div align="center">
        <h1> Our Mission</h1>
      </div>

      <div style={{ margin: '50px' }}>
        <p>
          Our mission is to promote healthier lifestyles and support local farmers by delivering the freshest and finest vegetables to our customers. We aim to make the process of buying vegetables easy, enjoyable, and sustainable. Moreover, Our mission is to make fresh, locally sourced vegetables accessible to everyone while promoting healthier living, supporting local farmers, and fostering sustainable practices. We are committed to providing our customers with the highest quality produce, delivered conveniently to their doorstep, empowering them to make nutritious choices for themselves and their families. Through our platform, we aim to strengthen communities by connecting consumers with local farmers and reducing our environmental impact by adopting eco-friendly packaging and delivery practices. Our ultimate goal is to inspire a positive change in the way people shop for vegetables and contribute to a healthier, more sustainable world.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
