import React from "react";
import styled, { keyframes } from "styled-components";

const Eyes = styled.div`
  display: flex;
  justify-content: center;
`;
const Eye = styled.div`
  width: 200px;
  height: 200px;
  border: 5px solid black;
  border-radius: 50%;
  position: relative;
`;

const Eyelid = styled.div`
  width: 205px;
  height: 100px;
  background-color: #000000;
  border: 1px solid black;
  border-radius: 150px 150px 0 0;
  position: absolute;
  left: -2%;
`;

const moving = keyframes`
  0%{
    top: 40%;
    left: 10%;
  }
  100%{
    top: 40%;
    left: 70%;
  }
`;
const Ball = styled.div`
  width: 40px;
  height: 40px;
  background-color: #000000;
  border-radius: 50%;
  position: absolute;
  animation: ${moving} 3s 0s linear alternate infinite;
`;

function App() {
  return (
    <Eyes>
      <Eye>
        <Eyelid />
        <Ball />
      </Eye>
      <Eye>
        <Eyelid />
        <Ball />
      </Eye>
    </Eyes>
  );
}

export default App;
