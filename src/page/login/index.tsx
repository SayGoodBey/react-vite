import { Button, Form, Input, Alert } from "antd";

import "./index.scss";
const Login = () => {
  return (
    <div className="login">
      <Alert
        className="alert"
        message="连续登录失败5次，请30分钟后再试"
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
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: "请输入用户名",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: "请输入密码",
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
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
