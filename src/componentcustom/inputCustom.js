import { Form, Input } from "antd";
import React from "react";

export const InputCustom = ({ label, name, rules, type = "text" }) => {
  return (
    <Form.Item name={name} label={label} rules={rules}>
      <Input type={type} />
    </Form.Item>
  );
};
