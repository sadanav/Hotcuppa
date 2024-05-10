import React from "react";
import logo from "./assets/images/image.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg d-flex justify-content-between">
        <a className="navbar-brand" href="#">
          <img src={logo} width="100" height="60" alt="" />
        </a>

        <div className="">
          <ul className="navbar-nav mr-auto gap-5">
            <Link to="/">Home</Link>
            <Link to="/list">List</Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
