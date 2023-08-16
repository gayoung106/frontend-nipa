import React, { createContext, useContext } from "react";

const themeDefault = { border: "10px solid tomato" };
//초깃값 데이터를 생성
const themeContext = createContext(themeDefault);
//createContext에다가 데이터 기본값을 넣으면 됨

export default function App() {
  const theme = useContext(themeContext);

  return (
    <div style={theme}>
      <h1>This is Container</h1>
      <Sub1 />
    </div>
  );
}

function Sub1() {
  const theme = useContext(themeContext);
  return (
    <themeContext.Provider value={{ border: "10px solid orange" }}>
      {/* 하위 자식 컴포넌트들에게는 해당 데이터가 전달됨 자식마다 props해줄 필요가 없어졌음 */}
      <div style={theme}>
        <h1>Item 1</h1>
        <Sub2 />
      </div>
    </themeContext.Provider>
  );
}

function Sub2() {
  const theme = useContext(themeContext);
  return (
    <div style={theme}>
      <h1>Item 2</h1>
      <Sub3 />
    </div>
  );
}

function Sub3() {
  const theme = useContext(themeContext);
  return (
    <div style={theme}>
      <h1>Item 3</h1>
    </div>
  );
}
