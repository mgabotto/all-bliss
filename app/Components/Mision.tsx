import Image from "next/image";
import greenLeaves from "../../media/greenLeaves.png";
import naturaleza from "../../media/naturaleza.jpg";

export default function Mision() {
  return (
    <div className="lg:mx-9 text-center my-8 ">
      <div className="flex">
        <div className="md:w-2/3 flex flex-col justify-center self-center ">
          <h6 className="h-4.5 text-4xl md:text-6xl mb-5 ">Quienes Somos</h6>
          <p className="h-full align-middle md:text-lg md:mt-12 md:mr-6 lg:text-4xl m-5 ">
            Somos un grupo de consultores enfocados en colaborar con las
            empresas para desarrollar sus negocios de forma sostenible, ayudando
            a orientar sus estrategias hacia los stakeholders: clientes,
            empleados, inversionistas, cadena de valor, comunidad.
          </p>
        </div>
        <div className="hidden md:w-1/3 md:block">
          <Image src={naturaleza} alt="green leaves" />
        </div>
      </div>
      <div className="md:flex">
        <div className="w-6/12">
          <div className="">
            <h6 className="md:text-4xl font-black md:mb-5">Misión</h6>
            <div className="h-full box ">
              <p className=" md:text-4xl h-full  py-16 ">
                Ayudar a las emdepresas y a los emprendedores a lograr sus
                objetivos comerciales a partir de una visión sustentable
              </p>
            </div>
          </div>
        </div>
        <div className="w-6/12  ">
          <h6 className="md:text-4xl font-black md:mb-5">Valores</h6>
          <div className="flex justify-center gap-10 text-3xl flex-wrap  ">
            <span className="box ">Honestidad</span>
            <span className="box">Calidad</span>
            <span className="box">Trabajo en equipo</span>
            <span className="box">Orientación al cliente</span>
          </div>
        </div>
      </div>
    </div>
  );
}
