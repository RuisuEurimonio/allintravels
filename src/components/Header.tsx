import React from "react";
import { FaListUl } from "react-icons/fa";
function Header() {

    const isOpen : boolean = true;

    return (
        <>
        <div className="bg-gray-900 p-4 text-white flex justify-between items-center">
            <h2 className="font-bold">All In Travels.</h2>
            <FaListUl size={24}/> 
        </div>
        <header className={`absolute top-0 left-0 w-full bg-gray-400 h-screen flex flex-col items-center gap-1 mt-2 ${
          isOpen ? "translate-y-0" : "-translate-y-[100vh]"} 
          transition-transform duration-300 ease-in-out md:hidden
        `}>
            <img src="/assets/img/logo.png" className="object-cover max-w-40"/>
            <ul className="flex flex-col text-center">
                <li className="font-bold"> Inicio. </li>
                <li> Nosotros </li>
                <li> Viajes </li>
                <li> Blogs </li>
                <li> Contacto </li>
            </ul>
        </header>
        </>
    )
}

export default Header;