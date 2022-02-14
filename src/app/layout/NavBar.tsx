import React, { useState } from "react";
import { VscAzure } from "react-icons/vsc";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { IKeyValue } from "../interfaces/IHelper";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  let itemArray: string[] = ["Coding", "React", "DevOps", "Azure", "Redis"];
  let menuArray: IKeyValue[] = [
    { key: "Projects", value: "/projects" },
    { key: "Users", value: "/users" },
    { key: "Create Project", value: "/createProject" },
  ];

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
                {menuArray.map((s) => (
                  <li
                    key={s.key}
                    className="sm:my-0 my-1 sm:px-3 text-sm hover:text-base hover:bg-cyan-500"
                  >
                    <NavLink to={s.value}>{s.key}</NavLink>
                  </li>
                ))}
              </ul>
            }
          </div>
          {menu && (
            <div className="w-full sm:hidden bg-blue-50">
              <ul className="flex flex-col  sm:flex-row">
                {menuArray.map((s) => (
                  <li
                    key={s.key}
                    className="sm:my-0 my-1 sm:px-3 hover:bg-slate-500 sm:hover:bg-white"
                  >
                    <NavLink to={s.value}>{s.key}</NavLink>
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
