import { atom } from "recoil";

const createAtom = (key: string, defaultValue = "") => {
  return atom({
    key: key,
    default: defaultValue,
  });
};
export const textAtom = createAtom("textState");
