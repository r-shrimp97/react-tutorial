export default function Fragment() {
  // ルートの要素がdiv一つだけなのでOK
  //   return (
  //     <div>
  //       <p>Hello World!</p>
  //     </div>
  //   );

  // ルートの要素がdiv二つなのでNG
  // NG
  //   return (
  //     <div>
  //       <p>Hello World!1</p>
  //     </div>
  //     <div>
  //       <p>Hello World!2</p>
  //     </div>
  //   );

  // ルートの要素がフラグメントだけなのでOK
  return (
    <>
      <div>
        <p>Hello World!1</p>
      </div>
      <div>
        <p>Hello World!2</p>
      </div>
    </>
  );
}
