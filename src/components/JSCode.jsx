export default function JSCode() {
  // functionの中にはJavaScriptのコードが記述できる。
  const text = "This is a variable";

  const getText = () => {
    return "This is a function";
  };

  return (
    <div>
      {/* {}(波括弧)の中にはJavaScriptのコードを記述できる。 */}
      {/* 変数の参照 */}
      <p>{text}</p>
      {/* 関数の実行 */}
      <p>{getText()}</p>
    </div>
  );
}
