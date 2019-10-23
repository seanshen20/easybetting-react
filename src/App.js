import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/navbar";
import Table from "./components/table";
import ErrorPage from "./components/common/ErrorPage";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        
        <div className="content">
          <Switch>
            <Route path="/" exact component={Table}/>
            <Route path="/error" component={ErrorPage} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
