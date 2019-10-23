import React, { Component } from "react";
import styles from "./table.module.css";
import axios from "axios";

export default class Table extends Component {
  state = {
    activeButton: "All",
    data: [],
    sortedData: [],
    initialDataError: false
  };

  pictureMap = {
    Trots: "./horse1.PNG",
    Greyhounds: "./horse2.PNG",
    Thoroughbred: "./horse3.PNG"
  };

  // use promise catch error, should build up a errorHandler hoc, unmount do something.
  // out of the scope of this task
  // token bar or redirect to error page
  componentDidMount() {
    axios
      .get(
        "https://s3-ap-southeast-2.amazonaws.com/bet-easy-code-challenge/next-to-jump"
      )
      .then(response => {
        this.setState({
          data: response.data.result,
          sortedData: response.data.result
        });
      })
      .catch(error => {
        this.setState({ initialDataError: true });
        this.props.history.push("/error");
        console.log(error);
      });
  }

  filter = name => {
    if (name === "All") {
      const sortedData = [...this.state.data];
      this.setState({ sortedData });
      return;
    }
    let sortedData = this.state.sortedData.filter(
      item => item.EventTypeDesc !== name
    );
    this.setState({ sortedData });
  };
  clickHandler = name => {
    console.log(name);
    this.filter(name);
    const activeButton = name;
    this.setState({ activeButton });
  };

  render() {
    const table = "table " + styles.table;

    return (
      <div className="container ml-4">
        <table className={table}>
          <thead>
            <tr className={styles.thead}>
              <th colSpan="4">Next to Jump</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <button
                  onClick={() => this.clickHandler("All")}
                  className={
                    this.state.activeButton === "All"
                      ? styles.button_active
                      : styles.button
                  }
                >
                  All
                </button>
              </th>
              <th>
                <button
                  onClick={() => this.clickHandler("Trots")}
                  className={
                    this.state.activeButton === "Trots"
                      ? styles.button_active
                      : styles.button
                  }
                >
                  <i>
                    <img src="./horse1.PNG" alt="" />
                  </i>
                </button>
              </th>
              <th>
                <button
                  onClick={() => this.clickHandler("Greyhounds")}
                  className={
                    this.state.activeButton === "Greyhounds"
                      ? styles.button_active
                      : styles.button
                  }
                >
                  <i>
                    <img src="./horse2.PNG" alt="" />
                  </i>
                </button>
              </th>
              <th>
                <button
                  onClick={() => this.clickHandler("Thoroughbred")}
                  className={
                    this.state.activeButton === "Thoroughbred"
                      ? styles.button_active
                      : styles.button
                  }
                >
                  <i>
                    <img src="./horse3.PNG" alt="" />
                  </i>
                </button>
              </th>
            </tr>

            {this.state.sortedData.map(r => {
              //temp = {this.pictureMap[{r.EventTypeDesc}]}
              var value = this.pictureMap[r.EventTypeDesc];
              return (
                <tr key={r.EventID}>
                  <td>
                    <img src={value} alt="" />
                  </td>
                  <td colSpan="2" styles={{ fontSize: "5px" }}>
                    <div>{r.Venue.Venue}</div>
                    <div>{r.EventName}</div>
                  </td>
                  <td>
                    <div>{r.AdvertisedStartTime}</div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
