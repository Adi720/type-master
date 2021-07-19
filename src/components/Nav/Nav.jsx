import React from "react";
import "./Nav.css";

import logo from "./../../assets/logo.png"
const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img draggable="false" className="logo" src={logo} alt="logo" />
                <p className="logo-text">
                    TypeMaster
                </p>
            </div>
            <div className="nav-right">
                <a
                    target="_blank"
                    className="nav-link"
                    href="https://github.com/Adi720"
                    rel="noreferrer"
                >
                    ↔
                </a>
            </div>
        </div>
    )
}

export default Nav
