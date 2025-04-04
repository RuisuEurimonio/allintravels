import Card from "./components/card"
import Header from "./components/Header"
import { TiSocialInstagram } from "react-icons/ti"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
import InfoCard from "./components/InfoCard"
import CardBlog from "./components/CardBlog"
import Form from "./components/Form"

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
          sm:absolute sm:z-50 sm:left-[80vw] sm:top-0 sm:bottom-0 sm:flex-grow
        ">
          <FaArrowAltCircleRight size={30} color="white" className="hidden sm:block"/>
        </div>
      </section>
      <hr className="border-[var(--main-color)] w-[90%] m-auto"/>
      <section className="w-[90%] m-auto relative">
        <h2 className="text-[var(--main-color)] font-extrabold text-center text-4xl my-4 tracking-[.5rem]"> Experiencias grupales. </h2>
        <div className="flex flex-col gap-2 items-center
          sm:flex-row sm:flex-grow sm:flex-wrap sm:mx-4 
          md:justify-around md:gap-12
        ">
        <FaArrowAltCircleLeft  size={50} className="text-[var(--main-color)] absolute left-[-25px] hidden size-7 lg:block xl:size-10" />
        <InfoCard className="flex-1" date="5 AL 15 DE ABRIL" status="¡ÚLTIMOS CUPOS!" description="Serengueti, viaje en globo, hotel todo incluido 4 estrellas. Vive la experiencia de conocer los 4 reyes de la sabana africana" 
          price="DESDE 5.500 USD"
          title="SAFARI (ÁFRICA)"
          img="/src/assets/exp_grupales_1.png"
        />
        <InfoCard className="flex-1" date="30/04 - 11/05" status="AGOTADO" description="Tokio, Monte Fuji y Kamajuza. Conoce la cultura que combina la tradicion y la tecnologia." 
          price="DESDE 2.700 USD"
          title="JAPÓN: TRADICIÓN Y MODERNIDAD"
          img="/src/assets/exp_grupales_2.png"
        />
        <InfoCard className="flex-1" date="01 AL 08 DE ABRIL" status="CUPOS DISPONIBLES" description="El Cairo, Piramides, Valle de los muertos y viaje por el Nilo. Retrocedamos en la historia y conozcamos una de las naciones más antiguas del mundo." 
          price=" DESDE 4.200 USD"
          title="EGIPTO: MÍSTICO Y MAJESTUOSO"
          img="/src/assets/exp_grupales_3.png"
        />
        <FaArrowAltCircleRight size={50} className="text-[var(--main-color)] absolute right-[-25px] hidden size-7 lg:block xl:size-10"/>
        </div>
      </section>

      <section className="my-8 w-[85%] mx-auto
                      sm:mx-auto
      ">
        <h2 className="text-center text-[var(--main-color)] font-bold tracking-[.1rem]
                      sm:text-2xl sm:tracking-[.6rem]
        "> EXPERIENCIAS PERSONALIZADAS </h2>
        <div className="flex flex-col items-center
                      sm:flex-row sm:w-[90%] sm:m-auto sm:gap-6
                      md:gap-15 md:justify-around md:w-full 
        ">
          <img src="/src/assets/exp_personalizadas.png" className="object-cover w-60 h-80 mt-5
                    md:w-80 md:h-100
          "/> 
          <div className="w-[90%] m-auto">
            <h3 className="font-bold text-center
                          sm:text-start
            "> ¿QUÉ NOS HACE DIFERENTES? </h3>
            <p className="text-justify
                          lg:text-xl
                          xl:text-2xl
            "> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
            <button className="bg-[var(--main-color)] py-3 block m-auto mt-2 px-6 uppercase font-bold text-sm rounded-md text-white
                          sm:mx-0
            "> Cotizar mi viaje. </button>
          </div>
        </div>
      </section>
      <section className="bg-[var(--main-color)] py-3">
        <h2 className="text-white text-2xl uppercase text-center font-bold tracking-[1rem] mb-4"> Blogs </h2>
        <div className="w-[90%] mx-auto grid gap-4
                        md:grid-flow-col md:grid-rows-2 md:w-[85%]
                        xl:w-[55%]
        ">
          <CardBlog className="row-span-2" img="blogs_1.png" title="DESTINOS PARA PAREJAS EN 2025" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam..." />
          <CardBlog img="blogs_2.png" title="VUELVE LA VISA PARA VIAJAR A LONDRES" text="" />
          <CardBlog img="blogs_3.png" title="TOP 3 DESTINOS EN COLOMBIA" text="" />
        </div>
      </section>
      <section className="bg-gray-200 px-[5%]
                      md:px-[10%]
                      xl:px-[25%]
      ">
        <h2 className="text-[var(--main-color)] font-bold tracking-[.3rem] text-center text-2xl uppercase py-5"> Diseña tu viaje </h2>
        <h3 className="font-bold"> AQUÍ COMIENZA TU EXPERIENCIA </h3>
        <p className="text-justify"> Una vez llenado este formulario, uno de nuestros planners travelers se pondra en contacto contigo para perfeccionar ese viaje que tanto has soñado. Estamos aquí para brindarte la mejor experiencia. </p>
        <Form/>
      </section>
      <section className="my-4 relative">
      <img src="src/assets/logo_WA.png" className="absolute w-1/12 top-[-2rem] right-10 drop-shadow-lg
                                                     sm:top-[-3rem] " />
        <h2 className="text-center text-[var(--main-color)] font-bold tracking-[.2rem] text-2xl"> ALIANZAS ESTRATÉGICAS </h2>
        <ul className="flex flex-wrap items-center justify-center gap-2 my-2 w-11/12 m-auto">
          <li className="w-28">
            <img src="src/assets/logo7.png" alt="" />
          </li>
          <li className="w-28">
            <img src="src/assets/logo6.png" alt="" />
          </li>
          <li className="w-28">
            <img src="src/assets/logo5.png" alt="" />
          </li>
          <li className="w-28">
            <img src="src/assets/logo4.png" alt="" />
          </li>
          <li className="w-28">
            <img src="src/assets/logo3.png" alt="" />
          </li>
          <li className="w-28">
            <img src="src/assets/logo2.png" alt="" />
          </li>
          <li className="w-28">
            <img src="src/assets/logo1.png" alt="" />
          </li>
        </ul>
      </section>
      <section className="bg-[var(--secondary-color)] py-4">
        <h2 className="text-white text-center"> Suscríbete a nuestro newsletter y recibe noticias, descuentos y más </h2>
        <div className="flex justify-center">
          <input type="email" className="bg-white py-1 w-11/12 
                                          sm:w-9/12
                                          md:w-7/12
                                          lg:w-5/12
          " />
        </div>
        <button className="bg-[var(--main-color)] py-3 block m-auto mt-5 px-6 uppercase font-bold text-sm rounded-md text-white"> Suscribirme </button>
      </section>
      <footer className="py-4 w-11/12 mx-auto">
        <ul className="flex flex-col items-center
                        md:flex-row md:flex-wrap md:gap-x-10 md:items-start md:py-10 md:justify-normal md:ml-5
                        lg:gap-x-25 lg:ml-15
                        2xl:gap-x-40
        ">
          <li className="w-8/12 mx-auto flex flex-col
                        md:w-2/12 md:mx-0
          ">
            <img src="src/assets/logo.png" />
            <img src="src/assets/logos_redes.png" />
          </li>
          <li>
            <ul className="flex flex-col items-center
                    md:items-start
            ">
              <li> Inicio </li>
              <li>¿Quienes somos?</li>
              <li>Viajes grupales</li>
              <li>Viajes a la medida</li>
              <li>Contáctanos</li>
              <li>Alianzas estratégicas</li>
              <li>Blogs</li>
              <li>Términos y condiciones</li>
              <li>Política de privacidad</li>
              <li>Registro Nacional de Turismo</li>
            </ul>
          </li>
          <li className="my-2">
            <ul className="flex flex-col items-center
                          md:items-start
            ">
              <li className="flex "> <img className="size-5 mr-2" src="src/assets/icono_mail.png" /> <span className=""> info@allintravels.com </span> </li>
              <li className="flex "> <img className="size-5 mr-2" src="src/assets/icono_telefono.png" /> <span className=""> 0057 (604) 444 45 83 </span> </li>
              <li> <p className="flex"> <img className="size-5 mr-2" src="src/assets/icono_ubicacion.png" /> Carrera 43A # 18 Sur - 135 Of 834, </p> <p> Sao Paulo Plaza Medellín - Colombia.</p> </li>
            </ul>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default App
