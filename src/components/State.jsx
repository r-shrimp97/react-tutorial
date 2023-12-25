import { useState } from "react";

export default function State() {
  let variable = "This is a variable";
  // useStateは引数として初期値を受け取る。
  const [state, setState] = useState("This is a state");
  const [input, setInput] = useState("");

  const changeValue = () => {
    variable = "changed!";
    setState("changed!");
  };

  return (
    <div>
      {/* 値を変更しても画面の表示は変わらない */}
      <p>{variable}</p>
      {/* 値を変更すると画面の表示が変わる */}
      <p>{state}</p>
      <button onClick={changeValue}>Click</button>
      <form style={{ marginTop: 12 }}>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <p>{input}</p>
      </form>
    </div>
  );
}
