import { Table, Button } from "antd";
import "./index.scss";
import { list } from "./data";
console.log("list---", list);
const Log = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "用户",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "时间",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "事件",
      dataIndex: "event",
      key: "event",
    },
    {
      title: "审核",
      key: "operation",
      fixed: "right",
      width: 200,
      render: () => (
        <div style={{ display: "flex", gap: "10px" }}>
          <Button type="primary">允许</Button>
          <Button type="primary" danger>
            审核
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="log-container">
      <h3 style={{ marginBottom: "20px" }}>审计日志</h3>
      <Table dataSource={list} columns={columns} />
    </div>
  );
};

export default Log;
