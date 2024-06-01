import { useState } from 'react';
import reve from '/ReVeLogo.png';
import hero from '/HeroWithText.png';
import mensWear from '/Cat1.png';
import mensCasual from '/Cat7.png';
import womansWear from '/Cat5.png';
import womansCasual from '/Cat6.png';
import FAQAccordion from '../components/FAQAccordion.jsx'; // Ensure the path is correct
import './App.css';

function App() {
  return (
    <div className='flex flex-col'>
      <div className="bg-[#0B0A0A] h-20 items-center w-screen flex flex-row justify-between px-40">
        <div className="text-white">
          <img src={reve} alt="ReVe Logo" width={97} height={48} />
        </div>
        <div className="text-white flex space-x-8">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Catalogue</a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center relative">
        <img src={hero} alt="Hero Foto" className="w-full h-auto" />
      </div>
      <div className='flex flex-row justify-between mt-20 mx-20'>
        <div className='flex relative'>
          <img src={mensWear} alt="Mens Wear" width={400} height={400} />
        </div>
        <div className='flex relative'>
          <img src={mensCasual} alt="Mens Casual" width={400} height={400} />
        </div>
        <div className='flex relative'>
          <img src={womansWear} alt="Womans Wear" width={400} height={400} />
        </div>
        <div className='flex relative'>
          <img src={womansCasual} alt="Womans Casual" width={400} height={400} />
        </div>
      </div>
      <div className='flex flex-col pb-64 mt-12'>
        <div className='flex justify-center'>
          <p className='text-8xl font-bold mb-10'>FAQ</p>
        </div>
        <div className='px-[165px]'>
          <FAQAccordion />
        </div>
      </div>
    </div>
  )
}

export default App;
