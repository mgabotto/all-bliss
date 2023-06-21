import Image from "next/image";
import foto from "../../media/arboles.jpg";
import { ImageResponse } from "next/server";

const equipo = [
  { id: 1, name: "Federico", especialidad: "Organización y gestión" },
  { id: 2, name: "Alicia", especialidad: "Evaluación de Proyectos" },
  { id: 3, name: "Martín", especialidad: "Análisis de procesos" },
  { id: 4, name: "Victoria", especialidad: "----" },
];

export default function Equipo() {
  return (
    <div className="bg-green-300 text-center">
      <p className="text-4xl m-4">Nuestro Equipo</p>
      <div className="flex">
        <ul className="grid gap-x-10 flex-wrap md:grid-cols-2 lg:grid-cols-4">
          {equipo.map((person) => {
            return (
              <li className="flex flex-col" key={person.id}>
                <Image src={foto} alt="" className="w-xs" />
                <span className="text-3xl m-4 font-bold">{person.name}</span>
                <span className="text-2xl m-4 italic">
                  {person.especialidad}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
