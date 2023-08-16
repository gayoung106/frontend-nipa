import { useState } from "react";

function App() {
  //상태관리 2개
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {/* 숫자표시 */}
        {/* testid 속성은 데이터 셋을 이용해 만들도록 되어있음, 데이터셋(data-)? html속성중에서 존재하지 않는 것을 만들어서 자바스크립트로 처리하고 싶은 것  */}
        {/* testid라는 이름의 데이터 셋 속성을 만들어서, 자바스크립틀가 읽을 수 있도록 한 것 */}
        <h3 data-testid="counter">{counter}</h3>

        <div>
          {/* 버튼2개 있음 마이너스 버튼, 플러스 버튼 */}
          <button
            data-testid="minus-button"
            onClick={() => setCounter((count) => count - 1)}
            disabled={disabled}
          >
            -
          </button>
          <button
            data-testid="plus-button"
            onClick={() => setCounter((count) => count + 1)}
            disabled={disabled}
          >
            +
          </button>
        </div>
        <div>
          {/* 추가적인 버튼이 또 있음 disabled버튼 버튼을 누르면 true,false의 반전, 플마 버튼에 영향을 미침 */}
          <button
            data-testid="on/off-button"
            style={{ backgroundColor: "blue" }}
            onClick={() => setDisabled((prev) => !prev)}
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
