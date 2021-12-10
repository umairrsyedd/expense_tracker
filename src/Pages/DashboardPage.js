import React from "react";
import Dashboard from "../Components/Dashboard";
import CreateExpense from "../Components/CreateExpense";
import ExpenseCategory from "../Components/ExpenseCategory";
import ExpenseHistory from "../Components/ExpenseHistory";
import CreateIncome from "../Components/CreateIncome";
import IncomeCategory from "../Components/IncomeCategory";
import IncomeHistory from "../Components/IncomeHistory";
import ViewTransactions from "../Components/ViewTransactions";
import LogOut from "../Components/LogOut";
import Logo from "../Assets/Inspensio_Logo_Smaller.png";
import { Layout, Menu } from "antd";
import {
  PieChartOutlined,
  RiseOutlined,
  FallOutlined,
  LineChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { UserContext } from "../Auth/UserContext";
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
    this.showComponent = this.showComponent.bind(this);
  }
  static contextType = UserContext; //assign context to component
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };
  showComponent(component) {
    this.setState({ componentToBeShown: component });
  }

  render() {
    const { collapsed, componentToBeShown } = this.state;
    let Component;
    switch (componentToBeShown) {
      case "Dashboard":
        Component = <Dashboard />;
        break;
      case "CreateExpense":
        Component = <CreateExpense />;
        break;
      case "ExpenseCategory":
        Component = <ExpenseCategory />;
        break;
      case "ExpenseHistory":
        Component = <ExpenseHistory />;
        break;
      case "CreateIncome":
        Component = <CreateIncome />;
        break;
      case "IncomeCategory":
        Component = <IncomeCategory />;
        break;
      case "IncomeHistory":
        Component = <IncomeHistory />;
        break;
      case "ViewTransactions":
        Component = <ViewTransactions />;
        break;
      default:
        <h2> Wrong Component Requested </h2>;
    }
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <img src={Logo} alt="INPENSIO" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item
              key="1"
              icon={<PieChartOutlined />}
              onClick={() => {
                this.showComponent("Dashboard");
              }}
            >
              Dashboard
            </Menu.Item>
            <SubMenu key="sub1" icon={<FallOutlined />} title="Expenses">
              <Menu.Item
                key="2"
                onClick={() => {
                  this.showComponent("CreateExpense");
                }}
              >
                Create Expense
              </Menu.Item>
              <Menu.Item
                key="3"
                onClick={() => {
                  this.showComponent("ExpenseCategory");
                }}
              >
                Show Categories
              </Menu.Item>
              <Menu.Item
                key="4"
                onClick={() => {
                  this.showComponent("ExpenseHistory");
                }}
              >
                View Expense History
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<RiseOutlined />} title="Incomes">
              <Menu.Item
                key="5"
                onClick={() => {
                  this.showComponent("CreateIncome");
                }}
              >
                Create Income
              </Menu.Item>
              <Menu.Item
                key="6"
                onClick={() => {
                  this.showComponent("IncomeCategory");
                }}
              >
                Show Categories
              </Menu.Item>
              <Menu.Item
                key="7"
                onClick={() => {
                  this.showComponent("IncomeHistory");
                }}
              >
                View Income History
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title="Transactions"
              icon={<LineChartOutlined />}
            >
              <Menu.Item
                key="8"
                onClick={() => {
                  this.showComponent("ViewTransactions");
                }}
              >
                View All Transactions
              </Menu.Item>
            </SubMenu>
            <Menu.Item
              key="9"
              icon={<UserOutlined />}
              onClick={() => {
                this.showComponent("Dashboard");
              }}
            >
              User
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <LogOut />
          </Header>
          <Content style={{ margin: "0 16px" }}>{Component}</Content>
          <Footer style={{ textAlign: "center" }}>{this.props.ID}</Footer>
        </Layout>
      </Layout>
    );
  }
}
