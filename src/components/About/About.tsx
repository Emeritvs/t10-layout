import React from 'react';
import Freelancer from '../../assets/images/freelancer@2x.png';
import Back1 from '../../assets/images/back1.png';
import './styles.css';

function About(){
  return(
    <div id="about" className="col-span-1 grid grid-cols-1 p-10 md:h-screen md:mb-20">
      <div className="col-span-1 flex justify-center content-center mb-20 md:mb-0">
        <div className="flex">
          <div className="title-div">
            <span className="mx-auto section-title title-text text-2xl md:text-3xl">SOBRE NÓS</span>
            <div className="title-shadow rounded-full text-2xl md:text-3xl noselect about-adjust">SOBRE NÓS</div>
          </div>
        </div>
      </div>

      <div className="col-span-1 md:mt-20">    
        <div className="grid sm:grid-cols-2 md:grid-cols-2">

          <div className="col-span-1 about-div">
            <img src={Freelancer} alt="FreelancerBearded" className="about-image md:ml-auto" />
            <img src={Back1} alt="Back1" className="about-border mb:w-1/3" />
          </div>

          <div className="col-span-1 md:px-20">
            <div className="flex flex-col md:w-full">
              <span className="about-title josefin-bold text-3xl my-10">Qual o seu próximo <br /> projeto?</span>
              <p className="josefin-regular text-justify md:text-left text-lg lg:text-2xl mb-10 md:w-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Sit amet volutpat consequat mauris nunc congue nisi. Lorem ipsum dolor sit amet. Ut diam quam nulla porttitor massa id neque.
              </p>

              <button className="about-button w-full md:w-1/2 text-white py-4 hover:bg-red-500 flex justify-center content-center mx-auto md:mx-0">Baixar CV</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;