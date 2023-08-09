import React from "react";
import styled from "styled-components";

const Circle = styled.div`
  width: 250px;
  height: 250px;
  background-color: orange;
  border-radius: 50%;
`;

const ColoredCircle = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "red")};
  border-radius: 50%;
`;

const Rectangle = styled.div`
  width: 100px;
  height: 150px;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "black")};
  border: 1px solid black;
`;

const App = () => {
  return (
    <>
      <ColoredCircle />
      <ColoredCircle bgcolor="blue" />
      <Rectangle bgcolor="pink" />
      <Rectangle bgcolor="white" />
      <Rectangle />
    </>
  );
};

export default App;
