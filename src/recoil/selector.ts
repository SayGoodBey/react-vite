import { selector } from "recoil";
import { textAtom } from "./atom";

export const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textAtom);
    return text.length;
  },
});
