import { Select } from "antd";

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

export default function DashboardFormSelect() {
  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select Category"
      optionFilterProp="children"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value="Food">Food</Option>
      <Option value="Travel">Travel</Option>
      <Option value="Stay">Stay</Option>
    </Select>
  );
}
