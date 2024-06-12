import React from "react";
import "./MobileHeader.css";
import { FaBars } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";


function MobileHeader() {
  return (
    <header className="mob-header">
      <div className="mob-row-1">
        <div className="mob-row-1-row-1">
          <div className="left-items">
            {" "}
            <FaBars size={30} className="bar-icon" />{" "}
            <b className="logo-text">Quick Shop-E</b>
          </div>
          <div className="right-items"> 
          <div className="sign-in-div">
            <span>Sign in </span>
            <FaRegUserCircle size={30}/>
          </div>
          <BsCart size={30}/>
           </div>
        </div>
        <div className="mob-row-1-row-2">
            <input placeholder="Search Quick Shop-E" className="search-input"/>
            <FaSearch className="search-icon-mobile" size={30}/>
        </div>
      </div>
      <div className="mob-row-2">
        <span>Deliver to India</span>
      </div>
    </header>
  );
}

export default MobileHeader;
