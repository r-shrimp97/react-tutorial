// コンポーネントは親コンポーネントからpropsを受け取ることができる。
// propsはオブジェクトの形式で渡されるので{}(中括弧)で囲って名前を指定する。
function Button({ label = "button", onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

// propsにはHTMLや他のコンポーネントを受け取ることもできる
function Card({ children }) {
  return <div>{children}</div>;
}

export default function Props() {
  return (
    <div>
      <Button label={"button1"} onClick={() => alert("Clicked!")} />
      <Button label={"button2"} />
      <Button />
      <Card>
        <p>This is child</p>
      </Card>
      <Card>
        <Button label={"child button"} />
      </Card>
    </div>
  );
}
