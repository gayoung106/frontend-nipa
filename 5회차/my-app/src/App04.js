import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

// 리듀서 함수: 두개의 인수를 전달받는다, 1. 상태, 2. 액션
// 상태? 현재상태
// 액션? 상태를 어떻게 해달라(타입)는 내용이 담긴 '객체'
// 리듀서 함수는 상태와 액션을 전달받아서 만들어지는 함수
// 리듀서는 로직을 수행한 결과를 반환하고, 이는 새로운 상태가 된다
const reducer = (state, action) => {
  if (action.type === "increment") {
    return { count: state.count + 1 };
  } else if (action.type === "decrement") {
    return { count: state.count - 1 };
  }
};
const App = () => {
  // const [상태명, 디스패치] = useReducer(리듀서함수, 상태초깃값)
  //디스패치 리듀서에게 액션을 전달하는 함수
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>{state.count}</h1>
      {/* 디스패치에 타입이 디크리먼트인걸 담아서 보냄 */}
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
    </>
  );
};

export default App;
