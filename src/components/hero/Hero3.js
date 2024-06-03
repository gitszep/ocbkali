import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import beachVid from '../../assets/4440864-hd_1920_1080_25fps.mp4';

const Hero = () => {
  return (
    <div className='w-full h-screen relative bg-black/25 '>
      <video
        className='w-full h-full object-cover bg-black/25 '
        src={beachVid}
        autoPlay
        loop
        muted
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <h1>Ogólnopolskie Centrum<br/> Bezpieczeństwa Sportu i Rekreacji</h1>
       
       
      </div>
    </div>
  );
};

export default Hero;
