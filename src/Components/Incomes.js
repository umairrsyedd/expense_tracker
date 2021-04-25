import React from "react";
import { Layout } from "antd";
import { Skeleton, Switch, Card } from "antd";
const { Content } = Layout;
const { Meta } = Card;

export default class Incomes extends React.Component {
  state = {
    loading: true,
  };

  onChange = (checked) => {
    this.setState({ loading: !checked });
  };

  render() {
    const { loading } = this.state;

    return (
      <>
        <Content style={{ margin: "0 16px", display: "flex" }}>
          <Switch checked={!loading} onChange={this.onChange} />
          <Card
            style={{ width: 450, marginTop: 16, height: 250 }}
            loading={loading}
          >
            <Skeleton loading={loading} avatar active>
              <Meta title="Income By Category" description="Last 5 Expenses" />
            </Skeleton>
          </Card>
        </Content>
      </>
    );
  }
}
