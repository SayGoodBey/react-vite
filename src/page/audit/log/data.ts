import Mock from "mockjs";

import { generateTime } from "./lib";
const eventArr = ["机构版本变更", "班级角色添加", "机构人员添加", "课节编辑"];

const geTime = () => {
  const currentDate = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(currentDate.getMonth() - 1);
  return generateTime(oneMonthAgo, currentDate);
};
const data = Mock.mock({
  "list|100": [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      "key|+1": 1,
      "id|+1": () => Mock.Random.guid(),
      time: () => geTime(),
      name: () => Mock.Random.cname(),
      event: () => eventArr[Math.floor(Math.random() * eventArr.length)],
    },
  ],
});
export const list = data.list.sort(
  (a, b) => new Date(b.time) - new Date(a.time)
);
