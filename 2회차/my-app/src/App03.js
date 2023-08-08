const App = () => {
  const content = "JSX";

  // 주석 여기는 이런식으로 써야함
  /*
  속성명은 그냥 쓰면 되지만, 속성값을 자바스크립트 타입으로 써야함
  속성명 표현시 - 기호는 사용 불가 뺄셈으로 받아들일 수 있음: 카멜케이스
  */
  const style = {
    color: "tomato",
    fontSize: "18px",
  };

  return (
    <>
      {/* 주석이런식으로 써야함 */}
      <h1>처음만나는 JSX</h1>
      <p style={style} className="text">
        새로운 문법 {content}
      </p>
    </>
  );
};

export default App;
