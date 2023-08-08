import React from "react";
import { useState } from "react";
import "./App06.css";

const App06 = () => {
  const [lottoNumbers, setLottoNumbers] = useState([]);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const now = `${year}년 ${month}월 ${date}일`;

  const handleRandom = () => {
    //변수 lottoNumbers의 값을 빈배열로 놓고
    const lottoNumbers = [];
    // 반복문 lottoNumber의 배열의 길이가 6개가 될때까지 반복해라
    while (lottoNumbers.length < 6) {
      // 임시변수 temp안에 45개를 랜덤으로 뽑을거야 하지만 여기에는 0도 포함되어 있기때문에 +1을 해줄것이다.
      // 그리고 소수점은 버려
      // 결국 최소값은 1이고, 최댓값은 45다.
      let temp = Math.floor(Math.random() * 45) + 1;
      //중복값을 없애기 위한 조건문
      //lottoNumbers 임시변수 temp로 뽑아둔 숫자가 있는지 확인
      // 숫자가 찾아지지 않는다? 배열에 포함되지 않는 요소를 indexOf로 조회하면? 무조건 -1이 조회됨
      // 그것을 이용해서 -1일때만 임시변수 temp배열에 push해라
      if (lottoNumbers.indexOf(temp) === -1) {
        lottoNumbers.push(temp);
      }
    }
    //그리고 배열로 뽑힌 6개 숫자를 setLottoNumbers에 상태값으로 전달
    setLottoNumbers(lottoNumbers);
  };

  const handleDefault = () => {
    setLottoNumbers([]);
  };

  return (
    <>
      <div className="container">
        <div className="lotto">
          <span>{now}</span>
          <h3>L O T T O</h3>
          <div className="numbers">
            {/* map 을 이용한 컴포넌트 렌더링 시에는, 개별 요소에 key 속성을 추가한다 ! 
          lottoNumbers는 배열의 형태
          map은 배열의 각요소 마다 화살표함수가 실행
          num은 함수 반복 과정중 현재 처리중인 숫자, idx 인덱스
          num은 로또 번호의 값, 
          <div></div>는 로또 번호 한개 한개가 쓰여지는 태그 그러니깐, div태그를 반복하기 위해 map함수를 쓰는것임
          map 함수는 lottoNumbers 배열을 반복하며 각 요소(숫자)에 대한 JSX <div> 요소를 생성
          각 숫자를 화면에 표시하기 위해 배열의 각 요소를 순회하면서 JSX 요소를 만드는데 사용됨
          */}
            {lottoNumbers.map((num, idx) => {
              return (
                <div className="eachnum" key={idx}>
                  {num}
                </div>
              );
            })}
          </div>

          <button className="startBtn" onClick={handleRandom}>
            start
          </button>
          <button onClick={handleDefault}>reset</button>
        </div>
      </div>
    </>
  );
};

export default App06;
