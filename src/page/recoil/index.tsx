import { useRecoilState, useRecoilValue } from "recoil";
import { textAtom } from "@/recoil/atom";
import { charCountState } from "@/recoil/selector";

function TextInput() {
  const [text, setText] = useRecoilState(textAtom);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

const CharacterCounter = () => {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
};

export default CharacterCounter;
