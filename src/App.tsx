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
          <div className="bg-[url('/src/assets/header.png')] h-full bg-cover bg-center bg-no-repeat flex flex-col justify-end gap-5 pb-10
            md:justify-emd md:pb-18
          ">
            <p className="text-white text-4xl tracking-[.4rem]
              md:text-7xl md:tracking-[2rem]
            ">THE TRAVEL</p>
            <h2 className="text-amber-500 tracking-[1rem]
              md:tracking-[3rem] md:text-3xl
            ">EXPERIENCE</h2>
            <div className="flex w-[300%] overflow-x-hidden custom-animation
              md:w-full md:gap-15 md:px-5 md:justify-center md:translate-y-10
            ">
              <Card text="Viajes grupales" img="/src/assets/viajes_grupales.png" className="w-[70vw] mx-[15vw]
                md:max-w-[25rem] md:mx-0
              "/>
              <Card text="Viajes a la medida" img="/src/assets/viajes_a_la_medida.png" className="w-[70vw] mx-[15vw]
                md:max-w-[25rem] md:mx-0
              "/>
              <Card text="Destinos para parejas" img="/src/assets/destinos_para_parejas.png" className="w-[70vw] mx-[15vw]
                md:max-w-[25rem] md:mx-0
              "/>
            </div>
          </div>
        </div>
      </header>
      <h1> Hola </h1>
    </div>
  )
}

export default App
