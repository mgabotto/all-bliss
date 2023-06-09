import Image from "next/image";
import contact from "../../media/contact.jpg";

export default function Contact() {
  return (
    <div className="grid grid-rows-none	 md:grid-cols-2">
      <div className="hidden md:block ">
        <Image alt="" src={contact} />
      </div>
      <div className="text-center place-content-center self-center	">
        <p className="text-5xl text-emerald-600	italic mt-5">ALL BLISS</p>
        <p className="text-4xl text-emerald-400">Consultores Asociados</p>
        <div className="text-2xl">
          <div className="">
            <p className="text-bold text-xl mt-4">Nuestra Oficina</p>
            <p>C. Casares 893 - Temperley</p>
          </div>
          <div>
            <p className="text-bold text-xl mt-4">Teléfono</p>
            <p>+54 (011) 3527-3436</p>
          </div>
          <div>
            <p className="text-bold text-xl mt-4">Email</p>
            <p>contactoabya@gmail.com</p>
          </div>
          <div>
            <p className="text-bold text-xl mt-4">Whatsapp:</p>
            <p>1153777997</p>
          </div>
        </div>
      </div>
    </div>
  );
}
