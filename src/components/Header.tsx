import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { SideNavBarContext } from "./Layout";

const menuItems = [
  { title: "Home", key: "/" },
  { title: "Projects", key: "/projects" },
  { title: "Courses", key: "/courses" },
  { title: "Contact", key: "/contact" },
];

const Header = () => {
  const { setAction } = useContext(SideNavBarContext);

  return (
    <div>
      <div className="flex text-white justify-between font-mont bg-theme p-2 shadow-lg items-center md:flex-col">
        <div className="flex justify-between w-full items-center">
          <span className="font-semibold text-2xl">M A R</span>
          <FaBars
            onClick={() => setAction!()}
            className="hidden md:block cursor-pointer"
          />
        </div>

        <div className="list-none flex flex-row  md:hidden">
          {menuItems.map((m) => (
            <li key={m.key} className="mx-5">
              <Link to={m.key}>{m.title}</Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
