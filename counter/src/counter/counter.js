import React, { Component } from "react";
import "./counter.scss";

//TODO : Rename file to be counterclass 

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
     <div className="counter-header">
        <h1>Let's Count</h1>
      <div className="counter">
        <span>{this.state.count}</span>
        <div className="buttons">
          <button className="inc" onClick={this.increment}>
            +
          </button>
          <button className="dec" onClick={this.decrement}>
            -
          </button>
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
      </div>
    );
  }
}
