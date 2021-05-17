import React from "react";
import "../styles/searchForm.css"

function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                <input
                    onChange={props.searchByName}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search for an Employee"
                    id="search"
                />

            </div>
        </form>
    );
}

export default SearchForm;
