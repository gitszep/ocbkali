import React from 'react';
import './RecoveryStyles.css';
import Footer from '../../componenty/footer/Footer';
import Support from '../../components/Support/Support'; // Importujemy komponent Support
import BoraBora from '../../assets/borabora.jpg';
import BoraBora2 from '../../assets/borabora2.jpg';
import Maldives from '../../assets/maldives.jpg';
import Maldives2 from '../../assets/maldives2.jpg';
import KeyWest from '../../assets/keywest.jpg';
import Hero3 from '../../components/hero/Hero3';
import ImageSlider from '../../componenty/ImageSlider';
import Photo from '../../components/photo/Photo';

const Recovery = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
      <Hero3 />
      
        <div className="flex flex-col items-center justify-center h-full">
            <div className='max-w-[1240px] mx-auto  px-4 text-center'>
                <h1>Lider w Ochronie Infrastruktury Rozrywkowej</h1>
                <div className="border border-gray-500 h-0 w-50%"></div>
                <p className='py-4'></p>
                <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
                 
                </div>
                <div className='max-w-[1240px] mx-auto py-4 px-4 text-center'>
                   {/* <p>Dlaczego warto wybrać OCBSiR?</p>  */}
                   {/* <div className="border border-gray-500 h-0 w-50%"></div>  */}
                </div>
            </div> 
        </div>    
         
       

      <div className="max-w-[1240px] px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-center">O nas</h1>

          <p className='py-4'>Ogólnopolskie Centrum Bezpieczeństwa Sportu i Rekreacji (OCBSiR) powstało w odpowiedzi na rosnące potrzeby branży rekreacyjnej i sportowej w Polsce. Naszą misją jest zapewnienie kompleksowej ochrony bezpieczeństwa wszystkich obiektów rekreacyjnych, od placów zabaw po parki rozrywki. Dzięki zespołowi doświadczonych ekspertów. Oferujemy szeroki wachlarz usług obejmujących: Wydawanie certyfikatów bezpieczeństwa Ogólnopolskie Centrum Bezpieczeństwa Sportu i Rekreacji Deklaracje zgodności z Polskimi Normami Kontrole i przeglądy techniczne Opracowywanie dokumentacji Techniczno-Ruchowych, Orzeczenia techniczne, Atestacje, Zarządzanie projektami, Doradztwo, Szkolenia. Nasi klienci to producenci urządzeń, właściciele atrakcji, sale zabaw, instytucje samorządowe, szkoły, przedszkola, parki rozrywki i wesołe miasteczka. OCBSiR stawia na indywidualne podejście do każdego klienta, zachęcamy do kontaktu. Jesteśmy tu po to, aby zapewnić Ci kompleksową ochronę i spokój ducha.</p>
        </div>
      </div>
      
      <div className='max-w-[1240px] mx-auto py-4 px-4 text-center'>
                    <h1 className="text-3xl font-bold mb-2 text-center" >
Dlaczego warto wybrać OCBSiR?
</h1>



                </div>



      

        <Support/>
      <ImageSlider/>
      <Footer/>
    </div>
    );
};

export default Recovery;
