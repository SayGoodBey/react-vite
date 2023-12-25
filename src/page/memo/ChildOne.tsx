import { FC, useState, useMemo } from "react";
import ChildTwo from "./ChildTwo";
const ChildOne: FC = () => {
  console.log("childOne---render");
  //   const [params, setParams] = useState<Record<string, number>>({
  //     a: 1,
  //     b: 2,
  //   });
  const params = useMemo(
    () => ({
      a: 1,
      b: 2,
    }),
    []
  );
  return (
    <div style={{ border: "1px solid yellow" }}>
      <span>childone</span>
      <ChildTwo params={params} />
    </div>
  );
};
export default ChildOne;
