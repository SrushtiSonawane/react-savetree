import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const headerStyle = {
    color: "white",
    backgroundColor: "#638889",
    fontFamily: "Sans-Serif",
    justifyContent: "space-between",
    height: "70px",
    marginBottom: "40px",
    paddingTop: "10px",
  };

  const linkStyle = {
    marginLeft: "10px",
    fontStyle: "italic",
    paddingLeft: "45px",
    marginTop: "30px",
    color: "white",
    textDecoration: "none", 
  };

  return (
    <header style={headerStyle}>
      <nav style={headerStyle}>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/aboutUs">About Us</Link>
        <Link style={linkStyle} to="/contactUs">Contact Us</Link>
      </nav>
    </header>
  );
}

export default Header;

