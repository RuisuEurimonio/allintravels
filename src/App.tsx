import React from "react"
import Card from "./components/card"
import Header from "./components/Header"
import { TiSocialInstagram } from "react-icons/ti"
import { FaArrowAltCircleRight } from "react-icons/fa"
import InfoCard from "./components/InfoCard"

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
            <h2 className="text-[var(--main-color)] tracking-[1rem]
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
      <section className="pt-10">
        <h1 className="text-center text-2xl font-bold text-[var(--main-color)] tracking-[.5rem]
          md:text-5xl
        "> Nosotros </h1>
        <p className="text-justify w-[80vw] mx-auto
          md:py-10 md:w-[70vw] md:text-2xl
        "> Un copy cercano como hablandole a un amigo. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.  </p>
      </section>
      <section className="w-[90vw] m-auto flex flex-col items gap-1
        sm:flex-row sm:w-[200%] sm:ml-10 sm:justify-start sm:m-0 sm:relative
        xl:justify-center xl:w-auto
      ">
        <div className="bg-[var(--main-color)] p-1 rounded-full flex items-center justify-center m-auto
          sm:mx-0
        ">
          <TiSocialInstagram size={30} color="white"/>
        </div>
        <div className="m-auto sm:mx-4">
          <img src="/src/assets/nosotros_1.png" className="sm:max-w-90"/>
          <p className="text-[var(--main-color)] floa"> @churroceballos </p>
        </div>
        <ul className="flex
            sm:overflow-x-hidden 
        ">
          <li>
            <img src="/src/assets/nosotros_2.png" className="sm:max-w-90"></img>
          </li>
          <li>
            <img src="/src/assets/nosotros_3.png" className="sm:max-w-90"></img>
          </li>
          <li>
            <img src="/src/assets/nosotros_4.png" className="sm:max-w-90"></img>
          </li>
        </ul>
        <div className="p-1 w-10 h-10 rounded-full flex items-center justify-center m-auto
          sm:absolute sm:z-50 sm:left-[80vw] sm:top-0 sm:bottom-0
        ">
          <FaArrowAltCircleRight size={30} color="white" className="hidden sm:block"/>
        </div>
      </section>
      <hr className="border-[var(--main-color)] w-[90%] m-auto"/>
      <section>
        <h2> Experiencias grupales. </h2>
        <div>
        <InfoCard date="5 AL 15 DE ABRIL" status="¡ÚLTIMOS CUPOS!" description="Serengueti, viaje en globo, hotel todo incluido 4 estrellas. Vive la experiencia de conocer los 4 reyes de la sabana africana" 
          price="DESDE 5.500 USD"
          title="SAFARI (ÁFRICA)"
          img="/src/assets/exp_grupales_1.png"
        />
        </div>
      </section>
    </div>
  )
}

export default App
