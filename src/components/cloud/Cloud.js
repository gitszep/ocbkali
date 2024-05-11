import React from 'react';
import BoraBora from '../../assets/borabora.jpg';
import Maldives from '../../assets/maldives.jpg';
import KeyWest from '../../assets/keywest.jpg';
import Hero3 from '../../components/hero/Hero3';
import Photo from '../../components/photo/Photo';
import Footer from '../../componenty/footer/Footer';
import ImageSlider from '../../componenty/ImageSlider';

const Cloud = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Hero3 />
      <div className="flex flex-col items-center justify-center h-full">
      
        <div className="flex flex-col items-center justify-center h-full">
            <div className='max-w-[1240px] mx-auto  px-4 text-center'>
                <h1>Lider w Ochronie Infrastruktury Rozrywkowej</h1>
                <div className="border border-gray-500 h-0 w-50%"></div>
               
                <div className='max-w-[1240px] mx-auto py-4 px-4 text-center'>
                   {/* <p>Dlaczego warto wybrać OCBSiR?</p>  */}
                   {/* <div className="border border-gray-500 h-0 w-50%"></div>  */}
                </div>
            </div> 
        </div>    
         
       

    
        
     
    </div>



      <div className="max-w-[1240px] px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-center">Szkolenia</h1>
          <p className='py-4'>Ogólnopolskie Centrum Bezpieczeństwa Sportu i Rekreacji przeprowadza regularnie szkolenia skierowane do producentów jak i właścicieli obiektów sportowych i rekreacyjnych. Nasz system szkoleniowy pozwala wykształcić ludzi, którzy poza wiedzą teoretyczną będą ją również potrafili wykorzystać w praktyce. Każde ze szkoleń organizowane jest przez OCBSiR kończy się zaświadczeniem i certyfikatem.</p>
        </div>


        <div className='max-w-[1240px] mx-auto py-4 px-4 text-center'>
                    <p>Raz na 2 miesiące przeprowadzamy szkolenia dla administratorów oraz personelu placów zabaw i sal zabaw.</p>  
                    <div className="border border-gray-500 h-0 w-50%"></div>  
                </div>


        
      </div>
      <ImageSlider/>
      <Footer/>
    </div>
  );
};

export default Cloud;
