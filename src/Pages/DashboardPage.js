import React from "react";
import Dashboard from "../Components/Dashboard";
import IncomeCategory from "../Components/IncomeCategory";
import ExpenseCategory from "../Components/ExpenseCategory";
import IncomeHistory from "../Components/IncomeHistory";
import ExpenseHistory from "../Components/ExpenseHistory";
import { Layout, Menu } from "antd";
import {
  PieChartOutlined,
  RiseOutlined,
  FallOutlined,
  LineChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";

const { Header, Footer } = Layout;
const { Content, Sider } = Layout;
const { SubMenu } = Menu;

export default class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      componentToBeShown: "Dashboard",
    };
    this.onCollapse = this.onCollapse.bind(this);
    this.showDashboard = this.showDashboard.bind(this);
    this.showExpenseCategory = this.showExpenseCategory.bind(this);
    this.showIncomeCategory = this.showIncomeCategory.bind(this);
    this.showExpenseHistory = this.showExpenseHistory.bind(this);
    this.showIncomeHistory = this.showIncomeHistory.bind(this);
  }
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  showDashboard() {
    this.setState({ componentToBeShown: "Dashboard" });
  }
  showExpenseCategory() {
    this.setState({ componentToBeShown: "ExpenseCategory" });
  }
  showIncomeCategory() {
    this.setState({ componentToBeShown: "IncomeCategory" });
  }
  showExpenseHistory() {
    this.setState({ componentToBeShown: "ExpenseHistory" });
  }
  showIncomeHistory() {
    this.setState({ componentToBeShown: "IncomeHistory" });
  }
  render() {
    const { collapsed, componentToBeShown } = this.state;
    let Component;
    switch (componentToBeShown) {
      case "Dashboard":
        Component = <Dashboard />;
        break;
      case "ExpenseCategory":
        Component = <ExpenseCategory />;
        break;
      case "IncomeCategory":
        Component = <IncomeCategory />;
        break;
      case "ExpenseHistory":
        Component = <ExpenseHistory />;
        break;
      case "IncomeHistory":
        Component = <IncomeHistory />;
        break;
      default:
        <h2> Wrong Component Requested </h2>;
    }
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div
            className="logo"
            style={{ color: "white", padding: "1.5rem", fontSize: "32px" }}
          >
            Inpensio
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item
              key="1"
              icon={<PieChartOutlined />}
              onClick={this.showDashboard}
            >
              Dashboard
            </Menu.Item>
            <SubMenu key="sub1" icon={<FallOutlined />} title="Expenses">
              <Menu.Item key="2" onClick={this.showExpenseCategory}>
                Create Expense
              </Menu.Item>
              <Menu.Item key="2" onClick={this.showExpenseCategory}>
                Show Categories
              </Menu.Item>
              <Menu.Item key="3" onClick={this.showExpenseHistory}>
                View Expense History
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<RiseOutlined />} title="Incomes">
              <Menu.Item key="4" onClick={this.showIncomeCategory}>
                Create Income
              </Menu.Item>
              <Menu.Item key="5" onClick={this.showIncomeCategory}>
                Show Categories
              </Menu.Item>
              <Menu.Item key="5" onClick={this.showIncomeHistory}>
                View Income History
              </Menu.Item>
            </SubMenu>
            <SubMenu key="" title="Transactions" icon={<LineChartOutlined />}>
              <Menu.Item>View All Transactions</Menu.Item>
            </SubMenu>
            <Menu.Item key="6" icon={<UserOutlined />}>
              User
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>{Component}</Content>
          <Footer style={{ textAlign: "center" }}>{this.props.ID}</Footer>
        </Layout>
      </Layout>
    );
  }
}
