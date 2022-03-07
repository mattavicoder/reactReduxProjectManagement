import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SideNavBarContext } from "./Layout";
import { AiOutlineClose } from "react-icons/ai";

const SideBar = () => {
  const menuItems = [
    { title: "Home", key: "/" },
    { title: "Projects", key: "/projects" },
    { title: "Courses", key: "/courses" },
    { title: "Contact", key: "/contact" },
  ];
  const { setAction } = useContext(SideNavBarContext);

  return (
    <div>
      <div className="flex flex-col pt-5 text-left w-full min-h-fit list-none text-white font-mont">
        <AiOutlineClose
          className="cursor-pointer self-end mr-8"
          onClick={() => setAction!()}
        />
        {menuItems.map((m) => (
          <li key={m.key} className="mx-5">
            <Link to={m.key}>{m.title}</Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
