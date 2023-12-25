import { FC, useEffect } from "react";

function walkPreOrder(node) {
  if (!node) return;

  // do something here
  console.log(node);

  for (const child of node.children) {
    walkPreOrder(child);
  }
}

function* walkPreOrderG(node) {
  if (!node) return;

  // do something here
  yield node;
  for (const child of node.children) {
    yield* walkPreOrderG(child);
  }
}

function locateById(nodeId) {
  // iterate through all nodes in depth first (preOrder) fashion
  // return the node as soon as it's found
  for (const node of walkPreOrderG(document.body)) {
    console.log("node--", node);
    console.log("node.id ===", node.id);
    if (node.getAttribute("id") === nodeId) {
      return node;
    }
  }
  return null;
}
const Tree: FC = () => {
  useEffect(() => {
    locateById("profile");
  }, []);

  return (
    <div id="container">
      <div id="detail">
        <span className="class1">哈哈哈</span>
      </div>
      <span className="class1">什么鬼</span>
      <div>
        <div>
          <div id="profile"></div>
        </div>
      </div>
      <div className="row">啦啦啦啦</div>
    </div>
  );
};
// export default memo(ChildTwo);
export default Tree;
