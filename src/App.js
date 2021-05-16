import React from "react";
import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable"; 
import SearchForm from "./components/SearchForm"; 
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <SearchForm />
    </div>
  )
}

export default App;