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
      <div>
        <label>¿CUÁL ES EL DESTINO QUE QUIERES VISITAR?</label>
        <select>
          <option value="">Elige una opción</option>
          <option value="bogota">Bogotá</option>
          <option value="medellin">Medellín</option>
          <option value="neiva">Neiva</option>
        </select>
        <label>¿QUÉ OTRO DESTINO TIENES EN MENTE?</label>
        <select>
          <option value="">Elige una opción</option>
          <option value="bogota">Bogotá</option>
          <option value="medellin">Medellín</option>
          <option value="neiva">Neiva</option>
        </select>
      </div>
      <div className="">
        <p> ¿QUÉ EXPERIENCIAS QUIERES VIVIR? </p>
        <div className="grid grid-cols-2 gap-3 items-center ">
        {options.map((option)=>(
            <label key={option} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="tecnologia"
              value={option}
              checked={select === option}
              onChange={() => setSelect(option)}
              className="hidden"
            />
            <span className={`rounded ${select == option ? "bg-[var(--main-color)]" : "bg-white"} px-2 py-1 m-auto w-[90%] text-center`}>{option}</span>
          </label>
        ))}
        </div>
      </div>
    </form>
  );
};

export default Form;
