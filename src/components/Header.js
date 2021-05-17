import React from "react";
import "../styles/header.css"

function Header() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid" id="header">
                <div className="container">
                    <h1 className="display-4">Employee Directory</h1>
                    <p className="lead">Click on the carrots to filter by heading or use the search box to narrow your results</p>
                </div>
            </div>
        </div>
    );
}

export default Header;
