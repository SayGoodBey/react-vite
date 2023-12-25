import { Table, Button } from "antd";

const Setting = () => {
  const columns = [
    {
      title: "规则名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "规则内容",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "审核",
      key: "operation",
      fixed: "right",
      width: 200,
      render: () => (
        <div style={{ display: "flex", gap: "10px" }}>
          <Button type="primary">编辑</Button>
          <Button type="primary" danger>
            删除
          </Button>
        </div>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "存储180天",
      content: "审计日志存储时长：180天",
      status: "开启",
    },
  ];
  return (
    <div style={{ padding: "30px" }}>
      <h3>审计日志设置</h3>
      <Button type="primary" style={{ margin: "20px auto" }}>
        添加规则
      </Button>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default Setting;
