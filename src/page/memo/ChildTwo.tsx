import { FC, memo } from "react";

const ChildTwo: FC<{ params: Record<string, number> }> = ({ params }) => {
  console.log("ChildTwo------render ");
  return (
    <div style={{ border: "1px solid blue" }}>
      <span>a:{params.a}</span>
      <span>b:{params.b}</span>
    </div>
  );
};
// export default memo(ChildTwo);
export default ChildTwo;
