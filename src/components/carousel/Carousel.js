// import React, { useState, useEffect } from 'react';
// import './Carousel.css';
// import One from "../../images/slider/one.png";
// import Three from "../../images/slider/three.png";
// import Four from "../../images/slider/four.jpg";

// const Carousel = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveSlide((prevSlide) => (prevSlide + 1) % 3);
//     }, 3000); // Change slide every 3 seconds (adjust this value as needed)

//     return () => clearInterval(interval);
//   }, []);
// // 
//   const nextSlide = () => {
//     setActiveSlide((prevSlide) => (prevSlide + 1) % 3);
//   };

//   const prevSlide = () => {
//     setActiveSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
//   };

//   return (
//     <div id="myCarousel" className="carousel slide" data-ride="carousel">
//       {/* Indicators */}
//       <ul className="carousel-indicators">
//         <li
//           data-target="#myCarousel"
//           data-slide-to="0"
//           className={activeSlide === 0 ? "active" : ""}
//         ></li>
//         <li
//           data-target="#myCarousel"
//           data-slide-to="1"
//           className={activeSlide === 1 ? "active" : ""}
//         ></li>
//         <li
//           data-target="#myCarousel"
//           data-slide-to="2"
//           className={activeSlide === 2 ? "active" : ""}
//         ></li>
//       </ul>

//       {/* Slides */}
//       <div
//         className="carousel-inner"
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           transform: `translateX(-${activeSlide * 100}%)`, // Adjust this value to change the slide width
//           transition: "transform 0.5s ease-in-out",
//         }}
//       >
//         {/* Slide 1 */}
//         <div className="carousel-item" style={{ flex: "0 0 100%", display: "flex", alignItems: "center" }}>
//           <div className="image-container">
//             <img src={One} className="img-fluid" alt="..." style={{ maxWidth: "350px", maxHeight: "250px" }} />
//           </div>
//           <div className="text-container" style={{ marginLeft: "20px"}}>
//             <h1>Farm-to-Table Specials<br /><span>Unbeatable Prices!</span></h1>
//             <h6>Fresh Veggies, Buy One Get One Free! Limited Time Offer, Hurry! T&Cs Apply.</h6>
//             <div className="buy-now"><button>Buy Now</button></div>
//           </div>
//         </div>

//         {/* Slide 2 */}
//         <div className="carousel-item" style={{ flex: "0 0 100%", display: "flex", alignItems: "center" }}>
//           <div className="image-container">
//             <img src={Three} className="img-fluid" alt="..." style={{ maxWidth: "300px", maxHeight: "200px" }} />
//           </div>
//           <div className="text-container">
//             <h1>Fresh Harvest Sale<br /><span>Ends In 5 Days!</span></h1>
//             <h6>"Discover the freshest produce at unbeatable prices during our Fresh Harvest Sale. Stock up on farm-fresh goodness and savor the flavors of nature's bounty!"</h6>
//             <div className="buy-now"><button>Buy Now</button></div>
//           </div>
//         </div>

//         {/* Slide 3 */}
//         <div className="carousel-item" style={{ flex: "0 0 100%", display: "flex", alignItems: "center" }}>
//           <div className="image-container">
//             <img src={Four} className="img-fluid" alt="..." style={{ maxWidth: "300px", maxHeight: "200px" }} />
//           </div>
//           <div className="text-container">
//             <h1>Top Deals and Discounts<br /><span>Unbeatable Savings Await!</span></h1>
//             <h6>"Discover irresistible deals and exclusive discounts, making every purchase a delightful bargain!"</h6>
//             <div className="buy-now"><button>Buy Now</button></div>
//           </div>
//         </div>
//       </div>

//       {/* Controls */}
//       <a className="carousel-control-prev" href="#myCarousel" data-slide="prev" onClick={prevSlide}>
//         <span className="carousel-control-prev-icon"></span>
//       </a>
//       <a className="carousel-control-next" href="#myCarousel" data-slide="next" onClick={nextSlide}>
//         <span className="carousel-control-next-icon"></span>
//       </a>
//     </div>
//   );
// };

// export default Carousel;
