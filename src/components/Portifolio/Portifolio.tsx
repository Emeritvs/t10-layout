import React from 'react';
import Thumb1 from '../../assets/images/thumb1.png';
import Thumb3 from '../../assets/images/thumb3.png';
import Thumb4 from '../../assets/images/thumb4.png';
import './styles.css';
import { FaPlus } from 'react-icons/fa';

function Portifolio(){
  return(
    <div id="portifolio" className="col-span-1 grid grid-cols-1 p-10 md:px-20 md:mt-20">
      {/* Portifolio Header */}
      <div className="col-span-1 flex flex-col justify-center content-center">
        <div className="flex justify-center content-center">
          <div className="title-div">
            <span className="mx-auto section-title title-text text-2xl md:text-3xl">PORTIFOLIO</span>
            <div className="title-shadow rounded-full text-2xl md:text-3xl noselect">PORTIFOLIO</div>
          </div>
        </div>

        <div className="flex justify-center content-center my-6">
          <div className="title-div">
            <span className="section-subtitle mx-auto josefin-bold text-3xl md:text-4xl lg:text-5xl">Meus Trabalhos</span>
            <div className="subtitle-shadow rounded-full text-6xl md:text-7xl lg:text-8xl short-shadow noselect">Meus Trabalhos</div>
          </div>
        </div>
      </div>
      
      <div className="col-span-1 mt-20 md:mt-0">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-1 relative portifolio-div">
            <img src={Thumb1} alt="Thumb1" className="portifolio-image w-full mx-auto" />

            <div className="portifolio-overlay flex flex-col">
                <div className="portifolio-overlay-content m-auto text-white flex flex-col">
                  <span className="josefin-regular text-2xl mb-2">Phone Mockup</span>            
                  <div className="flex flex-col justify-items-center items-center">
                    <FaPlus className="border rounded-full p-2" size={32}/>
                  </div>
                </div>
            </div>
          </div>

          <div className="col-span-1 relative portifolio-div">
            <img src={Thumb1} alt="Thumb2" className="portifolio-image w-full mx-auto" />
            <div className="portifolio-overlay flex flex-col">
                <div className="portifolio-overlay-content m-auto text-white flex flex-col">
                  <span className="josefin-regular text-2xl mb-2">Phone Mockup</span>            
                  <div className="flex flex-col justify-items-center items-center">
                    <FaPlus className="border rounded-full p-2" size={32}/>
                  </div>
                </div>
            </div>
          </div>

          <div className="col-span-1 relative portifolio-div">
            <img src={Thumb3} alt="Thumb3" className="portifolio-image w-full mx-auto" />
            <div className="portifolio-overlay flex flex-col">
                <div className="portifolio-overlay-content m-auto text-white flex flex-col">
                  <span className="josefin-regular text-2xl mb-2">Phone Mockup</span>            
                  <div className="flex flex-col justify-items-center items-center">
                    <FaPlus className="border rounded-full p-2" size={32}/>
                  </div>
                </div>
            </div>
          </div>

          <div className="col-span-1 relative portifolio-div">
            <img src={Thumb4} alt="Thumb4" className="portifolio-image w-full mx-auto" />
            <div className="portifolio-overlay flex flex-col">
                <div className="portifolio-overlay-content m-auto text-white flex flex-col">
                  <span className="josefin-regular text-2xl mb-2">Phone Mockup</span>            
                  <div className="flex flex-col justify-items-center items-center">
                    <FaPlus className="border rounded-full p-2" size={32}/>
                  </div>
                </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Portifolio;