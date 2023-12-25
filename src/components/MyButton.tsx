import { useEffect } from "react";
export default function MyButton() {
  useEffect(() => {
    console.log("渲染了一次");
  }, []);
  const handleClick = () => {
    console.log("click");
  };
  return <button onClick={handleClick}>{"I'm a button"}</button>;
}
