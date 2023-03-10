import React from "react";
import { Link } from "react-router-dom";
import { Cart4 } from "react-bootstrap-icons";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="logo">damitech</h2>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <Cart4 size={32} />
        </Link>
      </div>
    </div>
  );
};
