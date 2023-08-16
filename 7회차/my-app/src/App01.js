import React from "react";
// 상태저장소 만들기
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
// useSelector : 프로바이더가 상태를 통합적으로 제공하면 고르는 기능
// useDispatch

//리듀서 함수 만들기: 내 상태 객체를 액션에 따라 관리 해주는 역할
function reducer(currentState, action) {
  //현재 상태가 없을때 그럼 넘버는 1이야
  if (currentState === undefined) {
    return { number: 1 };
  }
  //현재 상태가 있을때 플러스하는 액션을 가지고 있는 상태
  const newState = { ...currentState };
  if (action.type === "PLUS") {
    newState.number++;
  }
  return newState;
}

//reducer상태의 저장고를 만듦
const myStore = createStore(reducer);

const App = () => {
  return (
    <>
      <div>
        {/* 상태를 통합해서 묶는 기능 provider */}
        <Provider store={myStore}>
          {/* 숫자표시 */}
          <Left />
          {/* 숫자증가 */}
          <Right />
        </Provider>
      </div>
    </>
  );
};

export default App;

function Left() {
  // 상태사용하기

  //상태객체를 전체받아서 필요한 부분만 리턴
  const number = useSelector((state) => {
    return state.number;
  });
  return (
    <>
      <h1>{number}</h1>
    </>
  );
}

function Right() {
  //상태의 액션만 필요하기 때문
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "PLUS" });
        }}
      >
        +
      </button>
    </>
  );
}
