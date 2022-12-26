import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();

    this.state = {};
  }

  handleIncrement = () => {
    this.setState({
        count: this.state.count + 1
    })
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increase</button>
      </div>
    );
  }
}

export default Counter;
