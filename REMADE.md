## createElement 创建的组建不能当成组件标签放在jsx里 ,直接输出函数就行
```js
//LikeButton.ts
import React from "react";
export default function LikeButton() {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return "You liked this!";
  }

  return React.createElement(
    "button",
    {
      onClick: () => setLiked(true),
    },
    "Like"
  );
}
//app.ts
function App() {
  console.log("CreateElement", CreateElement());
  return <div className="App">{CreateElement()}</div>;
}
```

## react中html标签必须小写，组件首字母大写


## react jsx return 还不支持返回多个节点，用<></>包裹  （vue3支持多个）

