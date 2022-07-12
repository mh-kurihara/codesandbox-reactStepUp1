import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

// 処理の重いレンダリングエリアと仮定する
// memoで囲うことでpropsが変更されない限り子コンポーネントを再レンダされないようにする
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("レンダリングされた！");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log(":::");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
