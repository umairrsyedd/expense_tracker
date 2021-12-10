import React, { Component } from "react";
import { Card } from "antd";

export default class DashboardExpenseByCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Loaded: false,
      RecentExpenses: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:6500/Expense/Recent?ID=607bbb07e1ebb63a3033af15")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ RecentExpenses: data, Loaded: true });
      });
  }
  render() {
    const Expenses = this.state.RecentExpenses;
    return (
      <div className="site-card-border-less-wrapper">
        <Card
          title="Expense By Category"
          bordered={false}
          style={{ width: 300, height: 300 }}
          hoverable="true"
        >
          <ul>
            {Expenses.map((value, index) => {
              return (
                <li key={value._id}>
                  {value.Category}:{value.Name}:{value.Amount}
                </li>
              );
            })}
          </ul>
        </Card>
      </div>
    );
  }
}
