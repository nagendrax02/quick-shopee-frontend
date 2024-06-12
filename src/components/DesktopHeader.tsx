import React, { RefObject, useRef } from "react";
import "./DesktopHeader.css";
import { MdLocationOn } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { FaCaretDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function DesktopHeader() {
  let languageOptionDiv = useRef(null);
  let signinSectionDiv = useRef(null);

  const handleMouseEnter = (element: RefObject<HTMLDivElement>): void => {
    if (element.current) {
      console.log("element class-->", element.current.className);
      console.log("style", element.current.style);
      element.current.style.display = "flex";
    }
  };

  const handleMouseOut = (element: RefObject<HTMLDivElement>): void => {
    if (element.current) {
      console.log("element class-->", element.current.className);
      console.log("style", element.current.style);
      element.current.style.display = "none";
    }
  };

  return (
    <>
      <header className="desktop-header">
        <div className="row-1">
          <span>Logo</span>
          <div className="address-main-div">
            <div>
              <span>
                <MdLocationOn size={40} />
              </span>
            </div>
            <div className="address-childrens">
              <span>Delivering to Bengaluru</span>
              <span>Update location</span>
            </div>
          </div>
          <div className="input-box-parent">
            <input className="search-box" />
            <FaSearch size={40} className="search-icon" />
          </div>
          <div
            onMouseOver={() => {
              handleMouseEnter(languageOptionDiv);
            }}
            onMouseOut={(e) => {
              handleMouseOut(languageOptionDiv);
            }}
            className="language-div"
          >
            <GrLanguage size={30} /> EN <FaCaretDown />
            <div ref={languageOptionDiv} className="language-card">
              <div className="lan-label-input">
                <label>
                  English <input type="radio" />
                </label>
              </div>
              <div className="lan-label-input">
                <label>
                  Hindi
                  <input type="radio" />
                </label>
              </div>
            </div>
          </div>
          <div
            onMouseOver={() => {
              handleMouseEnter(signinSectionDiv);
            }}
            onMouseOut={(e) => {
              handleMouseOut(signinSectionDiv);
            }}
            className="sign-in-main-div"
          >
            Sign in
            <div ref={signinSectionDiv} className="sign-in-card">
              <button>Sign in</button>
              <div>
                <span> New customer?</span>
                <a> starts here</a>
              </div>
            </div>
          </div>
          <div>Return and order</div>
          <div>Cart</div>
        </div>
        <div className="row-2"></div>
      </header>
    </>
  );
}

export default DesktopHeader;
