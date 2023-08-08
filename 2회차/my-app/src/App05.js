//state?
/*
state는 리액트 컴포넌트의 상태를 뜻하는 용어
리액트 컴포넌트가 보유하고 있는 데이터
state는 변경가능한 데이터이며, 

중요: state가 변경될 경우 컴포넌트가 다시 렌더링 됨
state는 렌더링이나 데이터 흐름에 사용되는 값을 관리하기 위한 도구
개발자가 직접 정의해서 사용해야 함

*/

/*
리액트 훅
과거에는 클래스 컴포넌트만이 state관리를 지원했으나
함수컴포넌트에서 state관리 등과 같은 리액트 훅이라는 자체 라이브러리가 등장후 함수 컴포넌트 사용
함수컴포넌트는 스스로 상태관리를 할 수 없음 따라서 useState가 필요 
*/

/*
사용방법

const [상태명, 상태변경함수] = useState(초깃값) //useState()함수 호출

*/
import { useState } from "react";
import "./App05.css";

function App() {
  const [count, setCount] = useState(0);

  // const handlePlus = () => {
  //   if (count < 5) {
  //     setCount(count + 1);
  //   }
  // };

  // const handleMinus = () => {
  //   if (count > -5) {
  //     setCount(count - 1);
  //   }
  // };
  return (
    <>
      <h1 className="heading">{count}</h1>
      <div className="div">
        <button
          className="btn"
          onClick={() => {
            if (count > -5) {
              setCount(count - 1);
            }
          }}
        >
          -
        </button>
        <button
          className="btn"
          onClick={() => {
            if (count < 5) {
              setCount(count + 1);
            }
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
