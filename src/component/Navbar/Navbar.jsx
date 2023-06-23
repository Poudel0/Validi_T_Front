import React from "react";
import "./Navbar.css";
import { ImHome } from "react-icons/im";
import { BsPersonRolodex } from "react-icons/bs";
import { RiUserSettingsFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav>
      <a href="#">
        <ImHome />
      </a>
      <a href="#Profile">
        <BsPersonRolodex />{" "}
      </a>
      <a href="#Settings">
        <RiUserSettingsFill />
      </a>
    </nav>
  );
};
export default Navbar;
