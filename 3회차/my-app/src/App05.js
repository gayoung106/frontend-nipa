import React from "react";
import styled, { keyframes } from "styled-components";

//태그드 템플릿 리터럴 , 키프레임에는 이름이 반드시 있어야 함 그래야 요소에 맵핑 가능

const boxFade = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;

  }

  100% {
    opacity: 1;
  }
`;

const AnimatedBox = styled.div`
  width: 300px;
  height: 300px;
  background: tomato;
  animation: ${boxFade} 2s 2s infinite linear alternate;
`;

// 애니메이션에 시간정보를 하나 더 넣으면 그것은 delay(시작전 뜸들이는 시간)를 의미함
// 그리고 반복여부(infinite)
// 속도특성(ease 빨랐다가 느려짐 <-> ease-out 느렸다가 빨라짐)
// 진행방향 alternate

const App05 = () => {
  return (
    <>
      <AnimatedBox />
    </>
  );
};

export default App05;
