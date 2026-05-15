import React, {
  useEffect,
  useState,
} from "react";
import logo from "../../assets/logo1.png";
import {
  Menu,
  X,
} from "lucide-react";

function Navbar() {

  const [isScrolled, setIsScrolled] =
    useState(false);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  const links = [
    "Home",
    "Services",
    "Portfolio",
    "Pricing",
    "Contact",
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >

      <div className="w-full px-10 lg:px-16 py-5 flex items-center">

        {/* LOGO */}

        <a
  href="#"
  className="flex items-center gap-3"
>

          <img
  src={logo}
  alt="NeemuchStudio Logo"
  className="w-14 h-14 object-contain"
/>

          <h1 className="text-2xl font-black tracking-tight text-white">

            NEEMUCH

            <span className="text-blue-500">
              STUDIO
            </span>

          </h1>

        </a>

        {/* DESKTOP MENU */}

        <nav className="hidden md:flex items-center gap-10 ml-auto mr-10">

          {links.map((link) => (

            <a
              key={link}
              href={link === "Home" ? "#" : `#${link.toLowerCase()}`}
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-bold"
            >

              {link}

            </a>

          ))}

        </nav>

        {/* CTA */}

        <a
  href="#contact"
  className="hidden md:flex px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold hover:scale-105 transition-all duration-300"
>

  Get Website

</a>

        {/* MOBILE BUTTON */}

        <button
          className="md:hidden text-white"
          onClick={() =>
            setMobileOpen(!mobileOpen)
          }
        >

          {mobileOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}

        </button>

      </div>

      {/* MOBILE MENU */}

      {mobileOpen && (

        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-8">

          <div className="flex flex-col gap-6">

            {links.map((link) => (

              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() =>
                  setMobileOpen(false)
                }
                className="text-white text-lg font-bold"
              >

                {link}

              </a>

            ))}

            <button className="mt-4 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold">

              Get Website

            </button>

          </div>

        </div>

      )}

    </header>
  );
}

export default Navbar;