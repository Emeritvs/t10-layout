import React from 'react';
import Back1 from '../../assets/images/back1.png';
import './styles.css';

function Contact(){
  return(
    <div id="contact" className="col-span-1 grid grid-cols-1 landing-content md:h-screen mt-20 md:mt-0 mb-40">

      <div className="col-span-1 flex flex-col justify-center content-center">
        <div className="flex justify-center content-center">
          <div className="title-div">
            <span className="mx-auto section-title title-text text-2xl md:text-3xl">CONTATO</span>
            <div className="title-shadow rounded-full text-2xl md:text-3xl noselect">CONTATO</div>
          </div>
        </div>

        <div className="flex justify-center content-center my-6">
          <div className="title-div">
            <span className="section-subtitle mx-auto josefin-bold text-3xl md:text-4xl lg:text-5xl">Envie sua mensagem</span>
            <div className="subtitle-shadow rounded-full text-6xl md:text-7xl lg:text-8xl short-shadow noselect">Envie sua mensagem</div>
          </div>
        </div>
      </div>

      <div className="col-span-1 mx-10 md:mx-80 mt-20 md:mt-0">
        <div className="flex flex-col gap-4 md:gap-10">
          <div className="col-span-1">
            <input type="text" className="contact-input josefin-regular p-5 w-full" placeholder="Nome" />
          </div>

          <div className="col-span-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
            <div className="col-span-1">
              <input type="text" className="contact-input josefin-regular p-5 w-full" placeholder="Telefone" />
            </div>
            <div className="col-span-1">
              <input type="text" className="contact-input josefin-regular p-5 w-full" placeholder="Email" />
            </div>
          </div>

          <div className="col-span-1">
            <textarea name="" id="" placeholder="Mensagem" className="contact-input p-5 w-full"></textarea>
          </div>

          <div className="col-span-1">
            <button className="about-button w-full md:w-1/2 text-white py-4 hover:bg-red-500 flex justify-center content-center mx-auto">Enviar</button>
          </div>
        </div>

        <img src={Back1} alt="Back1" className="contact-border mb:w-1/3" />
      </div>

    </div>
  );
}

export default Contact;