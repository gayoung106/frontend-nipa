import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1);
  };
  const onDecrease = () => {
    setNumber(number - 1);
  };
  //text가 변화할때마다 콜백함수가 동작해라
  //생기는 순간부터가 변화의 시작 그래서 화면뜨자마다 실행
  //의존성배열에 상태가 있으면?
  useEffect(() => {
    console.log("text 상태가 변할때마다 콜백호출");
  }, [text]);
  // 그럼, 의존성 배열을 꼭 써야해?
  useEffect(() => {
    console.log("최초 1회만 실행됨");
  }, []);
  // 의존성 배열이 아예 없으면?
  useEffect(() => {
    console.log("그럼 매번 콜백 호출이지");
  });

  return (
    <>
      <input
        type="text"
        placeholder="아무내용"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <p>{text}</p>

      <h1>{number}</h1>
      <button onClick={onDecrease}>-</button>
      <button onClick={onIncrease}>+</button>
    </>
  );
}

export default App;
