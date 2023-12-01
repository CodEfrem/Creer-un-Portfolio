import React from 'react';
import './navbar.css';
import logo from '../../../public/img ecf/logo5.png';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="Logo" className='logo' />
            <div className='desktopMenu'>
                <a href="#intro" className="desktopMenuListItem">Home</a>
                <a href="#competences" className="desktopMenuListItem">Competence</a>
                <a href="#works" className="desktopMenuListItem">Portfolio</a>
            </div>
            <a href="#contact" className="contactBtn">Contactez Moi</a>
        </nav>
    );
}

export default Navbar;
