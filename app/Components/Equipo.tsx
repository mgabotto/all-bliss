import Image from "next/image";

const equipo = [
  { id: 1, name: "Federico", especialidad: "Organización y gestión" },
  { id: 2, name: "Alicia", especialidad: "Evaluación de Proyectos" },
  { id: 3, name: "Martín", especialidad: "Análisis de procesos" },
  { id: 4, name: "Victoria", especialidad: "----" },
];

export default function Equipo() {
  return (
    <div className="flex bg-orange-400">
      <ul className="flex gap-x-20">
        {equipo.map((person) => {
          return (
            <li className="flex flex-col" key={person.id}>
              <span>{person.name}</span>
              <span>{person.especialidad}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
