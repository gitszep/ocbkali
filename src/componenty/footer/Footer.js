import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [nav, setNav] = useState(false);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className='w-full bg-black py-16'>
            <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
                <div className='sm:flex text-center justify-between items-center'>
                    <h1 className="text-white text-5xl">OCBSiR</h1>
                    <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                        <FaFacebook className='icon ' />
                        <FaTwitter className='icon' />
                        <FaYoutube className='icon' />
                        <FaInstagram className='icon' />
                    </div>
                </div>
                <div className='flex justify-between'>
                    <ul className='lg:flex text-white font-bold'>
                        <li className='p-4'>+48 609 069 159</li>
                        <li className='p-4'>ul. Meliorantów 45H </li>
                        <li className='p-4'>Częstochowa 42-209</li>
                    </ul>
                    <ul className='text-right font-bold text-white lg:flex'>
                        <li><Link to='/' onClick={handleScrollToTop}>HOME</Link></li>
                        <li><Link to='/about' onClick={handleScrollToTop}>O NAS</Link></li>
                        <li><Link to='/szkolenia' onClick={handleScrollToTop}>SZKOLENIA</Link></li>
                        <li><Link to='/uslugi' onClick={handleScrollToTop}>USŁUGI</Link></li>
                        <li><Link to='/normy' onClick={handleScrollToTop}>O NORMACH</Link></li>
                        <li><Link to='/kontakt' onClick={handleScrollToTop}>KONTAKT</Link></li>
                    </ul>
                </div>
            </div>
            <p className="text-white mt-4 font-bold text-xs text-center">@OCBSIR all rights reserved </p>
        </div>
    );
};

export default Footer;
