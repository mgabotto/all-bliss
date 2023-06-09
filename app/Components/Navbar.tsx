"use client"; // This is a client component 👈🏽

import { useState } from "react";

export default function Header() {
  let Links = [
    { name: "Inicio", link: "/" },
    { name: "Quienes Somos", link: "/" },
    { name: "Equipo", link: "/" },
    { name: "Noticias", link: "/" },
    { name: "Contacto", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 ">
      <div className="md:flex items-center justify-between bg-green-300 py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2"></span>
          ALL BLISS
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        ></div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-7 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500 "
              >
                {link.name}
              </a>
            </li>
          ))}
          <button>asd</button>
        </ul>
      </div>
    </div>
  );
}
