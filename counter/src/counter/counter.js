import React, { Component } from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
}


increment = () => {
    this.setState({
       count: this.state.count + 1
    });
}

decrement = () => {
    this.setState({
       count: this.state.count - 1
    });
}

reset = () => {
    this.setState({
        count: 0
    })
}



  render() {
      const {increment,decrement,reset} = this.state;
    return (<div className="counter">
     <button className="inc" onClick={increment}>+</button>
     <button className="dec" onClick={decrement}>-</button>
     <button className="reset" onClick={reset}>Reset</button>
    </div>
    )
  }
}
