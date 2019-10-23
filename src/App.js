import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/navbar";
import Table from "./components/table";
import ErrorPage from "./components/common/ErrorPage";
import Sports from "./components/sports";
import LiveBetting from "./components/liveBetting";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        
        <div className="content">
          <Switch>
            <Route path="/" exact component={Table}/>
            <Route path="/sports" exact component={Sports}/>
            <Route path="/liveBetting" exact component={LiveBetting}/>
            <Route path="/error" component={ErrorPage} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
