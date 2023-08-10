import React, { useRef, useState, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    window.localStorage.getItem("todo list");
    //key 를 쓰면 됨
  }, []);
  const inputContent = useRef(null);

  return (
    <>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>

      <button
        onClick={() => {
          setTodos([...todos, todos.push]);
        }}
      >
        추가하기
      </button>
      <button
        onClick={() => {
          //영구저장 아이템 규칙 (로컬스토리지에 데이터 저장할 때는 문자열 형태로 해야함 !)
          window.localStorage.setItem("todo list", todos);
        }}
      >
        {" "}
        로컬스토리지 사용해서 영구저장{" "}
      </button>
    </>
  );
};

export default App;
