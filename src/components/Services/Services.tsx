import React from 'react';
import DesignIcon from '../../assets/images/page-1.svg';
import ArrowIcon from '../../assets/images/arrow.svg';
import Back1 from '../../assets/images/back1.png';
import './styles.css';

function Services(){
  return(
    <div id="services" className="col-span-1 grid grid-cols-1 p-10 md:px-20 md:h-screen">
      {/* Services Header */}
      <div className="col-span-1 flex flex-col justify-center content-center">
        <div className="flex justify-center content-center">
          <div className="title-div">
            <span className="mx-auto section-title title-text text-2xl md:text-3xl">SERVIÇOS</span>
            <div className="title-shadow rounded-full text-2xl md:text-3xl noselect">SERVIÇOS</div>
          </div>
        </div>

        <div className="flex justify-center content-center my-6">
          <div className="title-div flex flex-col md:block">
            <span className="section-subtitle mx-auto josefin-bold text-2xl text-center md:text-3xl lg:text-4xl">Proporcionamos uma melhor experiência</span>
            <div className="subtitle-shadow rounded-full text-xl md:text-2xl lg:text-3xl long-shadow noselect">Proporcionamos uma melhor experiência</div>
          </div>
        </div>
      </div>

      <div className="col-span-1 my-20">
        <div className="flex flex-col md:grid md:grid-cols-2">

          <div className="col-span-1 services-div flex items-center">
            {/* Skill Card */}
            <div className="services-card1 bg-white flex flex-col p-10">
              <div className="col-span-1">
                <span className="josefin-bold text-5xl services-card-title">85%</span>
              </div>

              {/* Progress Bar */}
              <div className="col-span-1">
                <progress id="service-skill" className="services-progressbar" value="85" max="100"></progress>
              </div>

              <div className="col-span-1 w-50 my-10">
                <span className="services-card-title josefin-bold text-4xl">Design UI  <br/> <text className="services-card-subtitle josefin-regular text-2xl">Photoshop, Illustrator</text></span>
              </div>
            </div>
            

            <img src={Back1} alt="Back1" className="services-border mb:w-1/3" />
          </div>

          {/* Right Card */}
          <div className="col-span-1 mt-32 md:mt-0">
            <div className="services-card2 rounded flex flex-col md:mx-20 pt-20 pb-10 px-10">

              <div className="flex mb-10">
                <div className="border-4 rounded-full p-10 mx-auto md:mx-0">
                  <img src={DesignIcon} className="services-icon" alt="DesignIcon"/>
                </div>
              </div>

              <div className="flex">
                <span className="josefin-semi text-white text-4xl pb-10 border-dashed border-b-4 mx-auto md:mx-0">Design</span>
              </div>
              

              <div className="flex py-10">
                <p className="josefin-regular text-white text-center md:text-left text-2xl">Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam eirmod tempor dolore.</p>
              </div>

              <div className="col-span-1">
                <button className="services-button text-white py-2 hover:bg-gray-100 px-4 flex justify-center content-center mx-auto md:mx-0">
                  <span className="flex josefin-regular">Saiba Mais <img src={ArrowIcon} alt="ArrowIcon" className="ml-6" /></span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Services;