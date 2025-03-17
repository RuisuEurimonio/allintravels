import React from "react";
function Header() {
    return (
        <header className="static w-full flex flex-col items-center gap-1 mt-2">
            <img src="/assets/img/logo.png" className="object-cover max-w-40"/>
            <ul className="flex flex-col text-center">
                <li className="font-bold"> Inicio. </li>
                <li> Nosotros </li>
                <li> Viajes </li>
                <li> Blogs </li>
                <li> Contacto </li>
            </ul>
        </header>
    )
}

export default Header;