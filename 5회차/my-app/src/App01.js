// React.memo
import React, { useState } from "react";

// 리액트 메모 했을 때와 안 했을 때 차이를 봐야 함
const Content = React.memo(({ listText }) => {
  console.log("Content is rendered");
  return (
    <ul>
      {listText.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
});
//Content는 컴포넌트임
//목록이 바뀌지 않는한 리렌더링이 될 필요 없음
// 그래서 React.memo쓰겠다

const Form = ({ listText, currentText, setListText, setCurrentText }) => {
  console.log("Form is rendered");
  return (
    // form태그의 서브밋으로 인해 listText의 상태가 변화함 따라서 렌더됨
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setListText([...listText, currentText]);
      }}
    >
      {/* 인풋에 문자를 쓸때마다 currentText의 상태가 변경 - app/form이 리렌더링 됨 */}
      {/* 그리고 당연히 자식컴포넌트(content)도 리렌더 대상에 포함됨 */}
      <input
        autoComplete="off"
        name="text"
        onChange={(e) => {
          setCurrentText(e.target.value);
        }}
      />
      <input type="submit" />
      {/* Form의 상태가 변화하면 Content도 리렌더링 됨, 
      하지만 Content의 변화가 있을때만 렌더링 될꺼야 ! */}
      <Content listText={listText} />
    </form>
  );
};

// 자식 컴포넌트에 속성을 내려줬기 때문에 자식컴포넌트 인 Form컴포넌트의 상태가 변하면, App컴포넌트가 상태관리 중인 속성들도 변하기 때문에 렌더됨
const App = () => {
  console.log("App is rendered");
  //2개의 상태를 관리
  const [currentText, setCurrentText] = useState("");
  const [listText, setListText] = useState([]);

  return (
    <>
      {/* 자식컴포넌트에게 4개의 속성을 물려줌, 상태가 변화하면 리렌더됨 */}
      <Form
        setCurrentText={setCurrentText}
        setListText={setListText}
        currentText={currentText}
        listText={listText}
      />
    </>
  );
};

export default App;
