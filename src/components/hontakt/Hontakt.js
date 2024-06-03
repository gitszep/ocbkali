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
import doc from '../../assets/dokumentacja.jpg';

const Hontakt = () => {
    return (

      <div className="flex flex-col items-center justify-center h-full">
      <Hero3 />
      
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
        <img className="w-1/3 border-25 border border-black border-solid rounded-lg" src={doc} alt="description" />      <div className="max-w-[1240px] px-4">
  <div className="mb-8">
    <h1 className="text-3xl mt-4 font-bold mb-2 text-center">Lista norm niezbędnych w naszej pracy</h1>
    <p className='py-4'>Ogólnopolskie Centrum Bezpieczeństwa Sportu i Rekreacji regularnie przeprowadza szkolenia skierowane do producentów oraz właścicieli obiektów sportowych i rekreacyjnych. Nasz system szkoleniowy pozwala na wykształcenie ludzi, którzy oprócz wiedzy teoretycznej potrafią ją również wykorzystać w praktyce. Każde szkolenie organizowane przez OCBSiR kończy się zaświadczeniem i certyfikatem.</p>
  </div>
</div>

<div className="max-w-[1240px] px-4">
  <div className="mb-8">
    <h1 className="text-3xl font-bold mb-2 text-center">Place Zabaw:</h1>
    <p className='py-4'></p>
  </div>
</div>

<div className="max-w-[1240px] px-4">
  <div className="mb-8">
    <h1 className="text-3xl font-bold mb-2 text-center">PN-EN 1176-1:2009</h1>
    <p className='py-4'>Wyposażenie placów zabaw i nawierzchnie. Część 1: Ogólne wymagania bezpieczeństwa i metody badań. Norma dotyczy bezpieczeństwa placów zabaw oraz nawierzchni i wyposażenia placów zabaw. Przepisy precyzują wymagania bezpieczeństwa dla placów zabaw przeznaczonych do indywidualnego i wspólnego użytkowania przez dzieci. Norma nie obejmuje przygodowych placów zabaw.</p>
  </div>
</div>

<div className="max-w-[1240px] px-4">
  <div className="mb-8">
    <h1 className="text-3xl font-bold mb-2 text-center">PN-EN 1176-2:2009</h1>
    <p className='py-4'>Wyposażenie placów zabaw i nawierzchnie. Część 2: Dodatkowe wymagania bezpieczeństwa i metody badań huśtawek. Norma dotyczy bezpieczeństwa huśtawek przeznaczonych dla dzieci na placach zabaw. Zawiera zarówno informacje dotyczące konstrukcji urządzeń, jak i siedzisk huśtawek.</p>
  </div>
</div>

<div className="max-w-[1240px] px-4">
  <div className="mb-8">
    <h1 className="text-3xl font-bold mb-2 text-center">PN-EN 1176-3:2009</h1>
    <p className='py-4'>Wyposażenie placów zabaw i nawierzchnie. Część 3: Dodatkowe wymagania bezpieczeństwa i metody badań zjeżdżalni. Norma dotyczy zjeżdżalni na stałe zamontowanych na placach zabaw. Nie obejmuje zjeżdżalni wodnych, torów rolkowych i instalacji zjazdowych z dodatkowymi wyposażeniami (maty ślizgowe, saneczki).</p>
  </div>
</div>

<div className="max-w-[1240px] px-4">
  <div className="mb-8">
    <h1 className="text-3xl font-bold mb-2 text-center">PN-EN 1176-4:2009</h1>
    <p className='py-4'>Wyposażenie placów zabaw i nawierzchnie. Część 4: Dodatkowe wymagania bezpieczeństwa i metody badań kolejek liniowych. Norma opisuje wymagania bezpieczeństwa dla kolejek linowych na stałe zamontowanych na placach zabaw. Przepisy opisują kolejki, gdzie do zjazdu dzieci wykorzystują prawo grawitacji.</p>
  </div>
</div>

<div className="max-w-[1240px] px-4">
  <div className="mb-8">
    <h1 className="text-3xl font-bold mb-2 text-center">PN-EN 1176-5:2009</h1>
    <p className='py-4'>Wyposażenie placów zabaw i nawierzchnie. Część 5: Dodatkowe wymagania bezpieczeństwa i metody badań karuzeli. Norma opisuje wymagania bezpieczeństwa dla karuzeli o maksymalnej średnicy 0,5 metra na stałe zamontowanych na placach zabaw dla dzieci. Przepisy nie obejmują karuzeli napędzanych mechanicznie, karuzeli wędrownych ani bębnów obrotowych.</p>
  </div>
</div>

<div className="max-w-[1240px] px-4">
  <div className="mb-8">
    <h1 className="text-3xl font-bold mb-2 text-center">PN-EN 1176-6:2009</h1>
    <p className='py-4'>Wyposażenie placów zabaw i nawierzchnie. Część 6: Dodatkowe wymagania bezpieczeństwa i metody badań urządzeń kołyszących. Norma dotyczy bezpieczeństwa i ochrony dzieci przed zagrożeniami podczas użytkowania huśtawek wagowych i urządzeń kołyszących na stałe zamontowanych na placach zabaw dla dzieci.</p>
  </div>
</div>

<div className="max-w-[1240px] px-4">
  <div className="mb-8">
    <h1 className="text-3xl font-bold mb-2 text-center">PN-EN 1176-7:2009</h1>
    <p className='py-4'>Wyposażenie placów zabaw i nawierzchnie. Część 7: Wytyczne dotyczące instalacji, sprawdzania, konserwacji i eksploatacji. Norma dotyczy wyposażenia placów zabaw, w tym także nawierzchni. Obejmuje instalowanie, kontrolowanie, konserwację oraz eksploatację wyposażenia.</p>
  </div>
</div>

<div className="max-w-[1240px] px-4">
  <div className="mb-8">
    <h1 className="text-3xl font-bold mb-2 text-center">PN-EN 1176-10:2009</h1>
    <p className='py-4'>Wyposażenie placów zabaw i nawierzchnie. Część 10: Dodatkowe wymagania bezpieczeństwa i metody badań całkowicie obudowanych urządzeń do zabaw. Norma opisuje place zabaw przeznaczone dla dzieci do lat 14, które są instalowane zarówno wewnątrz, jak i na zewnątrz budynków. Obejmuje bezpieczeństwo dróg ewakuacyjnych, specjalne urządzenia i elementy na placu zabaw, nawierzchnie, kontrole i procedury monitoringu obiektu.</p>
  </div>
</div>

<div className="max-w-[1240px] px-4">
  <div className="mb-8">
    <h1 className="text-3xl font-bold mb-2 text-center">PN-EN 1176-11:2009</h1>
    <p className='py-4'>Wyposażenie placów zabaw i nawierzchnie. Część 11: Dodatkowe wymagania bezpieczeństwa i metody badań sieci przestrzennej. Norma opisuje bezpieczeństwo konstrukcji sieciowych na stałe zamontowanych na placach zabaw dla dzieci. Nie obejmuje sztucznych ścian wspinaczkowych (np. szkolnych).</p>
  </div>
</div>

<div className="max-w-[1240px] px-4">
  <div className="mb-8">
    <h1 className="text-3xl font-bold mb-2 text-center">Nawierzchnia bezpieczna - amortyzująca upadki stosowana na placach zabaw:</h1>
    <p className='py-4'></p>
  </div>
</div>

<div className="max-w-[1240px] px-4">
  <div className="mb-8">
    <h1 className="text-3xl font-bold mb-2 text-center">PN-EN 1177:2009:</h1>
    <p className='py-4'>Nawierzchnie placów zabaw amortyzujące upadki. Wyznaczanie krytycznej wysokości upadku. Norma dotyczy nawierzchni placów zabaw dla dzieci oraz specjalnych przepisów na placach zabaw, gdzie wymagana jest amortyzacja uderzeń po wypadku. Zawiera opisy czynników wpływających na wybór nawierzchni oraz metody badania służące do tłumienia uderzenia o podłoże w przypadku wypadku.</p>
  </div>
</div>

<div className="max-w-[1240px] px-4">
  <div className="mb-8">
    <h1 className="text-3xl font-bold mb-2 text-center">Siłownia zewnętrzna:</h1>
    <p className='py-4'></p>
  </div>
</div>

<div className="max-w-[1240px] px-4">
  <div className="mb-8">
    <h1 className="text-3xl font-bold mb-2 text-center">PN-EN 957-1:2005</h1>
    <p className='py-4'>Stacjonarny sprzęt treningowy. Część 1: Ogólne wymagania bezpieczeństwa i metody badań. Norma opisuje ogólne standardy bezpieczeństwa sprzętu treningowego. Przepisy dotyczą stacjonarnego sprzętu do ćwiczeń zainstalowanego na placach zabaw. Norma PN-EN 957-1:2005 określa wymagania dotyczące siłowni zainstalowanych na placach zabaw. Siłownie zewnętrzne powinny być oddzielone od placów zabaw oraz przeznaczone dla dzieci powyżej 14. roku życia. Siłownie zewnętrzne według tej normy są urządzeniami rekreacyjnymi, a nie profesjonalnymi.</p>
  </div>
</div>

<div className="max-w-[1240px] px-4">
  <div className="mb-8">
    <h1 className="text-3xl font-bold mb-2 text-center">Dmuchańce (zjeżdżalnie dmuchane, zamki do skakania, poduszki):</h1>
    <p className='py-4'></p>
  </div>
</div>

<div className="max-w-[1240px] px-4">
  <div className="mb-8">
    <h1 className="text-3xl font-bold mb-2 text-center">PN-EN 14960</h1>
    <p className='py-4'>Nadmuchiwane urządzenia do zabawy. Wymagania bezpieczeństwa i metody badań. Norma określa wymogi bezpieczeństwa dla nadmuchiwanych urządzeń przeznaczonych do zabawy indywidualnej i grupowej dla dzieci. Opisuje sposoby rozpoznawania zagrożeń, zmniejszania liczby wypadków oraz informacje, które powinny być dołączone do urządzenia. Przepisy te nie dotyczą urządzeń nadmuchiwanych unoszących się na wodzie i w powietrzu, dmuchanych zabawek domowych ani urządzeń nadmuchiwanych w celu ochrony.</p>
  </div>
</div>

<div className="max-w-[1240px] px-4">
  <div className="mb-8">
    <h1 className="text-3xl font-bold mb-2 text-center">Skateparki:</h1>
    <p className='py-4'></p>
  </div>
</div>

<div className="max-w-[1240px] px-4">
  <div className="mb-8">
    <h1 className="text-3xl font-bold mb-2 text-center">PN-EN 14974</h1>
    <p className='py-4'>Urządzenia dla użytkowników sprzętu rolkowego. Wymagania bezpieczeństwa i metody badań. Norma opisuje sposób użytkowania sprzętu rolkowego. Przepisy dotyczą zarówno bezpieczeństwa, jak i metody jego badań.</p>
  </div>
</div>

<div className="max-w-[1240px] px-4">
  <div className="mb-8">
    <h1 className="text-3xl font-bold mb-2 text-center">Urządzenia lunaparkowe (karuzele):</h1>
    <p className='py-4'></p>
  </div>
</div>

<div className="max-w-[1240px] px-4">
  <div className="mb-8">
    <h1 className="text-3xl font-bold mb-2 text-center">PN-EN 13814:2021</h1>
    <p className='py-4'>Urządzenia i konstrukcje wesołych miasteczek i parków rozrywki - bezpieczeństwo. Norma określa minimalne wymagania niezbędne do zapewnienia bezpiecznej konstrukcji, produkcji, instalacji oraz utrzymania w dobrym stanie, działania i kontroli: urządzeń ruchomych, konstrukcji instalowanych na określony czas lub na stałe na placach zabaw. Obejmuje między innymi karuzele, huśtawki, łódki, koła diabelskie, kolejki górskie, pochylnie, trybuny, kabiny, estrady i miejsca występów artystycznych na świeżym powietrzu. Przepisy nie dotyczą stałych trybun, rusztowań scen, prostych urządzeń rozrywkowych uruchamianych przez dzieci i obsługujących maksymalnie dwójkę dzieci.</p>
  </div>
</div>




   



        
      <ImageSlider/>
    </div>
    );
}

export default Hontakt;
