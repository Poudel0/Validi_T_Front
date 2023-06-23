import React from "react";
import "./Navbar.css";
import { ImHome } from "react-icons/im";
import { BsPersonRolodex } from "react-icons/bs";
import { RiUserSettingsFill } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#Profile"
        onClick={() => setActiveNav("#Profile")}
        className={activeNav === "#Profile" ? "active" : ""}
      >
        <BsPersonRolodex />{" "}
      </a>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <ImHome />
      </a>
      <a
        href="#Settings"
        onClick={() => setActiveNav("#Settings")}
        className={activeNav === "#Settings" ? "active" : ""}
      >
        <RiUserSettingsFill />
      </a>
    </nav>
  );
};
export default Navbar;
