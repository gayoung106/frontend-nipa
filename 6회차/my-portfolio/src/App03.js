import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; //부트스트랩이 만들어준 스타일 시트 쓰기
import { Button } from "react-bootstrap"; //부트스트랩이 제공하는 리액트 컴포넌트 가져다 쓰기

const App = () => {
  return (
    <div>
      <Button
        onClick={() => {
          alert("클릭!");
        }}
      >
        PUSH
      </Button>
    </div>
  );
};

export default App;
