import React from "react";
import Avatar from "@mui/material/Avatar";
import Hammenu from "./card/Hammenu";
import { FaBars } from "react-icons/fa";
import "./Nav.css";
const Nav = () => {
  return (
    <nav>
      <div className="nav_main">
        <img className="nav_img" src="/images/logo.png" alt="logo"></img>
        <div className="ham_icon">
          <a href="/" onclick="myFunction()">
            <FaBars />
          </a>
        </div>
        <ul className="nav_ul">
          <li>
            <a href="#home" class="active">
              Home
            </a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>

        <Avatar
          alt="avatar"
          src="/images/avtar.png"
          sx={{ width: 56, height: 56, margin: "20px" }}
        />
      </div>
      <Hammenu className="hammenu" />
    </nav>
  );
};

export default Nav;
