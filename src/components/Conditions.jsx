export default function Conditions() {
  const getCondition = () => {
    return Math.round(Math.random() * 10) % 2 === 0;
  };

  // 条件で表示を変えることができる。
  return <div>{getCondition() ? "Odd" : "Even"}</div>;
}
