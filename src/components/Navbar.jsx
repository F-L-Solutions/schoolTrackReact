import { useState } from "react";
import logo from "../assets/images/logo-bile.png";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-darkGreen border-b border-emerald-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <a className="flex flex-shrink-0 items-center mr-4" href="/">
              <img className="h-10 w-auto" src={logo} alt="V Mechu" />
              <span className="hidden md:block text-vanilla text-2xl font-bold ml-2">
                V Mechu a kapradí
              </span>
            </a>
            <div className="md:ml-auto">
              <div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                className="flex space-x-2"
              >
                <FaUserCircle className="text-vanilla text-5xl " />
                {open && (
                  <div className="absolute top-20 bg-yellowGreen text-vanilla">
                    {/* placeholder div to be able to go with the mouse to the menu without it closing down */}
                    <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                    <div className="w-64 p-6 shadow-xl">
                      <div className="mb-3 space-y-3">
                        <a href="/dochazka" className="block hover:underline">
                          Docházka
                        </a>
                        <a href="/nahrady" className="block hover:underline">
                          Náhrady
                        </a>
                        <a
                          href="/hlidane-lekce"
                          className="block hover:underline"
                        >
                          Hlídané lekce
                        </a>
                        <a href="/muj-ucet" className="block hover:underline">
                          Můj účet
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
