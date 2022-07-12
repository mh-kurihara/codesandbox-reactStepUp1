import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  // アロー関数で記述すると毎回再生成されて子コンポーネントのPropsが変わったと判断される
  // [setOpen]は初期値
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  // 変数も再計算されてステート処理されるのでuseMemoを使って再レンダリングを抑制することがある
  const temp = useMemo(() => 1 + 3, []);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText}></input>
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
