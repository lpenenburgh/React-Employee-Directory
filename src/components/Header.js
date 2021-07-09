import React from "react";
import logo from "../images/directoryLogo.png"
import "../styles/header.css"

function Header() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid" id="header">
                <div className="container">
                    <img src={logo} id="logo" alt="employee directory" />
                    <p className="lead">Click on the arrows to filter by heading or use the search box to narrow your results</p>
                </div>
            </div>
        </div>
    );
}

export default Header;
