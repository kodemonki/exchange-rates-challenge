import React from "react";

export default class Currency extends React.Component {
  render() {
    let str = window.location.href;
    let currency = str.substr(str.lastIndexOf("/") + 1);

    return (
      <div className="About">
        <h1>Currency</h1>
        <h2>{currency}</h2>
        <p>Todo : load the historic data and put into charting tool</p>
      </div>
    );
  }
}
