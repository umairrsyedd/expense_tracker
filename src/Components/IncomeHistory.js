import React, { Component } from "react";

export default class IncomeHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoadedIncome: false,
      Income: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:6500/Income?ID=607bbb07e1ebb63a3033af15")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ Income: data, LoadedIncome: true });
      });
  }
  render() {
    const allIncomes = this.state.Income;
    return (
      <ul>
        {allIncomes.map((value, index) => {
          return (
            <li>
              {value.Category}:{value.Name}:{value.Amount}:{value.Amount}
            </li>
          );
        })}
      </ul>
    );
  }
}
