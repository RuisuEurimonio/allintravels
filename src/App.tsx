import React from "react"
import Card from "./components/card"
import Header from "./components/Header"

function App() {
  

  return (
    <div className="w-full overflow-hidden">
      <header>
        <Header />
        <div className="text-center font-bold h-[50vh] 
          md:h-[85vh]
        ">
          <div className="bg-[url('/src/assets/header.png')] h-full bg-cover bg-center bg-no-repeat flex flex-col justify-end gap-5 pb-10">
            <h1 className="text-white">THE TRAVEL</h1>
            <h2 className="text-amber-500 tracking-[1rem]">EXPERIENCE</h2>
            <div className="flex w-[300%] overflow-x-hidden custom-animation">
              <Card text="Viajes grupales" img="/src/assets/viajes_grupales.png" className="w-[70vw] mx-[15vw]"/>
              <Card text="Viajes a la medida" img="/src/assets/viajes_a_la_medida.png" className="w-[70vw] mx-[15vw]"/>
              <Card text="Destinos para parejas" img="/src/assets/destinos_para_parejas.png" className="w-[70vw] mx-[15vw]"/>
            </div>
          </div>
        </div>
      </header>
      <h1> Hola </h1>
    </div>
  )
}

export default App
