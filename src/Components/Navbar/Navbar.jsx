import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo-main.svg";
import account from "./account.svg";

const Navbar = ({ username }) => {
  return (
    <nav>
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="account">
        {username ? (
          <span className="signin-link">
            <img src={account} alt="" style={{ marginRight: "10px" }} />
            {username}
          </span>
        ) : (
          <Link to="/signin" className="signin-link">
            <img src={account} alt="" style={{ marginRight: "10px" }} />
            <span>Sign In</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
