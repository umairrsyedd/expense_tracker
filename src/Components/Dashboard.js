import React from "react";
import { Row, Col } from "antd";
import DashboardBalance from "./Balance";
import DashboardExpenseByCategory from "./ExpenseByCategory";
import DashboardIncomeByCategory from "./IncomeByCategory";
import DashboardTransactionDetails from "./TransactionDetails";
export default class Dashboard extends React.Component {
  state = {};

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
      </>
    );
  }
}
