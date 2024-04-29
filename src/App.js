import React from 'react';
import Navbar from './components/navbar/Navbar.js'
import Support from './components/Support/Support.js'
import Hero from './componenty/Hero.js';
import Offers from './componenty/Offers.js';
import Plan from './componenty/Plan.js';
import Rooms from './componenty/Rooms.js';
import ImageSlider from './componenty/ImageSlider.js';
import Footer from './componenty/Footer.js';
import Hero3 from './components/hero/Hero3';
import Tekst from './componenty/Tekst.js'

function App() {
  return (
    <>
      <Navbar />
      <Hero3 />
    <Tekst/>
   {/*    <Hero /> */}
     <Offers />   
      <Plan />
      <Rooms />
      <ImageSlider/>
      <Footer/>
    </>
  );
}

export default App;
