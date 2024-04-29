import React from 'react';
import { Link } from 'react-router-dom';

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
      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img className='object-cover w-full h-full' src='https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80' alt='/' />
        <img className='row-span-2 object-cover w-full h-full' src='https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80' alt='/' />
        <img className='object-cover w-full h-full' src='https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80' alt='/' />
      </div>
    </div>
  );
};

export default Rooms;
