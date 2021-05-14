import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Table from "./components/Table";
import './App.css';

function App() {
  return (
    <div>
      <Wrapper>
        <Header>
          <Table />
        </Header>
      </Wrapper>
    </div>
  );
}

export default App;
