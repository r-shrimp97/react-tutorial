const items = ["item1", "item2", "item3", "item4"];

export default function List() {
  return (
    <ul style={{ listStyle: "none" }}>
      {/* ループ処理で配列の値を表示させることができる。 */}
      {items.map((value, index) => (
        <li key={index}>{`${index} : ${value}`}</li>
      ))}
    </ul>
  );
}
