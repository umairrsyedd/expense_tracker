import React, { Component } from "react";

export default class ExpenseHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoadedExpenses: false,
      Expenses: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:6500/Expense?ID=607bbb07e1ebb63a3033af15")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ Expenses: data, LoadedExpenses: true });
      });
  }

  render() {
    const allExpenses = this.state.Expenses;
    return (
      <ul>
        {allExpenses.map((value, index) => {
          return (
            <li>
              {value.Category} : {value.Name} : {value.Amount} : {value.Note}
            </li>
          );
        })}
      </ul>
    );
  }
}
