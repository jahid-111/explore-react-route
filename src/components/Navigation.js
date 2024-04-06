import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css"

const Navigation = () => {
    return (
        <div className='header'>
            <NavLink className={({isActive}) => isActive ? 'linkActive': undefined} to="/home">Home</NavLink>
            <NavLink className={({isActive}) => isActive ? 'linkActive' : undefined} to="/about">About</NavLink>
            <NavLink className={({isActive}) => isActive ? 'linkActive' : undefined} to="/contact" >Contact</NavLink>
            <NavLink className={({isActive}) => isActive ? 'linkActive' : undefined} to="/product">Product</NavLink>
            <NavLink className={({isActive}) => isActive ? 'linkActive' : undefined} to="/friends">Friends</NavLink>
        </div>
    );
};  

export default Navigation;