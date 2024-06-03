import React from 'react';
import Navbar from './components/navbar/Navbar.js'
import Offers from './componenty/Offers.js';
import Plan from './componenty/Plan.js';
import Rooms from './componenty/Rooms.js';
import ImageSlider from './componenty/ImageSlider.js';
import Footer from './componenty/footer/Footer.js';
import Hero3 from './components/hero/Hero3';
import Tekst from './componenty/Tekst.js'
// eslint-disable-next-line no-unused-vars
const unusedVariable = 'unused';

function App() {
  return (
    <>
      <Navbar />
      <Hero3 />
    <Tekst/>
   {/*    <Hero /> */}
      <Plan />
      <Rooms />
      <ImageSlider/>
      <Footer/>
    </>
  );
}

export default App;
