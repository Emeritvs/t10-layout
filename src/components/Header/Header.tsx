import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import LogoT10 from '../../assets/images/t10_logo.png';
import { FaBars } from 'react-icons/fa';

interface PageSection {
  name?: string;
}

function Header(props : PageSection) {

  const [menu, setMenu] = useState('false');
  const [menuShow, setMenuShow] = useState(true);
  const mobileMenu = { opacity: menuShow ? 1 : 0 };
  const [navClasses, setNavClasses] = useState('hidden transition duration-500 ease-in-out border-t-2 mt-4 grid-cols-1 grid-rows-3 md:hidden');

  const toggleMenu = () => {
    if (menuShow) {
      setMenuShow(false);
      setNavClasses('hidden transition duration-500 ease-in-out border-t-2 mt-4 grid-cols-1 grid-rows-3 md:hidden');
    }
    else {
      setMenuShow(true);
      setNavClasses('grid transition duration-500 ease-in-out border-t-2 mt-4 grid-cols-1 grid-rows-3 md:hidden');
    }
  }

  return (
    <nav className="flex mx-auto header-bg px-10 py-4 md:px-20 md:py-10">
      <div className="flex w-full md:w-auto md:ml-12">
        <div className="grid grid-cols-1 w-full">

          <div className="flex items-center">
            <a href="#home" className="font-bold"><img src={LogoT10} alt="T10"/></a>

            {/* Collapse Button */}
            <button className="md:hidden ml-auto p-2 cursor-pointer text-white" onClick={() => toggleMenu()}><FaBars size={24} /></button>
          </div>

          {/* Mobile Menu (Collapsed) */}
          <ul className={navClasses}>
            <li className="py-2 px-2"><a href="#home" className="cursor-pointer text-white font-bold">Home</a></li>
            <li className="py-2 px-2"><a href="#about" className="cursor-pointer text-white font-bold">Sobre nós</a></li>
            <li className="py-2 px-2"><a href="#services" className="cursor-pointer text-white font-bold">Serviços</a></li>
            <li className="py-2 px-2"><a href="#portifolio" className="cursor-pointer text-white font-bold">Portifólio</a></li>
            <li className="py-2 px-2"><a href="#contact" className="cursor-pointer text-white font-bold">Contato</a></li>
          </ul>
        </div>
      </div>

      {/* Web Menu */}
      <ul className="hidden ml-auto md:flex md:flex-row">
        <li className="pr-5 flex flex-wrap justify-center content-center"><a href="#home" className="cursor-pointer header-item text-white font-bold">Home</a></li>
        <li className="pr-5 flex flex-wrap justify-center content-center"><a href="#about" className="cursor-pointer header-item text-white font-bold">Sobre Nós</a></li>
        <li className="pr-5 flex flex-wrap justify-center content-center"><a href="#services" className="cursor-pointer header-item text-white font-bold">Serviços</a></li>
        <li className="pr-5 flex flex-wrap justify-center content-center"><a href="#portifolio" className="cursor-pointer header-item text-white font-bold">Portifólio</a></li>
        <li className="pr-5 flex flex-wrap justify-center content-center"><a href="#contact" className="cursor-pointer header-item text-white font-bold">Contato</a></li>
      </ul>
    </nav>
  );
}

export default Header;