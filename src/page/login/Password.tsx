import { Button, Form, Input, Alert } from "antd";

import "./index.scss";
const Password = () => {
  return (
    <div className="login">
      <Alert
        className="alert"
        message="口令长度至少8位，包含数字、字母、特殊字符!"
        type="error"
        showIcon
      />
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
      >
        <Form.Item
          label="新密码"
          name="password"
          rules={[
            {
              required: true,
              message: "请输入新密码",
            },
          ]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item
          label="密码"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "请确认新密码",
            },
            () => ({
              validator(_, value, callback) {
                console.log("value---", value);
                if (!value || value.length >= 8) {
                  return Promise.resolve();
                }
                console.log(222);
                if (value) {
                  return Promise.reject(
                    new Error("口令长度至少8位，包含数字、字母、特殊字符!")
                  );
                }
              },
            }),
          ]}
        >
          <Input type="password" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Password;
