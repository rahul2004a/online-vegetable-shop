import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import Cart from "../../images/slider/cart.png";
import Logo from "../../images/slider/logo.jpeg";

const Navbar = () => {
    return (
        <header className="header">
            <div className="left">
                <img src={Logo} alt="logo" />
            </div>
            <div className="mid">
                <ul className="items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link href="#deals">Deals</Link></li>
                    <li><a href="#Categories">Categories</a></li>
                    <li><Link to="/aboutUs">About Us</Link></li>
                    <li><Link to="/contactUs">Contact Us</Link></li>
                </ul>
                <div className="search-bar buy-now">
                    <input type="text" placeholder="Search" />
                    <button>Search</button>
                </div>
            </div>
            <div className="right">
                
                <div className="cart">
                    <img src={Cart} alt="cart" />
                </div>
                <div className="login buy-now">
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
