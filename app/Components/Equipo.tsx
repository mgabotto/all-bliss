import Image from "next/image";
import victoriaFoto from "../../media/victoria.jpg";
import aliciaFoto from "../../media/alicia.jpg";
import martinFoto from "../../media/martin.jpg";
import federicoFoto from "../../media/federico.jpg";
import { ImageResponse } from "next/server";

const equipo = [
  {
    id: 1,
    name: "Federico",
    especialidad: "Organización y gestión",
    foto: federicoFoto,
  },
  {
    id: 2,
    name: "Alicia",
    especialidad: "Evaluación de Proyectos",
    foto: aliciaFoto,
  },
  {
    id: 3,
    name: "Martín",
    especialidad: "Análisis de procesos",
    foto: martinFoto,
  },
  {
    id: 4,
    name: "Victoria",
    especialidad: "----",
    foto: victoriaFoto,
  },
];

export default function Equipo() {
  return (
    <div className=" text-center px-2 ">
      <p className="text-4xl m-4" id="equipo">
        Nuestro Equipo
      </p>
      <div className="flex">
        <ul className="grid gap-x-10 flex-wrap md:grid-cols-2 lg:grid-cols-4 ">
          {equipo.map((person) => {
            return (
              <li
                className="max-w-lg mx-max my-10 bg-green-200 rounded-lg shadow-md p-5"
                key={person.id}
              >
                <Image
                  className="w-80 h-80 rounded-full "
                  src={person.foto}
                  alt="Profile picture"
                />
                <h2 className="text-center text-2xl font-semibold mt-3">
                  {person.name}
                </h2>
                <p className="text-center text-gray-600 mt-1">
                  {person.especialidad}
                </p>
                <div className="mt-5">
                  <p className="text-gray-600 mt-2"></p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
