import React from 'react';
import Art1 from '../../assets/images/art1.svg';
import './styles.css';

function More(){
  return(
    <div className="col-span-1 flex flex-col md:grid md:grid-cols-2 md:ml-40 md:mr-20 mb-20 md:h-screen">
      <div className="col-span-1 flex md:justify-items-center md:items-center mb-20 md:mb-0">
        <div className="flex flex-col mx-auto">
          <span className="title-text text-4xl md:text-6xl">Inovação, Design e <br /> <label className="title-bold">Experiência </label></span>

          <span className="subtitle josefin-regular lg:text-3xl my-4 md:my-10">Sempre a frente em soluções digitais</span>

          <button className="more-button w-full md:w-2/5 text-white py-4 px-8 flex flex-col hover:bg-red-500 justify-center content-center"><span className="text-base mx-auto">Saiba Mais</span></button>
        </div>
      </div>  

      <div className="col-span-1 flex justify-items-center items-center">
        <img className="w-3/5 md:h-4/5 mx-auto md:ml-auto md:mr-0" src={Art1} alt="Art1"/>
      </div>
    </div>
  );
}

export default More;