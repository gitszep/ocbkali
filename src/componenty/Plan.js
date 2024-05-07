import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import yourImage from './../assets/pexels-quang-nguyen-vinh-222549-2143761.jpg';
import yourImage1 from '../assets/power-lai-E0BmfKjeQrw-unsplash.jpg'
import yourImage2 from '../assets/pexels-bruna-saito-895761-1805843.jpg'
import yourImage3 from '../assets/pexels-joao-pedro-lisboa-575433996-17040658.jpg'
import yourImage4 from '../assets/feliphe-schiarolli-dAt6MVfS1_w-unsplash.jpg'
import yourImage5 from '../assets/arthur-lugovoy-FtMDTvgefpY-unsplash.jpg'
import yourImage6 from '../assets/pexels-goumbik-296308.jpg'
import yourImage7 from '../assets/aedrian-EZcffLueI28-unsplash.jpg'

const Plan = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on location change
  }, [location]);

  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className='row-span-2 object-cover w-full h-full p-2' src={yourImage6} alt='/' />
        <img className='row-span-3 object-cover w-full h-full p-2' src={yourImage2} alt='Your Image Alt Text' />
        <img className='row-span-2 object-cover w-full h-full p-2' src={yourImage1} alt='/' />
        {/* DZIEWCZYNKA TO 2 */}
        {/* festyn to 4 */}
        {/* 5 to dziecko */}
        <img className='row-span-3 object-cover w-full h-full p-2' src={yourImage} alt='Your Image Alt Text' />
        <img className='row-span-3 object-cover w-full h-full p-2' src={yourImage4} alt='Your Image Alt Text' />
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Jak działamy?</h3>
        <p className='text-2xl py-6'>
          Dążymy do zapewnienia bezpieczeństwa w różnorodnych formach rekreacji i aktywności fizycznej w Polsce poprzez kompleksowy serwis. Oferujemy wysoki standard bezpieczeństwa dla placów zabaw, sale zabaw, dmuchańców, urządzeń siłowych, obiektów sportowych, skate parków, nawierzchni sportowych oraz parków rozrywki.
          <br/> Naszym celem jest zapewnienie użytkownikom pełnego bezpieczeństwa podczas aktywności fizycznej.
        </p>
        <div className="pb-6">
          <button className='bg-black text-white border-black hover:shadow-xl mr-4'>
            <Link to='/contact'>Kontakt do nas</Link>
          </button>
          <button className='border-black hover:shadow-xl'>
            <Link to='/recovery'>Dowiedz się więcej</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
