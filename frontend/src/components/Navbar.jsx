import { useState } from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Plans", href: "#plans" },
    { name: "Amenities", href: "#amenities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-12 md:h-16 w-auto object-contain"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">
              Gaurisha
            </h1>
            <p className="text-xs tracking-widest uppercase text-gray-500">
              Co-Working Space
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group">
              <a
                href={item.href}
                onClick={() => setActive(item.name)}
                className={`font-medium transition duration-300 ${
                  active === item.name
                    ? "text-blue-600"
                    : "text-gray-700 group-hover:text-blue-600"
                }`}
              >
                {item.name}
              </a>

              {/* Underline animation */}
              <span
                className={`absolute left-0 -bottom-2 h-[2px] bg-blue-600 transition-all duration-300 ${
                  active === item.name
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-300 ${
          open ? "max-h-96 py-6" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => {
                  setActive(item.name);
                  setOpen(false);
                }}
                className={`font-medium text-lg ${
                  active === item.name
                    ? "text-blue-600"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;