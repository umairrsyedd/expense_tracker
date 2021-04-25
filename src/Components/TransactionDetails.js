import React, { Component } from "react";
import { Space, Card } from "antd";

export default class DashboardTransactionDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoadedTransactions: false,
      Transactions: [],
    };
  }
  componentDidMount() {
    fetch(
      "http://localhost:6500/Transactions/recent?ID=607bbb07e1ebb63a3033af15"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ Transactions: data, LoadedTransactions: true });
      });
  }

  render() {
    const data = this.state.Transactions;
    if (this.state.LoadedTransactions === true) {
    }
    return (
      <Space direction="vertical">
        <div className="site-card-border-less-wrapper">
          <Card
            title="Transaction Details"
            bordered={false}
            style={{ width: 600 }}
            hoverable="true"
          >
            <ul>
              {data.map((value, index) => {
                return (
                  <>
                    <li>
                      {value.TransactionName} : {value.TransactionType} :
                      {value.CurrentBalance}
                    </li>
                  </>
                );
              })}
            </ul>
          </Card>
        </div>
      </Space>
    );
  }
}
