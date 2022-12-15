import React, { useState } from "react";
import "./Header.css";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <header>
      <div className="container">
        <div className="header__container">
          <Link to="/" className="logo">
            <LocalLibraryIcon />
            <span>Kider</span>
          </Link>

          <div className={toggle ? "header__toggle" : "header__navbar"}>
            <div className="header__links">
              <Link to="/">Home</Link>
              <Link to="/facility">About Us</Link>
              <Link to="/class">Classes</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>

          <Button onClick={() => setToggle(!toggle)}>
            {toggle ? <CloseIcon /> : <MenuIcon />}
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
