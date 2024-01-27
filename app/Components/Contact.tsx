import Image from "next/image";
import contact from "../../media/contact.jpg";
import wpp from "../../media/whatsapp-logo.png";

export default function Contact() {
  return (
    <div className="grid grid-rows-none	 md:grid-cols-2">
      <div className="hidden md:block self-center" id="contact">
        <Image alt="" src={contact} />
      </div>
      <div className="text-center place-content-center self-center	">
        <p className="text-5xl text-emerald-600	italic mt-5">ALL BLISS</p>
        <p className="text-4xl text-emerald-400">Consultores Asociados</p>
        <div className="text-2xl flex flex-col gap-2">
          <div>
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
          <div className="pt-5 place-content-center self-center">
            {/* <p className="text-bold text-xl mt-4">Whatsapp:</p>
            <p>1153777997</p> */}
            <Image className="w-28" src={wpp} alt="whatsapp" />
          </div>
        </div>
      </div>
    </div>
  );
}
