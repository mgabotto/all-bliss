"use client"; // This is a client component 👈🏽

import { useState } from "react";
import Link from "next/link";
import logo from "../../media/logo.png";
import Image from "next/image";

export default function Header() {
  let Links = [
    { name: "Inicio", link: "/" },
    { name: "Quienes Somos", link: "#mision" },
    { name: "Equipo", link: "#equipo" },
    // { name: "Noticias", link: "/" },
    { name: "Contacto", link: "#contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 p-0 ">
      <div className="md:flex items-center justify-between bg-green-100 py-0 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800"
        >
          <Image className="w-20" src={logo} alt="logo" />
          {/* <span className="text-3xl text-indigo-600 mr-1 pt-2"></span> */}
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
            <li
              key={link.name}
              className="md:ml-8 text-xl md:my-0 my-7 text-center"
            >
              <Link
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500 "
                scroll={false}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <button></button>
        </ul>
      </div>
    </div>
  );
}
