import { useState } from "react";
import { FaListUl } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
        <div className="bg-gray-900 p-4 text-white flex justify-between items-center">
            <h2 className="font-bold">All In Travels.</h2>
            <FaListUl size={24} onClick={()=> toggleMenu()}/> 
        </div>
        <header className={`absolute top-0 left-0 w-full bg-blue-100 h-screen flex flex-col items-center gap-10 z-50 justify-center ${
          isOpen ? "translate-y-0" : "-translate-y-[100vh]"} 
          transition-transform duration-500 ease-in-out md:hidden
        `}>
            <FaX className="absolute right-0 top-0 font-medium px-2" size={34} values="X" onClick={()=>toggleMenu()}/> 
            <img src="/assets/img/logo.png" className="object-cover max-w-50"/>
            <ul className="flex flex-col gap-4 text-center text-xl">
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