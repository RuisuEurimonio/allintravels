import { useState } from "react";

const Form = () => {
  const options: string[] = [
    "SAFARI",
    "DEPORTE",
    "ARTE Y CULTURA",
    "DESCANSO",
    "ESPIRITUAL",
    "PLAYA",
    "NATURALEZA",
  ];

  const [select, setSelect] = useState<string>();

  return (
    <form>
      <div className="flex flex-col my-5
                    md:flex-row gap-5 w-full
      ">
        <div className="w-1/2">
            <label>¿CUÁL ES EL DESTINO QUE QUIERES VISITAR?</label>
            <select className="bg-white block w-full py-1">
            <option value=""></option>
            <option value="bogota">Bogotá</option>
            <option value="medellin">Medellín</option>
            <option value="neiva">Neiva</option>
            </select>
        </div>
        <div className="w-1/2">
            <label>¿QUÉ OTRO DESTINO TIENES EN MENTE?</label>
            <select className="bg-white block w-full py-1">
            <option value=""></option>
            <option value="bogota">Bogotá</option>
            <option value="medellin">Medellín</option>
            <option value="neiva">Neiva</option>
            </select>
        </div>
      </div>
      <div className="">
        <p> ¿QUÉ EXPERIENCIAS QUIERES VIVIR? </p>
        <div className="grid grid-cols-2 gap-3 items-center 
                        md:grid-cols-3
        ">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="radio"
                name="tecnologia"
                value={option}
                checked={select === option}
                onChange={() => setSelect(option)}
                className="hidden"
              />
              <span
                className={`rounded ${
                  select == option ? "bg-[var(--main-color)]" : "bg-white"
                } px-2 py-1 m-auto w-[90%] text-center`}
              >
                {option}
              </span>
            </label>
          ))}
        </div>
      </div>
      <div className="my-4 flex flex-wrap gap-5
                    md:justify-evenly
      ">
        <div className="flex gap-4">
            <p> ¿SABES CUÁNDO VIAJAR? </p>
            <label>
            <input name="know" value="si" type="radio" />
            <span> SI </span>
            </label>
            <label>
            <input name="know" value="no" type="radio" />
            <span> NO </span>
            </label>
        </div>
        <div className="w-full 
                        sm:w-fit
        ">
            <label className="inline-block w-1/3"> IDA: </label>
            <input className="bg-white py-1 w-2/3" type="date" name="ida" />
        </div>
        <div className="w-full 
                        sm:w-fit
        ">
            <label className="inline-block w-1/3"> REGRESO: </label>
            <input className="bg-white py-1 w-2/3" type="date" name="regreso" />
        </div>
        <div className="w-full 
                        sm:w-fit
        ">
            <label className="inline-block w-1/3"> NIÑOS: </label>
            <input className="bg-white py-1 w-2/3" type="number" name="ninos" />
        </div>
        <div className="w-full 
                        sm:w-fit
        ">
            <label className="inline-block w-1/3"> ADULTOS: </label>
            <input className="bg-white py-1 w-2/3" type="number" name="adultos" />
        </div>
      </div>
      <p> TU VIAJE IDEAL... </p>
      <textarea className="bg-white w-full" name="viajeIdeal" />
      <div className="flex justify-center">
        <input type="button" className="my-4 py-2 px-8 bg-[var(--main-color)] rounded-md uppercase text-white font-bold" value="enviar" />
      </div>
    </form>
  );
};

export default Form;
