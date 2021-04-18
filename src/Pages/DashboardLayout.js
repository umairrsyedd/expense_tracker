import React from "react";
import "antd/dist/antd.css";
import Dashboard from "../Components/Dashboard";
import { Layout, Menu } from "antd";
import {
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class DashboardLayout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Dashboard
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Expenses">
              <Menu.Item key="2">Create</Menu.Item>
              <Menu.Item key="3">Categories</Menu.Item>
              <Menu.Item key="4">History</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Incomes">
              <Menu.Item key="5">Create</Menu.Item>
              <Menu.Item key="6">Categories</Menu.Item>
              <Menu.Item key="7">History</Menu.Item>
            </SubMenu>
            <Menu.Item key="8" icon={<FileOutlined />}>
              User
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Dashboard />
          <Footer style={{ textAlign: "center" }}>
            Designed By Syed Abdul Wahid
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
