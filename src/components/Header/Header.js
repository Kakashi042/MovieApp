import React from 'react';
import user from '../../images/user.png'
import './Header.scss'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>
            <div className='logo'>
            MovieKart
            </div>
            </Link>
            <div className='user'>
            <img src={user} alt='user-icon'/>
            </div> 
        </div>
    );
};

export default Header;