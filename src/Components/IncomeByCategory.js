import React, { Component } from "react";
import { Card } from "antd";

export default class DashboardIncomeByCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Loaded: false,
      RecentIncomes: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:6500/Income/Recent?ID=607bbb07e1ebb63a3033af15")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ RecentIncomes: data, Loaded: true });
      });
  }
  render() {
    const Incomes = this.state.RecentIncomes;
    return (
      <div className="site-card-border-less-wrapper">
        <Card
          title="Income By Category"
          bordered={false}
          style={{ width: 300, height: 300 }}
          hoverable="true"
        >
          <ul>
            {Incomes.map((value, index) => {
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
