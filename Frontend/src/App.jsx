import { useState } from 'react';
import reve from '/ReVeLogo.png';
import hero from '/HeroWithText.png';
import mensWear from '/Cat1.png';
import mensCasual from '/Cat7.png';
import womansWear from '/Cat5.png';
import womansCasual from '/Cat6.png';
import FAQAccordion from '../components/FAQAccordion.jsx'; // Ensure the path is correct


function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="flex flex-col min-h-screen flex-grow">
      <header className="bg-black h-20 items-center w-screen flex flex-row justify-between px-40">
        <div>
          <img src={reve} alt="ReVe Logo" width={97} height={48} />
        </div>
        <nav className="text-white flex space-x-8">
          <a href="#" className="hover:underline">Home</a>
        </nav>
      </header>
      <main className="flex-grow">
        <div className="flex flex-col items-center justify-center relative">
          <img src={hero} alt="Hero Foto" className="w-full h-auto" />
        </div>
        <div className="flex justify-center">
          <p className="text-8xl font-bold mt-10">Our Categories</p>
        </div>
        <div className="flex flex-row justify-between mt-10 mb-5 mx-20">
          <div className="flex relative">
            <img src={mensWear} alt="Mens Wear" width={400} height={400} />
          </div>
          <div className="flex relative">
            <img src={mensCasual} alt="Mens Casual" width={400} height={400} />
          </div>
          <div className="flex relative">
            <img src={womansWear} alt="Womans Wear" width={400} height={400} />
          </div>
          <div className="flex relative">
            <img src={womansCasual} alt="Womans Casual" width={400} height={400} />
          </div>
        </div>
        <div className="flex flex-col mt-12"> 
          <div className="flex justify-center">
            <p className="text-8xl font-bold mb-10">FAQ</p>
          </div>
          <div className="px-[165px]">
            <FAQAccordion />
          </div>
         </div>
      </main>
      {/* <Footer /> */}
      <div className="bg-black text-white text-center flex items-center justify-center flex-col mt-10">
        <div className="mt-16 mb-4">
          <p className='text-6xl font-serif '>You can never get bored of fashion.</p>
        </div>
        <div className="mb-5 mt-2">
          <button onClick={toggleModal} className="bg-red-900 text-white px-12 py-3 rounded-lg">
            Download Our App!
          </button>
        </div>
        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg">
              <p className="text-2xl text-center text-black">Enjoy Our App!</p>
              <button onClick={toggleModal} className="bg-red-900 text-white px-4 py-2 mt-4 rounded-lg">
                Close
              </button>
            </div>
          </div>
        )}
        <hr className="w-3/4 border-t border-white" />
        <div className=' flex flex-row justify-between items-center p-4 w-3/4 mb-10'>
          <div className='flex justify-end'>
            <img src={reve} alt="ReVe Logo" width={97} height={48} />
          </div>
          <div className='flex justify-center items-center font-bold'>
            <p>@2023 ReVe Indonesia</p>
          </div>
          <div className='flex justify-center items-center w-24'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
