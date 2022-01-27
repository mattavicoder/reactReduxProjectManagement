import React, { useState } from "react";
import { VscAzure } from "react-icons/vsc";
import { HiMenu, HiOutlineX } from "react-icons/hi";

const NavBar = () => {
  let itemArray: string[] = ["Coding", "React", "DevOps", "Azure", "Redis"];

  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-400 to-cyan-500">
        <div className="flex sm:justify-between items-start py-3 mx-auto flex-wrap">
          <a href="#" className="flex items-baseline mx-2">
            <VscAzure />
            <label htmlFor="" className="font-bold mx-4">
              Activities
            </label>
          </a>

          <div className="hidden w-full sm:block sm:w-auto">
            {
              <ul className="flex flex-col  sm:flex-row">
                {itemArray.map((s) => (
                  <li
                    key={s}
                    className="sm:my-0 my-1 sm:px-3 hover:bg-slate-500 sm:hover:bg-white"
                  >
                    <a href="#">{s}</a>
                  </li>
                ))}
              </ul>
            }
          </div>
          {menu && (
            <div className="w-full sm:hidden bg-blue-50">
              <ul className="flex flex-col  sm:flex-row">
                {itemArray.map((s) => (
                  <li
                    key={s}
                    className="sm:my-0 my-1 sm:px-3 hover:bg-slate-500 sm:hover:bg-white"
                  >
                    <a href="#">{s}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* HiOutlineX */}
          <div className="sm:hidden absolute right-2">
            <button onClick={() => setMenu(!menu)}>
              {!menu && <HiMenu name="open" />}
              {menu && <HiOutlineX name="open" />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
