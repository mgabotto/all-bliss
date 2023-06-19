export default function Portada() {
  return (
    <header className="bg-orange-500 min-w-full h-3/4 ">
      {/* <div className="fit">
        <Image src={arboles} alt="arboles" className="" />
      </div> */}
      <div className="z-0 bg-[url('../media/arboles.jpg')] bg-no-repeat bg-cover bg-center h-full flex justify-center items-center w-screen ">
        <div className="md:w-1/3 h-full"></div>
        <div className="md:w-2/3 h-full ">
          <div className="flex flex-col  gap-1.5 text-stone-50 bg-green-400/30 h-full text-center text-justify justify-center items-center md:items-start 	bg-blend-color space-y-5 	">
            <h1 className="text-4xl md:text-8xl	font-semibold	">ALL BLISS</h1>
            <h2 className="text-4xl text-center	">Consultores Asociados</h2>
            <h4 className="text-sm md:text-4x1 text-center md:text-start		 ">
              AYUDAMOS A CREAR Y DESARROLLAR NEGOCIOS RENTABLES Y SUSTENTABLES
            </h4>
          </div>
        </div>
      </div>
    </header>
  );
}
