import React from "react";
import "../styles/header.css"

function Header() {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid" id="header">
                <div class="container">
                    <h1 class="display-4">Employee Directory</h1>
                    <p class="lead">Click on the carrots to filter by heading or use the search box to narrow your results</p>
                </div>
            </div>
        </div>
    );
}

export default Header;
