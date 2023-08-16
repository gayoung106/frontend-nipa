import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
// BrowserRouter: Router Wrapper 컴포넌트(최상위 컴포넌트)
// 전환되는 화면에 대한 할당
// 라우트를 감싸는 라우츠

export default function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <NavLink to="/">메인화면</NavLink>
        </li>
        <li>
          <NavLink to="/banana">벌내너</NavLink>
        </li>
        <li>
          <NavLink to="/orange">어륀지</NavLink>
        </li>
        <li>
          <NavLink to="/tomato">토매로</NavLink>
        </li>
      </ul>
      <Routes>
        {/* path는 필수속성-키워드 형태의 루트? element에는 컴포넌트가 들어가야함*/}
        <Route path="/banana" element={<>벌내너</>} />
        <Route path="/orange" element={<>오렝지</>} />
        <Route path="/tomato" element={<>토매로</>} />
        <Route path="/" element={<>메인화면</>} />
        {/* 메인은 아래에 쓰자 */}
      </Routes>
    </BrowserRouter>
  );
}
