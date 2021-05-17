import React, { Component } from "react";
import API from "../utils/API.js";
import SearchForm from "./SearchForm";
import "../styles/table.css"



class Table extends Component {
  state = {
    search: "",
    results: [],
    sortOrder: ""
  };

//users are loaded to the page on initial render
  componentDidMount() {
    API.fetchUsers()
      .then(res => {
        this.setState({ results: res.data.results })
        //console.log(this.state.results)
      }).catch(err => console.log(err))
  }

  //searching an employee name- setting it to lowercase so everything matches
  searchByName = event => {
    if (event.target.name === "search") {
      const searchEmp = event.target.value.toLowerCase();
      this.setState({
        search: searchEmp
      })
    }
  }

 //Sorting users by their first name. Initial render state has no order-- set state updates the sortOrder value
 sortFirstName = () => {
  const sortedEmp = this.state.results.sort((a, b) => {
    if (b.name.first > a.name.first) {
      return -1
    }
    if (a.name.first > b.name.first) {
      return 1
    }
    return 0;
  });

  if (this.state.sortOrder === "decending") {
    sortedEmp.reverse();
    this.setState({ sortOrder: "ascending" });
  } else {
    this.setState({ sortOrder: "decending" });
  }
  this.setState({ results: sortedEmp })
}

 //Sorting users by their last name. Initial render state has no order-- set state updates the sortOrder value
sortLastName = () => {
  const sortedEmp = this.state.results.sort((a, b) => {
    if (b.name.last > a.name.last) {
      return -1
    }
    if (a.name.last > b.name.last) {
      return 1
    }
    return 0;
  });
  if (this.state.sortOrder === "decending") {
    sortedEmp.reverse();
    this.setState({ sortOrder: "ascending" });
  } else {
    this.setState({ sortOrder: "decending" });
  }
  this.setState({ results: sortedEmp })
}

//Render items 
render() {
  return (
    <div>
      <SearchForm searchByName={this.searchByName}
        search={this.state.search} />

      <div className="table-responsive">
      <table className="table table-resposive text-center table-hover">
          <thead>
            <tr>
              <th>Image</th>
              <th>First Name  <button  onClick={this.sortFirstName}>^</button></th>
              <th>Last Name <button  onClick={this.sortLastName}>^</button></th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>

          { //filtering results returned by searching first name
            this.state.results && this.state.results.map(item =>
              item.name.first.toLowerCase().includes(this.state.search) ?
                <tbody key={item.login.uuid}>
                  <tr>
                    <td ><img src={item.picture.thumbnail}  alt="user thumbnail"/></td>
                    <td >{item.name.first}</td>
                    <td >{item.name.last}</td>
                    <td >{item.phone}</td>
                    <td >{item.email}</td>      
                  </tr>
                </tbody>

                :
                //filtering results returned by searching last name
                item.name.last.toLowerCase().includes(this.state.search) ?
                  <tbody key={item.login.uuid}>
                    <tr>
                    <td ><img src={item.picture.thumbnail}  alt="user thumbnail" /></td>
                      <td >{item.name.first}</td>
                      <td >{item.name.last}</td>
                      <td >{item.phone} </td>
                      <td >{item.email}</td> 
                    </tr>
                  </tbody>
                  :
                  null
            )}
        </table>
      </div>
    </div>
  )
}
}
export default Table;