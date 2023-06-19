import Image from "next/image";

const equipo = [
  { id: 1, name: "Federico", especialidad: "Organización y gestión" },
  { id: 2, name: "Alicia", especialidad: "Evaluación de Proyectos" },
  { id: 3, name: "Martín", especialidad: "Análisis de procesos" },
  { id: 4, name: "Victoria", especialidad: "----" },
];

export default function Equipo() {
  return (
    <div className="container flex bg-orange-400">
      <ul>
        {equipo.map((person) => {
          return (
            <li key={person.id}>
              {person.name} - {person.especialidad}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
