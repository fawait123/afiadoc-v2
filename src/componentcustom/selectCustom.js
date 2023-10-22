import { Form, Select } from "antd";
import React from "react";

export const SelectCustom = ({ label, name, rules, options }) => {
  return (
    <Form.Item name={name} label={label} rules={rules}>
      <Select options={options} />
    </Form.Item>
  );
};
