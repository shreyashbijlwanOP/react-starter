import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const navLinks = [
  { name: "Home", path: "#home", isBorder: true },
  { name: "Services", path: "#services", isBorder: true },
  { name: "Contact us", path: "#contact", isBorder: true },
  { name: "About us", path: "#about", isBorder: false },
];

export default function NavBar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="bg-[#000300]">
      <div className="container px-6 p-4  flex justify-between items-center text-white">
        <h1 className=" text-teal-400 font-semibold text-3xl">Hello</h1>

        {/* Desktop Links  */}
        <nav className="uppercase">
          <ul className="hidden md:flex ">
            <li className="p-2 text-xl">Home</li>
            <li className="p-2 text-xl">Services</li>
            <li className="p-2 text-xl">Contact US</li>
            <li className="p-2 text-xl">About US</li>
          </ul>
        </nav>

        {/* Menu button */}
        <button
          className="p-2 text-white md:hidden"
          onClick={() => setShowNav((prev) => !prev)}
        >
          {!showNav ? (
            <HiOutlineMenuAlt3 size={32} className="text-white" />
          ) : (
            <MdOutlineClose size={32} className="text-white" />
          )}
        </button>

        {/* Nav Modal */}
        <nav
          className={` transition duration-300 uppercase fixed flex flex-col  bg-[#000300] w-[70%]  left-0 top-0 h-full ${
            !showNav ? `-translate-x-[100%]` : `translate-x-0`
          }`}
        >
          <ul className="px-8 py-16">
            {navLinks.map((nav) => (
              <li
                key={nav.name}
                className={`p-2 py-6 text-2xl ${
                  nav.isBorder && "border-b-2"
                }  transition duration-100 hover:translate-x-8 hover:scale-110`}
              >
                <a href={nav.path}>{nav.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
