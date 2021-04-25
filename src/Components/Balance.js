import React, { Component } from "react";
import { Statistic } from "antd";
export default class DashboardBalance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoadedBalance: false,
      Balance: 0,
    };
  }
  componentDidMount() {
    fetch("http://localhost:6500/Balance?ID=607bbb07e1ebb63a3033af15")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ Balance: data, LoadedBalance: true });
      });
  }

  render() {
    return (
      <>
        <Statistic
          title="Current Balance (INR)"
          value={this.state.Balance}
          precision={2}
        />
      </>
    );
  }
}
