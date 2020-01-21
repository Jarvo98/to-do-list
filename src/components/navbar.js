import React from 'react'
import { Link } from 'react-router-dom';
import imgSrc from '../assets/ensolvers.jpg';
import '../styles/logo.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-expand-sm bg-dark'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link to='/'>
                            <img src={imgSrc} alt='home' className='logo'/>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    };
};

export default Navbar;