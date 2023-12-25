import { FC, useState } from "react";
import ChildOne from "./ChildOne";
const TestMemo: FC = () => {
  console.log("index---render");
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return (
    <div style={{ border: "1px solid red" }}>
      <h1>跟组件--- count：{count}</h1>
      <button onClick={handleClick}>click</button>
      <ChildOne />
    </div>
  );
};
export default TestMemo;
