import { useRef } from "react";

function App() {
  const inputElem = useRef(null);
  //참조객체 inputElem을 만들었음
  //초깃값 있을 수도 있고, 없을 수도 있음
  const handleClick = () => {
    inputElem.current.focus();
  };

  return (
    <>
      {/* inputElem이라는 손가락이 input을 가리킬수 있게됨 */}
      <input ref={inputElem} />
      <button onClick={handleClick}>Focus on input</button>
    </>
  );
}

export default App;
