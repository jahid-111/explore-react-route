import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"

const Navigation = () => {
    return (
        <div className='header'>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact" >Contact</Link>
            <Link to="/product">Product</Link>
            <Link to="/friends">Friends</Link>
        </div>
    );
};

export default Navigation;