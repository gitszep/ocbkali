import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import './NavbarStyles.css';
import logo from  '../../assets/2.svg'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);
    const location = useLocation();

    return (
        <div name='top' className='navbar'>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="Logo" className='icon' /> {/* Wstaw logo */}
                   {/*  <h1 className="text-2xl">OCBSiR</h1> */}
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li className={location.pathname === '/' ? 'active' : ''}><Link to='/'>HOME</Link></li>
                    <li className={location.pathname === '/recovery' ? 'active' : ''}><Link to='/recovery'>O NAS</Link></li>
                    <li className={location.pathname === '/cloud' ? 'active' : ''}><Link to='/cloud'>SZKOLENIA</Link></li>
                    <li className={location.pathname === '/kontakt' ? 'active' : ''}><Link to='/kontakt'>USŁUGI</Link></li>
                    <li className={location.pathname === '/hontakt' ? 'active' : ''}><Link to='/hontakt'>O NORMACH</Link></li>
                    <li className={location.pathname === '/contact' ? 'active' : ''}><Link to='/contact'>KONTAKT</Link></li>
                </ul>

                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
