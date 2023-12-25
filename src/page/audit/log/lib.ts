// 随机生成时间
export function generateTime(start, end) {
  // 开始时间
  const s = new Date(start);
  const e = new Date(end);

  if (Number.isNaN(s.getTime())) {
    throw new Error(
      "传入的开始时间格式不对，请参照 2020-12-20, 或者 2020-12-20 10:22:01"
    );
  }

  if (Number.isNaN(s.getTime())) {
    throw new Error(
      "传入的结束时间格式不对，请参照 2020-12-20, 或者 2020-12-20 10:22:01"
    );
  }

  // 中间的间隔
  const distance = e.getTime() - s.getTime();

  if (distance < 0) {
    throw new Error("开始时间小于结束时间");
  }

  let t = new Date(s.getTime() + parseInt(Math.random() * distance));
  // 年-月-日 （月， 日是补齐0的）

  t = t.toLocaleString().replace(/\//g, "-").split(" ");
  const [t1, t2] = t;
  const t3 = t1.split("-");
  console.log("t3---", t3);
  if (t3[t3.length - 1].length < 2) {
    t3[t3.length - 1] = "0" + t3[t3.length - 1];
  }
  return `${t3.join("-")} ${t2}`;
}
