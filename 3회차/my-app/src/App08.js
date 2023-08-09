import React, { useEffect } from "react";

function App() {
  const handleSubmit = (content) => {
    window.localStorage.setItem("content", `${content}`);
  };

  useEffect(() => {
    window.alert(`content의 내용 : ${window.localStorage.getItem("content")}`);
  }, []);

  return (
    <>
      {/* ㄷㅔ이터 입력받고 */}
      <form onSubmit={(e) => handleSubmit(e.target.content.value)}>
        {/* 원하는 컨텐츠를 쓸 수 있음 name이 content로 지정되어 있음 */}
        <input
          type="text"
          placeholder="로컬스토리지에 저장할 내용"
          name="content"
        />
        {/* submit 제출하겠다 */}
        <input type="submit" value="저장" />
      </form>
    </>
  );
}

export default App;
