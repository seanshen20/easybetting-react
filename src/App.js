import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Table from "./components/table";

class App extends Component {

  render() {
    return (
      <>
        <Navbar />
        <Table />
      </>
      
    );
  }
}

export default App;
