import React from "react";
import { Row, Col } from "antd";
import DashboardBalance from "./Balance";
import DashboardExpenseByCategory from "./ExpenseByCategory";
import DashboardIncomeByCategory from "./IncomeByCategory";
import DashboardTransactionDetails from "./TransactionDetails";
import { UserContext } from "../Auth/UserContext";
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }
  static contextType = UserContext;
  render() {
    return (
      <>
        <Row>
          <Col span={20} offset={2}>
            <DashboardBalance />
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={2}>
            <DashboardExpenseByCategory />
          </Col>
          <Col span={8}>
            <DashboardIncomeByCategory />
          </Col>
        </Row>
        <Row>
          <Col span={20} offset={2}>
            <DashboardTransactionDetails />
          </Col>
        </Row>
        <h2>{this.context} </h2>
      </>
    );
  }
}
