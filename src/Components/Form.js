import React, { useEffect } from "react";
import { Form, Button, InputNumber, Select } from "antd";
import DashboardFormSelect from "./FormSelect";
export default function DashboardForm() {
  const [form] = Form.useForm();
  const { Option } = Select;
  useEffect(() => {});

  const onFinish = (values) => {
    console.log("Finish:", values);
  };
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Form
      form={form}
      name="horizontal_login"
      layout="inline"
      onFinish={onFinish}
    >
      <Form.Item
        label="Create"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Select
          defaultValue="Expense"
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value="Income">Income</Option>
          <Option value="Expense">Expense</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Category"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <DashboardFormSelect />
      </Form.Item>
      <Form.Item label="Amount">
        <InputNumber />
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }
          >
            Save
          </Button>
        )}
      </Form.Item>
    </Form>
  );
}
