import React from "react";
// import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <nav className="topnav">
      <div>
        {/*className='test'><img className='#logoHenry' alt = 'undefined' src= {Logo} /> */}
        <p className="text"> Weather app </p>
      </div>
      <SearchBar onSearch={onSearch}></SearchBar>
    </nav>
  );
}

export default Nav;
