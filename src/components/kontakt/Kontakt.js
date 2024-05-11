import React from 'react';
import './ContactStyles.css';
import Navbar from '../../components/navbar/Navbar';
import Hero from '../hero/Hero3';
import BoraBora from '../../assets/borabora.jpg';
import Footer from '../../componenty/footer/Footer';
import Maldives from '../../assets/maldives.jpg';
import KeyWest from '../../assets/keywest.jpg';
import Hero3 from '../../components/hero/Hero3';
import Photo from '../../components/photo/Photo';
import ImageSlider from '../../componenty/ImageSlider';



const Kontakt = () => {
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
          <h1 className="text-3xl font-bold mb-2 text-center">NASZA OFERTA</h1>
          <p className='py-4'>W trosce o bezpieczeństwo oraz kompleksowość naszych usług istnieje także myśliwość zlecenia poza kontrolą, utrzymanie Państwa obiektów pod względem formalnym jak i też konserwatorskim. Dzięki naszemu systemowi szkoleniowemu dysponujemy na terenie całego kraju odpowiednią kadrą pozwalającą podjęcia się długoterminowych zleceń.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          <div className="flex flex-col items-center">
            <img className="w-full h-auto max-h-[300px] object-cover m-2" src={BoraBora} alt="Bora Bora" />
            <h1 className="text-xl font-bold mb-2">Serwis</h1>
            <p className="text-center">Przeprowadzenia napraw i ewentualnych konserwacji plac zabaw.</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-full h-auto max-h-[300px] object-cover m-2" src={BoraBora} alt="Maldives" />
            <h1 className="text-xl font-bold mb-2">Dokumentacje techniczne</h1>
            <p className="text-center">Weryfikacja stanu technicznego i bezpieczeństwa danego obiektu sportowego czy rekreacyjnego. </p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-full h-auto max-h-[300px] object-cover m-2" src={BoraBora} alt="Bora Bora" />
            <h1 className="text-xl font-bold mb-2">Szkolenia</h1>
            <p className="text-center">Nauka teoretyczna i praktyczna o normach bezpieczeństwa i zasadach BHP w sektorze sportowo-rekreacyjnym.</p>
          </div>
        </div>
      </div>
      <ImageSlider/>
    </div>
    );
}

export default Kontakt;
