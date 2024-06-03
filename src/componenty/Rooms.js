import React from 'react';
import { Link } from 'react-router-dom';
import yourImage8 from '../assets/pexels-alimuart-17467605.jpg';
import yourImage9 from '../assets/anderson-schmig-xEasQisJLx0-unsplash.jpg';
import yourImage5 from '../assets/arthur-lugovoy-FtMDTvgefpY-unsplash.jpg';

const Rooms = () => {
  const handleClick = (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
  };

  return (
    <div className='max-w-[1400px] bg-blue-100 mx-auto px-4 grid lg:grid-cols-3'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>Poznaj zasady bezpieczeństwa</h3>
        <p className='pt-4'>
          Zapoznaj się z naszym systemem szkoleniowym. Regularnie organizujemy szkolenia dla producentów i właścicieli obiektów sportowych i rekreacyjnych. Nasze szkolenia nie tylko dostarczają wiedzy teoretycznej, ale także umożliwiają praktyczne wykorzystanie zdobytej wiedzy. Naszym celem jest wykształcenie profesjonalistów, którzy nie tylko rozumieją teorię, ale także potrafią skutecznie działać w praktyce, przyczyniając się do podnoszenia standardów bezpieczeństwa w branży.
        </p>
        <div className="text-center">
          <button className='ml-24 text-center border-black mr-4 hover:shadow-xl' onClick={handleClick}>
            <Link to='/cloud'>Dowiedz się więcej</Link>
          </button>
        </div>
      </div>
      <div className='grid grid-cols-2 col-span-2 gap-2' style={{ height: 'auto' }}>
        <img className='object-cover w-full h-full' src={yourImage9} alt='/' />
        <img className='row-span-2 object-cover w-full h-full' src={yourImage8} alt='/' />
        <img className='object-cover w-full h-full' src={yourImage5} alt='/' />
      </div>
    </div>
  );
};

export default Rooms;
